# Glassdoor Companies Review Analysis

A comprehensive data analysis project focused on collecting and analyzing employee retention data from major companies using multiple data gathering techniques including web scraping, browser automation, and AI-driven data collection.

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [🏆 Project Achievements](#-project-achievements)
  - [📊 Data Collection Success](#-data-collection-success)
  - [🔍 Analysis Insights](#-analysis-insights)
  - [📈 Comprehensive Visualizations](#-comprehensive-visualizations)
  - [🛠️ Technical Innovation](#️-technical-innovation)
- [📁 Project Structure](#-project-structure)
- [🚀 Project Phases](#-project-phases)
  - [Phase 1: Web Scraping Companies](#phase-1-web-scraping-companies)
  - [Phase 2: Extension for Glassdoor Company Reviews](#phase-2-extension-for-glassdoor-company-reviews)
  - [Phase 3: Gathering Data Using AI](#phase-3-gathering-data-using-ai)
  - [Phase 4: Data Analysis of Glassdoor Reviews](#phase-4-data-analysis-of-glassdoor-reviews)
- [📊 Datasets](#-datasets)
- [🛠️ Setup and Installation](#️-setup-and-installation)
  - [Prerequisites](#prerequisites)
  - [Environment Setup](#environment-setup)
  - [Chrome Extension Installation](#chrome-extension-installation)
- [📊 Usage Guide](#-usage-guide)
  - [Running Phase 1: Web Scraping](#running-phase-1-web-scraping)
  - [Running Phase 2: Chrome Extension](#running-phase-2-chrome-extension)
  - [Running Phase 4: Data Analysis](#running-phase-4-data-analysis)
  - [Module 3: Data Analysis using PowerBI](#module-3-data-analysis-using-powerbi)
- [📈 Data Output](#-data-output)
- [📊 Visualization Gallery](#-visualization-gallery)
  - [🏢 Company Performance Analysis](#-company-performance-analysis)
  - [👨‍💼 Role-based Insights](#-role-based-insights)
  - [📍 Geographic Distribution](#-geographic-distribution)
  - [📊 Statistical Analysis](#-statistical-analysis)
  - [⏰ Temporal Trends](#-temporal-trends)
  - [👥 Employment Factors](#-employment-factors)
- [🔧 Technical Architecture](#-technical-architecture)
  - [Phase 1 Architecture](#phase-1-architecture)
  - [Phase 2 Architecture](#phase-2-architecture)
  - [Phase 3 Architecture](#phase-3-architecture)
  - [Phase 4 Architecture](#phase-4-architecture)
- [📝 Contributing](#-contributing)
- [🔒 Privacy and Ethics](#-privacy-and-ethics)
- [⚠️ Disclaimers](#️-disclaimers)
- [📄 License](#-license)
- [🤝 Support](#-support)

---

## 🎯 Project Overview

This project aims to gather comprehensive employee retention and company review data from various sources to perform meaningful analysis on employee satisfaction trends across major US companies. The project is structured in four main phases, each utilizing different methodologies for data collection and analysis.

## 🏆 Project Achievements

### 📊 Data Collection Success
- **6,971 Employee Reviews** collected from 127 major US corporations
- **24 Structured Data Fields** per review including ratings, job titles, locations, and feedback
- **Multi-Source Collection** using web scraping, browser automation, and AI-powered tools
- **High-Quality Data** with comprehensive cleaning and preprocessing

### 🔍 Analysis Insights
- **Top Performers Identified**: NVIDIA (4.56), ConocoPhillips (4.45), General Dynamics IT (4.42) lead in overall ratings
- **Role Patterns Discovered**: Software Engineers show highest review volume but face work-life balance challenges
- **Geographic Trends**: California leads in review volume, smaller states show higher average satisfaction
- **Temporal Patterns**: Exponential increase in reviews 2024-2025, slight rating decline post-2021
- **Employment Factors**: Current employees rate 3.85 vs former employees 3.40 average

### 📈 Comprehensive Visualizations
- **20+ High-Resolution Charts** covering company performance, role analysis, geographic trends
- **Statistical Analysis** including correlation matrices, distribution plots, and trend analysis
- **Publication-Ready Outputs** with consistent styling and professional presentation
- **Multi-Dimensional Insights** across company, role, location, and time dimensions
- **Interactive PowerBI Dashboard** for real-time business intelligence and reporting

### 🛠️ Technical Innovation
- **Multi-Phase Architecture** with specialized tools for each collection method
- **AI-Powered Automation** using Apify and Make.com for scalable data collection
- **Chrome Extension Development** for efficient link collection and processing
- **Advanced Data Processing** with comprehensive cleaning and feature engineering

**[⬆️ Back to Top](#-table-of-contents)**

## 📁 Project Structure

```
Glassdoor Companies Review Analysis/
├── 1 Web Scraping Companies/          # Phase 1: Company data scraping
├── 2 Extension for Glassdoor Company Reviews/  # Phase 2: Review link collection
├── 3 Gathering data using AI/         # Phase 3: AI-driven data gathering
├── 4 Data analysis of Glassdoor Reviews/  # Phase 4: Data analysis and insights
│   ├── Module 1 Data Understanding & Preprocessing/  # Data exploration and cleaning
│   ├── Module 2 EDA/                  # Exploratory data analysis and visualizations
│   └── Module 3 Data Analysis using PowerBI/  # Interactive dashboard and BI reporting
├── Datasets/                          # Centralized data storage
└── README.md                          # This file
```

**[⬆️ Back to Top](#-table-of-contents)**

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
- **Dataset Size**: 6,971 employee reviews from 127 companies (cleaned dataset)
- **Data Fields**: 24 columns including ratings, job titles, locations, and review content
- **Companies**: Forbes top 127 companies including JPMorgan Chase, Amazon, Microsoft, Apple, and more
- **Analysis Focus**: Employee satisfaction, retention factors, company comparisons
- **PowerBI Dashboard**: Interactive business intelligence dashboard for real-time analysis and reporting

**Analysis Modules:**
- **Module 1: Data Understanding & Preprocessing** - Initial data exploration, cleaning, and quality assessment
- **Module 2: Exploratory Data Analysis (EDA)** - Comprehensive statistical analysis and visualization
- **Module 3: Data Analysis using PowerBI** - Interactive dashboard and business intelligence reporting

**Key Findings:**
- **Top Companies**: NVIDIA (4.56), ConocoPhillips (4.45), General Dynamics IT (4.42) lead in overall ratings
- **Role Insights**: Software Engineers have highest review volume but lower work-life balance ratings
- **Geographic Trends**: California leads in review volume, smaller states show higher average ratings
- **Temporal Patterns**: Exponential increase in reviews 2024-2025, slight rating decline post-2021
- **Employment Factors**: Current employees rate 3.85 vs former employees 3.40 average

## 📊 Datasets

**Directory:** `Datasets/`

Centralized data storage containing comprehensive employee review datasets.

**Available Datasets:**
- `Glassdoor Reviews RAW.csv` (5.7MB) - Raw scraped data
- `Glassdoor Reviews Cleaned.csv` (5.3MB) - Processed and cleaned data
- `Glassdoor Reviews Cleaned and Processed.csv` (2.6MB) - Final analysis-ready dataset
- `Dataset description-ERA.pdf` - Comprehensive data documentation

**Dataset Characteristics:**
- **Total Records**: 6,971 employee reviews (cleaned and processed)
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

**[⬆️ Back to Top](#-table-of-contents)**

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
   cd Glassdoor Companies Review Analysis
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

**[⬆️ Back to Top](#-table-of-contents)**

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
   # Module 1: Data Understanding & Preprocessing
   jupyter notebook "Module 1 Data Understanding & Preprocessing/1 Data Exploration.ipynb"
   jupyter notebook "Module 1 Data Understanding & Preprocessing/2 Data Cleaning.ipynb"
   
   # Module 2: Exploratory Data Analysis
   jupyter notebook "Module 2 EDA/1 EDA.ipynb"
   ```

3. Explore the comprehensive analysis of:
   - **Module 1**: Dataset characteristics, quality assessment, and data cleaning
   - **Module 2**: Statistical analysis, company benchmarking, role-based insights, geographic trends, temporal patterns, and employment factors

4. **Visualization Library**: All generated plots are saved in `Module 2 EDA/Plottings/` with high-resolution PNG files including:
   - Company performance comparisons
   - Role-based satisfaction analysis
   - Geographic distribution charts
   - Statistical analysis plots
   - Time-based trend visualizations
   - Employment factor analysis

5. **PowerBI Dashboard**: Access the interactive dashboard for real-time analysis:
   - **Online Dashboard**: [Glassdoor Reviews Analysis Dashboard](https://app.powerbi.com/view?r=eyJrIjoiODdiNzRlMjktNTc3ZS00NjkyLTk1MzYtZjU0NmQyYzJhZjcwIiwidCI6IjdhZmI5ZTIyLTkzMDgtNDE4Ni04ZTI5LWVhMjMxZmYzYmFmNyIsImMiOjN9)
   - **Local Workbook**: Open `Module 3 Data Analysis using PowerBI/Glassdoor_reviews_analysis.pbix` in PowerBI Desktop
   - **Dashboard Screenshot**: Reference `Module 3 Data Analysis using PowerBI/Glassdoor_Reviews_Dashboard.png` for overview

### Module 3: Data Analysis using PowerBI
**Directory:** `4 Data analysis of Glassdoor Reviews/Module 3 Data Analysis using PowerBI/`

Interactive business intelligence dashboard for comprehensive employee review analysis and reporting.

**Key Features:**
- **Interactive Dashboard**: Real-time data exploration and analysis
- **Multi-Dimensional Views**: Company, role, location, and time-based insights
- **Dynamic Filtering**: Interactive slicers and filters for focused analysis
- **Professional Reporting**: Business-ready visualizations and KPIs
- **Data Refresh Capability**: Live connection to analysis datasets

**Technologies Used:**
- Microsoft PowerBI Desktop
- PowerBI Service for sharing and collaboration
- Advanced DAX calculations and measures
- Custom visualizations and formatting

**Dashboard Components:**
- **Company Performance Overview**: Top performers and benchmarking metrics
- **Role-Based Analysis**: Job title satisfaction patterns and trends
- **Geographic Insights**: Regional distribution and satisfaction by location
- **Temporal Trends**: Year-over-year analysis and seasonal patterns
- **Employment Factors**: Current vs former employee satisfaction analysis
- **Rating Breakdowns**: Detailed analysis across all rating categories

**Files:**
- `Glassdoor_reviews_analysis.pbix` - PowerBI workbook with complete dashboard
- `Glassdoor_Reviews_Dashboard.png` - Dashboard screenshot for reference

**Access the Dashboard:**
- **PowerBI Service Link**: [Glassdoor Reviews Analysis Dashboard](https://app.powerbi.com/view?r=eyJrIjoiODdiNzRlMjktNTc3ZS00NjkyLTk1MzYtZjU0NmQyYzJhZjcwIiwidCI6IjdhZmI5ZTIyLTkzMDgtNDE4Ni04ZTI5LWVhMjMxZmYzYmFmNyIsImMiOjN9)
- **Embed Code**: Available for integration into websites and applications
- **Export Options**: PDF, PowerPoint, and image export capabilities

**[⬆️ Back to Top](#-table-of-contents)**

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

**[⬆️ Back to Top](#-table-of-contents)**

## 📊 Visualization Gallery

### 🏢 Company Performance Analysis
- **Top 5 Employers by Average Rating** - Overall company satisfaction leaders
- **Top 5 Employers by Work-Life Balance** - Work-life satisfaction champions
- **Top 5 Employers by Senior Leadership** - Leadership effectiveness rankings
- **Top 5 Employers by Career Opportunities** - Growth and development leaders
- **Top 5 Employers by Compensation & Benefits** - Financial satisfaction leaders
- **Top 5 Employers by Culture & Values** - Cultural alignment champions
- **Top 5 Employers by Diversity & Inclusion** - DEI performance leaders

### 👨‍💼 Role-based Insights
- **Number of Reviews by Job Title** - Review volume distribution across roles
- **Average Rating by Job Title** - Satisfaction patterns by position
- **Work-Life Balance by Job Title** - Work-life satisfaction by role
- **Senior Leadership Rating by Job Title** - Leadership perception by position
- **Career Opportunities by Job Title** - Growth perception by role

### 📍 Geographic Distribution
- **Number of Reviews by State** - Geographic concentration of reviews
- **Average Rating by State** - Regional satisfaction patterns

### 📊 Statistical Analysis
- **Correlation Matrix of Ratings** - Inter-rating relationship analysis
- **Histograms for All Rating Categories** - Distribution analysis across metrics
- **Boxplot: Current vs Former Employees** - Employment status impact

### ⏰ Temporal Trends
- **Number of Reviews per Year** - Temporal volume patterns
- **Average Rating per Year** - Satisfaction trends over time

### 👥 Employment Factors
- **Average Rating by Tenure Bucket** - Tenure impact on satisfaction
- **Current vs Former Employee Ratings** - Employment status comparison

*All visualizations are high-resolution (300 DPI) PNG files saved in `4 Data analysis of Glassdoor Reviews/Module 2 EDA/Plottings/`*

**[⬆️ Back to Top](#-table-of-contents)**

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
- **Module Structure**: Organized analysis phases with comprehensive documentation
- **Visualization Pipeline**: Automated high-quality plot generation

**[⬆️ Back to Top](#-table-of-contents)**

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

**[⬆️ Back to Top](#-table-of-contents)**

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

**Note**: This is an evolving project with comprehensive data collection and analysis capabilities. The project now includes a complete data analysis phase with insights from 6,971 employee reviews across 127 major US companies. The analysis reveals critical patterns in employee satisfaction, with NVIDIA, ConocoPhillips, and General Dynamics IT leading in overall ratings. Software Engineers show the highest review volume but face work-life balance challenges, while current employees rate their companies significantly higher than former employees. The project now features an interactive PowerBI dashboard for real-time business intelligence and professional reporting. Check individual directories for the most up-to-date documentation and implementation details.

---

## 🔗 Quick Navigation

**[⬆️ Back to Top](#-table-of-contents)** | **[📁 Project Structure](#-project-structure)** | **[🚀 Project Phases](#-project-phases)** | **[📊 Datasets](#-datasets)** | **[🛠️ Setup](#️-setup-and-installation)** | **[📊 Usage](#-usage-guide)** | **[📈 Visualizations](#-visualization-gallery)**