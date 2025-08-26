# Employee Retention Analysis Project

A comprehensive data analysis project focused on collecting and analyzing employee retention data from major companies using multiple data gathering techniques including web scraping, browser automation, and AI-driven data collection.

## 🎯 Project Overview

This project aims to gather comprehensive employee retention and company review data from various sources to perform meaningful analysis on employee satisfaction trends across major US companies. The project is structured in four main phases, each utilizing different methodologies for data collection and analysis.

## 📁 Project Structure

```
Employee-Retention-Analysis/
├── 1 Web Scraping Companies/          # Phase 1: Company data scraping
├── 2 Extension for Glassdoor Company Reviews/  # Phase 2: Review link collection
├── 3 Gathering data using AI/         # Phase 3: AI-driven data gathering
├── 4 Data analysis of Glassdoor Reviews/  # Phase 4: Data analysis and insights
├── Datasets/                          # Centralized data storage
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

AI-powered data collection and enhancement methods using Apify and Make.com automation.

**Key Features:**
- Automated Glassdoor review scraping using Apify actors
- Make.com workflow automation for data pipeline orchestration
- Residential proxy rotation for reliable data collection
- Batch processing with up to 100 reviews per company
- Structured JSON output with comprehensive review data

**Technologies Used:**
- Apify platform for web scraping
- Make.com for workflow automation
- Google Sheets integration for data management
- Residential proxies for reliable access

**Output:**
- Comprehensive employee review datasets
- Structured JSON data with 33+ fields per review
- Automated data quality control

### Phase 4: Data Analysis of Glassdoor Reviews
**Directory:** `4 Data analysis of Glassdoor Reviews/`

Comprehensive data analysis and insights generation from collected employee review data.

**Key Features:**
- Exploratory data analysis of employee reviews
- Statistical analysis of retention factors
- Company comparison and benchmarking
- Sentiment analysis and trend identification
- Data visualization and reporting

**Technologies Used:**
- Python (Pandas, NumPy, Matplotlib, Seaborn)
- Jupyter Notebooks for interactive analysis
- Statistical analysis libraries
- Data visualization tools

**Current Analysis:**
- **Dataset Size**: 11,925 employee reviews from 127 companies
- **Data Fields**: 24 columns including ratings, job titles, locations, and review content
- **Companies**: Forbes top 127 companies including JPMorgan Chase, Amazon, Microsoft, Apple, and more
- **Analysis Focus**: Employee satisfaction, retention factors, company comparisons

**Analysis Modules:**
- **Module 1: Data Understanding** - Initial data exploration and quality assessment
- Additional modules planned for advanced analytics

## 📊 Datasets

**Directory:** `Datasets/`

Centralized data storage containing comprehensive employee review datasets.

**Available Datasets:**
- `Glassdoor Reviews RAW.csv` (5.7MB) - Raw scraped data
- `Glassdoor Reviews Cleaned.csv` (5.3MB) - Processed and cleaned data
- `Dataset description-ERA.pdf` - Comprehensive data documentation

**Dataset Characteristics:**
- **Total Records**: 11,925 employee reviews
- **Companies**: 127 major US corporations
- **Data Fields**: 24 structured columns
- **Collection Method**: AI-powered automation via Apify
- **Data Quality**: High-quality, structured employee feedback

**Key Data Fields:**
- Employee ratings (overall, work-life balance, culture, compensation, etc.)
- Job titles and employment duration
- Location and company information
- Review content (pros, cons, advice to management)
- Review metadata (helpful votes, submission dates)

## 🛠️ Setup and Installation

### Prerequisites
- Python 3.8+
- Google Chrome browser
- Git (for cloning the repository)
- Jupyter Notebook (for data analysis)

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
   pip install -r requirements.txt
   pip install selenium beautifulsoup4 pandas websocket-client playwright nest_asyncio jupyter matplotlib seaborn
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

### Running Phase 4: Data Analysis

1. Navigate to the data analysis directory:
   ```bash
   cd "4 Data analysis of Glassdoor Reviews"
   ```

2. Open and run the analysis notebooks:
   ```bash
   jupyter notebook "Module 1 Data Understanding/1 Data Exploration.ipynb"
   ```

3. Explore the comprehensive analysis of:
   - Dataset characteristics and quality
   - Company distribution and review patterns
   - Employee satisfaction metrics
   - Retention factor analysis

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
- **Analysis Reports**: Comprehensive insights and visualizations

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

### Phase 3 Architecture
- **Apify Platform**: Scalable web scraping infrastructure
- **Make.com Workflows**: Visual automation and data pipeline orchestration
- **Google Sheets Integration**: Data storage and management
- **Residential Proxies**: Reliable data collection

### Phase 4 Architecture
- **Jupyter Notebooks**: Interactive data analysis environment
- **Pandas/NumPy**: Data manipulation and statistical analysis
- **Matplotlib/Seaborn**: Data visualization and reporting
- **Statistical Libraries**: Advanced analytics and insights

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

**Note**: This is an evolving project with comprehensive data collection and analysis capabilities. The project now includes a complete data analysis phase with insights from 11,925 employee reviews across 127 major US companies. Check individual directories for the most up-to-date documentation and implementation details.