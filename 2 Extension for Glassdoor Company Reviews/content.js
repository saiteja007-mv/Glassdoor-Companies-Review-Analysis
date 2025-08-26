// Helper to extract company name from query param
function getCompany() {
  let url = new URL(window.location.href);
  return url.searchParams.get("gd_ext_company") || "Unknown";
}

// Function to wait for elements to load
function waitForElement(selector, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver((mutations, obs) => {
      const element = document.querySelector(selector);
      if (element) {
        obs.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found within ${timeout}ms`));
    }, timeout);
  });
}

// Function to check if page has CAPTCHA
function hasCaptcha() {
  const captchaSelectors = [
    '[id*="captcha"]',
    '[class*="captcha"]',
    '[src*="captcha"]',
    'iframe[src*="recaptcha"]',
    '.g-recaptcha',
    '#recaptcha',
    '[data-sitekey]',
    'form[action*="sorry"]',
    'div[id*="recaptcha"]'
  ];
  
  for (let selector of captchaSelectors) {
    if (document.querySelector(selector)) {
      console.log(`CAPTCHA detected with selector: ${selector}`);
      return true;
    }
  }
  
  // Check for common CAPTCHA text
  const bodyText = document.body.innerText.toLowerCase();
  const captchaTexts = [
    'verify you are not a robot',
    'prove you are human',
    'captcha',
    'unusual traffic',
    'automated queries',
    'verify that you are not a robot'
  ];
  
  for (let text of captchaTexts) {
    if (bodyText.includes(text)) {
      console.log(`CAPTCHA detected with text: ${text}`);
      return true;
    }
  }
  
  return false;
}

// Function to simulate human-like behavior
function simulateHumanBehavior() {
  return new Promise((resolve) => {
    // Random scroll to simulate reading
    const scrollAmount = Math.random() * 500 + 200;
    window.scrollTo(0, scrollAmount);
    
    // Random delay to simulate reading time
    const delay = Math.random() * 2000 + 1000; // 1-3 seconds
    setTimeout(resolve, delay);
  });
}

// On DuckDuckGo Search page: find and save the first Glassdoor link
if (window.location.hostname === "duckduckgo.com") {
  console.log("Content script running on DuckDuckGo search page");
  
  // Wait for search results to load with human-like behavior
  setTimeout(async () => {
    try {
      // Simulate human behavior first
      await simulateHumanBehavior();
      
      // Wait for search results container - DuckDuckGo uses different selectors
      await waitForElement('[data-testid="result"]', 8000);
      
      // Look for Glassdoor links in DuckDuckGo results
      let links = Array.from(document.querySelectorAll("a[href*='glassdoor.com']"));
      let found = false;
      
      console.log(`Found ${links.length} Glassdoor links`);
      
      for (let link of links) {
        let href = link.href;
        console.log("Checking link:", href);
        
        if (href && 
            (href.includes("glassdoor.com/Reviews") || 
             href.includes("glassdoor.com/Overview") ||
             href.includes("glassdoor.com/Jobs")) && 
            !href.includes("webcache") &&
            !href.includes("translate")) {
          
          console.log("Found valid Glassdoor link:", href);
          
          // Send the link directly instead of navigating to it
          chrome.runtime.sendMessage({ 
            type: "found_link", 
            link: href,
            company: getCompany()
          });
          found = true;
          break;
        }
      }
      
      if (!found) {
        // Try a broader search for any glassdoor.com links
        links = Array.from(document.querySelectorAll("a")).filter(a => 
          a.href && a.href.includes("glassdoor.com") && !a.href.includes("webcache")
        );
        
        if (links.length > 0) {
          console.log("Found broader Glassdoor link:", links[0].href);
          
          // Send the first broader link found
          chrome.runtime.sendMessage({ 
            type: "found_link", 
            link: links[0].href,
            company: getCompany()
          });
          found = true;
        }
      }
      
      if (!found) {
        console.log("No Glassdoor links found, sending NOT FOUND");
        chrome.runtime.sendMessage({ 
          type: "found_link", 
          link: "NOT FOUND - No Glassdoor results in search",
          company: getCompany()
        });
      }
    } catch (error) {
      console.error("Error in DuckDuckGo search:", error);
      chrome.runtime.sendMessage({ 
        type: "found_link", 
        link: "ERROR - Failed to process search results",
        company: getCompany()
      });
    }
  }, Math.random() * 2000 + 2000); // Random delay between 2-4 seconds
}

// On Glassdoor page: after load, send current URL to popup
if (window.location.hostname === "www.glassdoor.com") {
  console.log("Content script running on Glassdoor page");
  
  setTimeout(() => {
    try {
      let company = getCompany();
      let currentUrl = window.location.href;
      
      console.log(`Glassdoor page loaded for company: ${company}`);
      console.log(`Current URL: ${currentUrl}`);
      
      // Verify this is actually a company page
      if (currentUrl.includes("/Reviews/") || 
          currentUrl.includes("/Overview/") || 
          currentUrl.includes("/Jobs/")) {
        
        chrome.runtime.sendMessage({ 
          type: "found_link", 
          link: currentUrl, 
          company: company 
        });
      } else {
        // If we're on Glassdoor but not a company page, try to find a reviews link
        let reviewsLink = document.querySelector("a[href*='/Reviews/']");
        if (reviewsLink) {
          window.location.href = reviewsLink.href;
        } else {
          chrome.runtime.sendMessage({ 
            type: "found_link", 
            link: "NOT FOUND - Not a company page",
            company: company
          });
        }
      }
    } catch (error) {
      console.error("Error on Glassdoor page:", error);
      chrome.runtime.sendMessage({ 
        type: "found_link", 
        link: "ERROR - Failed to process Glassdoor page",
        company: getCompany()
      });
    }
  }, 4000); // Increased delay for Glassdoor page to fully load
}
