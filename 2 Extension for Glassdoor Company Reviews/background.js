// Background service worker to maintain extension state
let extensionState = {
  companies: [],
  current: 0,
  results: [],
  isProcessing: false,
  currentTabId: null
};

// Listen for messages from popup and content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Background received message:", message);
  
  switch (message.type) {
    case "get_state":
      sendResponse(extensionState);
      break;
      
    case "update_state":
      extensionState = { ...extensionState, ...message.state };
      // Save to storage for persistence
      chrome.storage.local.set({ extensionState });
      sendResponse({ success: true });
      break;
      
    case "start_search":
      startSearch(message.companies);
      sendResponse({ success: true });
      break;
      
    case "stop_search":
      stopSearch();
      sendResponse({ success: true });
      break;
      
    case "found_link":
      // Handle the found link directly in background
      if (extensionState.isProcessing) {
        const company = extensionState.companies[extensionState.current];
        handleResult(company, message.link, sender.tab.id);
      }
      sendResponse({ success: true });
      break;
      
    case "reset_state":
      extensionState = {
        companies: [],
        current: 0,
        results: [],
        isProcessing: false,
        currentTabId: null
      };
      chrome.storage.local.set({ extensionState });
      sendResponse({ success: true });
      break;
      
    case "download_csv":
      downloadCSV().then(() => {
        sendResponse({ success: true });
      }).catch((error) => {
        console.error("CSV download error:", error);
        sendResponse({ success: false, error: error.message });
      });
      return true; // Keep message channel open for async response
  }
  
  return true; // Keep message channel open for async response
});

// Start search function moved to background
function startSearch(companies) {
  console.log(`Background: Starting search for ${companies.length} companies`);
  
  extensionState.companies = companies;
  extensionState.current = 0;
  extensionState.results = [];
  extensionState.isProcessing = true;
  extensionState.currentTabId = null;
  
  // Save state
  chrome.storage.local.set({ extensionState });
  
  // Start searching
  searchCompany(extensionState.companies[extensionState.current]);
}

// Stop search function
function stopSearch() {
  console.log("Background: Stopping search");
  
  extensionState.isProcessing = false;
  
  // Close current tab if it exists
  if (extensionState.currentTabId) {
    chrome.tabs.remove(extensionState.currentTabId, () => {
      if (chrome.runtime.lastError) {
        console.log("Tab already closed or error:", chrome.runtime.lastError);
      }
    });
    extensionState.currentTabId = null;
  }
  
  // Save state
  chrome.storage.local.set({ extensionState });
}

// Search company function moved to background
function searchCompany(company) {
  if (!extensionState.isProcessing) {
    return; // Stop if search was halted
  }
  
  console.log(`Background: Searching for company: ${company} (${extensionState.current + 1}/${extensionState.companies.length})`);
  
  // Use DuckDuckGo search with varied queries
  const searchVariations = [
    `${company} site:glassdoor.com reviews`,
    `${company} glassdoor employee reviews`,
    `"${company}" glassdoor.com reviews`,
    `${company} glassdoor company reviews`
  ];
  
  const randomQuery = searchVariations[Math.floor(Math.random() * searchVariations.length)];
  const query = encodeURIComponent(randomQuery);
  const url = `https://duckduckgo.com/?q=${query}&gd_ext_company=${encodeURIComponent(company)}`;
  
  chrome.tabs.create({ url, active: false }, function(tab) {
    if (!extensionState.isProcessing) {
      // If search was stopped while creating tab, close it immediately
      chrome.tabs.remove(tab.id);
      return;
    }
    
    extensionState.currentTabId = tab.id;
    chrome.storage.local.set({ extensionState });
    
    console.log(`Background: Created DuckDuckGo tab for ${company}: ${tab.id}`);
    
    // Set timeout for DuckDuckGo results
    setTimeout(() => {
      if (extensionState.isProcessing && extensionState.current < extensionState.companies.length && extensionState.currentTabId === tab.id) {
        console.log(`Background: Timeout for ${company}, marking as not found`);
        handleResult(company, "TIMEOUT - NOT FOUND", tab.id);
      }
    }, 10000); // 10 second timeout for DuckDuckGo
  });
}

// Handle result function moved to background
function handleResult(company, link, tabId = null) {
  if (!extensionState.isProcessing) {
    return; // Ignore results if search was stopped
  }
  
  console.log(`Background: Result for ${company}: ${link}`);
  
  // Format the result with "company_name Reviews" format
  const companyReviewsFormat = `${company} Reviews`;
  const formattedResult = [companyReviewsFormat, link];
  extensionState.results.push(formattedResult);
  
  // Close the tab if provided
  if (tabId) {
    chrome.tabs.remove(tabId, () => {
      if (chrome.runtime.lastError) {
        console.log("Tab already closed or error:", chrome.runtime.lastError);
      }
    });
    if (extensionState.currentTabId === tabId) {
      extensionState.currentTabId = null;
    }
  }
  
  extensionState.current++;
  chrome.storage.local.set({ extensionState });
  
  if (extensionState.current < extensionState.companies.length && extensionState.isProcessing) {
    // Use shorter delays since DuckDuckGo is less aggressive about rate limiting
    let delay = Math.random() * 2000 + 2000; // 2-4 seconds
    
    console.log(`Background: Waiting ${Math.round(delay/1000)} seconds before next search`);
    
    // Process next company after delay
    setTimeout(() => {
      if (extensionState.isProcessing) { // Check again in case stop was clicked during delay
        searchCompany(extensionState.companies[extensionState.current]);
      }
    }, delay);
  } else if (extensionState.isProcessing) {
    // All companies processed
    extensionState.isProcessing = false;
    chrome.storage.local.set({ extensionState });
    
    console.log("Background: All companies processed, ready for download");
    
    // Create notification or badge to indicate completion
    chrome.action.setBadgeText({ text: "✓" });
    chrome.action.setBadgeBackgroundColor({ color: "#4CAF50" });
    
    // Auto-download CSV
    setTimeout(() => {
      downloadCSV();
    }, 1000);
  }
}

// Download CSV function - Fixed version
async function downloadCSV() {
  if (!extensionState.results.length) {
    console.log("No results to download yet.");
    return;
  }
  
  console.log("Background: Downloading CSV");
  
  try {
    let csv = "Company Reviews,Glassdoor Link,Notes\n" +
      extensionState.results.map(([companyReviews, link]) => {
        const notes = link.includes("NOT FOUND") ? "No Results" :
                     link.includes("ERROR") ? "Search Error" : "Success";
        return `"${companyReviews.replace(/"/g, '""')}","${link}","${notes}"`;
      }).join("\n");
    
    // Create blob and data URL
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const filename = `glassdoor_links_${new Date().toISOString().split('T')[0]}.csv`;
    
    // Use chrome.downloads API
    const downloadId = await new Promise((resolve, reject) => {
      chrome.downloads.download({
        url: url,
        filename: filename,
        saveAs: true
      }, (downloadId) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve(downloadId);
        }
      });
    });
    
    console.log("CSV download started with ID:", downloadId);
    
    // Clean up the URL after a delay
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 10000);
    
    return true;
    
  } catch (error) {
    console.error("Download error:", error);
    
    // Fallback: Try alternative download method by opening a new tab
    try {
      let csv = "Company Reviews,Glassdoor Link,Notes\n" +
        extensionState.results.map(([companyReviews, link]) => {
          const notes = link.includes("NOT FOUND") ? "No Results" :
                       link.includes("ERROR") ? "Search Error" : "Success";
          return `"${companyReviews.replace(/"/g, '""')}","${link}","${notes}"`;
        }).join("\n");
      
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      
      // Open in new tab as fallback
      chrome.tabs.create({
        url: url,
        active: false
      }, (tab) => {
        console.log("Opened CSV in new tab as fallback");
        setTimeout(() => {
          URL.revokeObjectURL(url);
          // Close the tab after a delay
          chrome.tabs.remove(tab.id);
        }, 5000);
      });
      
    } catch (fallbackError) {
      console.error("Fallback download also failed:", fallbackError);
      throw fallbackError;
    }
  }
}

// Restore state when extension starts
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get(['extensionState'], (result) => {
    if (result.extensionState) {
      extensionState = result.extensionState;
      console.log("Extension state restored:", extensionState);
      
      // Clear badge if not processing
      if (!extensionState.isProcessing) {
        chrome.action.setBadgeText({ text: "" });
      }
    }
  });
});

// Handle extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log("Glassdoor Link Finder extension installed");
  // Load state from storage
  chrome.storage.local.get(['extensionState'], (result) => {
    if (result.extensionState) {
      extensionState = result.extensionState;
      console.log("Extension state loaded on install:", extensionState);
    }
  });
});

// Handle tab updates to maintain search process
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (extensionState.isProcessing && tabId === extensionState.currentTabId) {
    if (changeInfo.status === 'complete') {
      console.log(`Tab ${tabId} finished loading`);
    }
  }
});

// Handle tab removal
chrome.tabs.onRemoved.addListener((tabId) => {
  if (extensionState.currentTabId === tabId) {
    console.log(`Current search tab ${tabId} was closed`);
    extensionState.currentTabId = null;
  }
}); 