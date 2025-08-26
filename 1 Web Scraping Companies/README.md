# Employee Retention Analysis: Web Scraping Project

## Overview
This project scrapes the Forbes Global 2000 Companies list (filtered for United States) and collects company names. It then attempts to find the corresponding Glassdoor review URLs for each company. The data is saved as CSV files for further analysis.

## Features
- Scrapes all US companies from the Forbes Global 2000 list using Selenium.
- Handles dynamic content loading and pagination/scrolling.
- (Optional) Uses Playwright to search for each company's Glassdoor review page.
- Saves results to CSV files, including autosave for long runs.

## Requirements
- Python 3.8+
- Google Chrome browser
- ChromeDriver (compatible with your Chrome version)
- pip packages:
  - selenium
  - beautifulsoup4
  - pandas
  - websocket-client
  - playwright (for Glassdoor scraping)
  - nest_asyncio (for async in Jupyter)

## Setup
1. **Create and activate a virtual environment (recommended):**
   ```powershell
   python -m venv .venv
   .venv\Scripts\Activate
   ```
2. **Install dependencies:**
   ```powershell
   pip install selenium beautifulsoup4 pandas websocket-client
   pip install playwright nest_asyncio
   playwright install
   ```
3. **Download ChromeDriver:**
   - Download from https://sites.google.com/chromium.org/driver/
   - Place it in your PATH or specify its location in the code.

## Usage
### 1. Scraping Forbes Companies
- Run the relevant notebook cells in `Web Scraping.ipynb` to scrape company names from Forbes and save to `forbes_us_companies.csv` or `forbes_us_companies_full.csv`.

### 2. Scraping Glassdoor URLs
- Use the Playwright-based code (in the notebook or `scraping.py`) to search for each company's Glassdoor review page.
- Results are saved to `companies_with_real_glassdoor_urls.csv`.

### 3. Autosave Feature
- For long runs, partial results are saved every 25 companies to `partial_output.csv`.

## Notes
- For Playwright code, running as a standalone script is recommended on Windows (not in Jupyter) due to event loop limitations.
- If you encounter `ModuleNotFoundError`, ensure you are installing packages in the correct Python environment.
- Adjust file paths as needed for your system.

## License
This project is for educational and research purposes.
