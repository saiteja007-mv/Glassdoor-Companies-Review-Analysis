# Employee Retention Analysis Project

A comprehensive data analysis project focused on collecting and analyzing employee retention data from major companies using multiple data gathering techniques including web scraping, browser automation, and AI-driven data collection.

## 🎯 Project Overview

This project aims to gather comprehensive employee retention and company review data from various sources to perform meaningful analysis on employee satisfaction trends across major US companies. The project is structured in three main phases, each utilizing different methodologies for data collection.

## 📁 Project Structure

```
Employee-Retention-Analysis/
├── 1 Web Scraping Companies/          # Phase 1: Company data scraping
├── 2 Extension for Glassdoor Company Reviews/  # Phase 2: Review link collection
├── 3 Gathering data using AI/         # Phase 3: AI-driven data gathering
├── venv/                              # Virtual environment
└── README.md                          # This file
```

## 🚀 Project Phases

### Phase 1: Web Scraping Companies
**Directory:** `1 Web Scraping Companies/`

Automated web scraping of Forbes Global 2000 Companies list to collect comprehensive company data.

**Key Features:**
- Scrapes US companies from Forbes Global 2000 list using Selenium
- Handles dynamic content loading and pagination
- Attempts to find corresponding Glassdoor review URLs
- Outputs structured CSV data for analysis

**Technologies Used:**
- Python, Selenium, BeautifulSoup, Pandas
- ChromeDriver for browser automation
- Playwright for advanced scraping

**Output:**
- `companies.csv` - Main company dataset
- `forbes_us_companies.csv` - Forbes company data
- `companies_with_real_glassdoor_urls.csv` - Companies with Glassdoor links

### Phase 2: Extension for Glassdoor Company Reviews
**Directory:** `2 Extension for Glassdoor Company Reviews/`

Chrome extension for efficiently collecting Glassdoor review links using automated search.

**Key Features:**
- Batch processing of company lists
- Background processing with persistent state
- DuckDuckGo integration to avoid CAPTCHAs
- Automatic CSV export of results
- Human-like behavior patterns for natural searching

**Technologies Used:**
- JavaScript (ES6+)
- Chrome Extension APIs
- DuckDuckGo Search Integration
- Service Workers for background processing

**Components:**
- `manifest.json` - Extension configuration
- `popup.html/js` - User interface and interaction
- `content.js` - Page content extraction
- `background.js` - Background processing logic

### Phase 3: Gathering Data Using AI
**Directory:** `3 Gathering data using AI/`

AI-powered data collection and enhancement methods (currently in development).

**Planned Features:**
- AI-driven data augmentation
- Natural language processing for review analysis
- Automated data quality assessment
- Intelligent data categorization

## 🛠️ Setup and Installation

### Prerequisites
- Python 3.8+
- Google Chrome browser
- Git (for cloning the repository)

### Environment Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Employee-Retention-Analysis
   ```

2. **Create and activate virtual environment:**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install selenium beautifulsoup4 pandas websocket-client playwright nest_asyncio
   playwright install
   ```

4. **Setup ChromeDriver:**
   - Download from [ChromeDriver](https://sites.google.com/chromium.org/driver/)
   - Add to PATH or specify location in scripts

### Chrome Extension Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `2 Extension for Glassdoor Company Reviews/` directory
4. Pin the extension to your toolbar

## 📊 Usage Guide

### Running Phase 1: Web Scraping

1. Navigate to the web scraping directory:
   ```bash
   cd "1 Web Scraping Companies"
   ```

2. Open and run the Jupyter notebook:
   ```bash
   jupyter notebook "Web Scraping.ipynb"
   ```

3. Follow the notebook cells to:
   - Scrape Forbes company list
   - Collect Glassdoor URLs
   - Export data to CSV

### Running Phase 2: Chrome Extension

1. Click the extension icon in Chrome toolbar
2. Enter company names (one per line) in the textarea
3. Click "Start Search" to begin processing
4. Monitor progress or continue browsing - search runs in background
5. Download automatically generated CSV when complete

### Sample Input for Extension:
```
Microsoft
Google
Apple
Amazon
Tesla
Netflix
```

## 📈 Data Output

The project generates several types of data files:

- **Company Lists**: Basic company information from Forbes
- **Glassdoor URLs**: Direct links to company review pages
- **CSV Exports**: Structured data ready for analysis
- **Review Data**: Company review information and ratings

## 🔧 Technical Architecture

### Phase 1 Architecture
- **Selenium WebDriver**: Automated browser control
- **BeautifulSoup**: HTML parsing and data extraction
- **Pandas**: Data manipulation and CSV export
- **Async Processing**: Playwright for concurrent operations

### Phase 2 Architecture
- **Service Worker**: Background processing and state management
- **Content Scripts**: Page interaction and data extraction
- **Chrome Storage API**: Persistent state management
- **DuckDuckGo Integration**: Privacy-focused search automation

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🔒 Privacy and Ethics

- **Data Usage**: This project is for educational and research purposes
- **Privacy Protection**: Uses privacy-focused search engines
- **Rate Limiting**: Implements human-like delays to respect server resources
- **Terms Compliance**: Adheres to robots.txt and terms of service

## ⚠️ Disclaimers

- This project is for educational and research purposes only
- Ensure compliance with website terms of service
- Use responsibly and respect rate limits
- Some data sources may have access restrictions

## 📄 License

This project is licensed for educational and research purposes. Please ensure compliance with all applicable terms of service and data usage policies.

## 🤝 Support

For questions, issues, or contributions, please refer to the individual README files in each phase directory for detailed technical documentation.

---

**Note**: This is an evolving project with Phase 3 currently under development. Check individual directories for the most up-to-date documentation and implementation details.