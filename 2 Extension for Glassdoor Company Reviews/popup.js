let companies = [];
let current = 0;
let results = [];
let isProcessing = false;
let currentTabId = null;

// Load state when popup opens
document.addEventListener('DOMContentLoaded', function() {
  loadExtensionState();
  
  // Refresh state every 2 seconds to show live updates
  setInterval(loadExtensionState, 2000);
});

function loadExtensionState() {
  chrome.runtime.sendMessage({ type: "get_state" }, (response) => {
    if (response) {
      companies = response.companies || [];
      current = response.current || 0;
      results = response.results || [];
      isProcessing = response.isProcessing || false;
      currentTabId = response.currentTabId || null;
      
      // Update UI based on loaded state
      updateUI();
    }
  });
}

function updateUI() {
  // Update input field (only if not currently processing)
  if (!isProcessing && companies.length > 0) {
    document.getElementById("companyInput").value = companies.join('\n');
  }
  
  // Update button states
  if (isProcessing) {
    document.getElementById("searchBtn").disabled = true;
    document.getElementById("searchBtn").style.display = "none";
    document.getElementById("stopBtn").style.display = "inline-block";
    
    // Show processing message with live updates
    let processingMessage = "Processing companies using DuckDuckGo... Please wait.";
    if (companies.length > 0 && current >= 0) {
      processingMessage = `Processing: ${current}/${companies.length} companies completed. You can close this popup - search continues in background!`;
    }
    document.getElementById("results").innerHTML = `<div style="color: #2196F3; font-weight: bold;">${processingMessage}</div>`;
  } else {
    document.getElementById("searchBtn").disabled = false;
    document.getElementById("searchBtn").style.display = "inline-block";
    document.getElementById("stopBtn").style.display = "none";
  }
  
  // Update results display
  if (results.length > 0) {
    let statusMessage = isProcessing ? 
      `<div style="color: #2196F3; font-weight: bold;">⏳ Progress: ${current}/${companies.length} companies processed (Running in background)</div>` :
      `<div style="color: #4CAF50; font-weight: bold;">✅ Completed: ${results.length} companies processed</div>`;
    
    document.getElementById("results").innerHTML = 
      statusMessage +
      results.map(([companyReviews, lnk], index) =>
        `<div class="link-row"><b>${index + 1}. ${companyReviews}</b>: <a href="${lnk}" target="_blank">${lnk}</a></div>`
      ).join('');
  }
}

document.getElementById("searchBtn").onclick = function() {
  if (isProcessing) {
    alert("Already processing companies. Please wait...");
    return;
  }
  
  const input = document.getElementById("companyInput").value.trim();
  const inputCompanies = input.split('\n').map(s => s.trim()).filter(s => s);
  
  if (inputCompanies.length === 0) {
    alert("Please enter at least one company name.");
    return;
  }
  
  // Send start command to background
  chrome.runtime.sendMessage({ 
    type: "start_search", 
    companies: inputCompanies 
  }, (response) => {
    if (response && response.success) {
      console.log("Search started in background");
      // Clear badge
      chrome.action.setBadgeText({ text: "" });
      // Immediately update UI
      loadExtensionState();
    }
  });
};

document.getElementById("stopBtn").onclick = function() {
  if (!isProcessing) {
    return;
  }
  
  console.log("Stop button clicked, sending stop command to background");
  
  // Send stop command to background
  chrome.runtime.sendMessage({ type: "stop_search" }, (response) => {
    if (response && response.success) {
      console.log("Search stopped in background");
      
      // Trigger CSV download if there are results
      if (results.length > 0) {
        setTimeout(() => {
          downloadCSV();
        }, 500);
      }
      
      // Update UI
      loadExtensionState();
    }
  });
};

// Download CSV function - with fallback
function downloadCSV() {
  console.log("Attempting to download CSV...");
  
  // First try background download
  chrome.runtime.sendMessage({ type: "download_csv" }, (response) => {
    if (response && response.success) {
      console.log("CSV download initiated from background");
    } else {
      console.log("Background download failed, trying popup fallback");
      // Fallback: Download directly from popup
      downloadCSVFromPopup();
    }
  });
}

// Fallback download method that works from popup
function downloadCSVFromPopup() {
  if (!results.length) {
    alert("No results to download yet.");
    return;
  }
  
  console.log("Using popup fallback download method");
  
  try {
    let csv = "Company Reviews,Glassdoor Link,Notes\n" +
      results.map(([companyReviews, link]) => {
        const notes = link.includes("NOT FOUND") ? "No Results" :
                     link.includes("ERROR") ? "Search Error" : "Success";
        return `"${companyReviews.replace(/"/g, '""')}","${link}","${notes}"`;
      }).join("\n");
    
    // Create blob and download link
    let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = `glassdoor_links_${new Date().toISOString().split('T')[0]}.csv`;
    a.style.display = 'none';
    
    // Append to popup, click, and remove
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Clean up
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
    
    console.log("CSV downloaded successfully using popup fallback");
    alert("CSV file downloaded successfully!");
    
  } catch (error) {
    console.error("Popup download error:", error);
    alert("Download failed. Please try again or check browser console for errors.");
  }
}

// Manual download button
document.getElementById("downloadBtn").onclick = downloadCSV;

// Clear results button
document.getElementById("clearBtn") && (document.getElementById("clearBtn").onclick = function() {
  chrome.runtime.sendMessage({ type: "reset_state" }, (response) => {
    if (response && response.success) {
      companies = [];
      current = 0;
      results = [];
      isProcessing = false;
      currentTabId = null;
      
      document.getElementById("companyInput").value = "";
      document.getElementById("results").innerHTML = "";
      chrome.action.setBadgeText({ text: "" });
      updateUI();
    }
  });
});
