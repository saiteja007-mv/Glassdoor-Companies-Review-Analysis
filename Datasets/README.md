# Employee Retention Analysis Datasets

## Overview
This folder contains datasets collected for comprehensive employee retention analysis. The primary dataset consists of employee reviews scraped from Glassdoor using AI-powered automation tools.

## 📊 Dataset: Glassdoor Reviews.csv

### Dataset Summary
- **File Name**: `Glassdoor Reviews.csv`
- **File Size**: 5.8MB
- **Total Records**: 23,924 employee reviews (excluding header)
- **Data Points per Review**: 33 structured fields
- **Collection Period**: 2025 (Recent data)
- **Collection Method**: Automated scraping via Apify + Make.com
- **Data Source**: Glassdoor.com company review pages

### Data Collection Methodology
The dataset was collected using an automated AI-powered workflow:
1. **Source**: Company URLs from curated list (B42:B100 range)
2. **Scraping Tool**: Apify's Glassdoor Reviews Actor (cAbCkTzBPP0HFO50f)
3. **Processing**: Make.com automation with residential proxies
4. **Limits**: Maximum 100 reviews per company
5. **Quality Control**: Synchronous execution with error handling

## 📋 Data Schema

The dataset contains **33 columns** organized into the following categories:

### 🗣️ Review Content (5 fields)
| Column | Data Type | Description |
|--------|-----------|-------------|
| `Advice` | Text | Employee advice to management |
| `Cons` | Text | Negative aspects of working at the company |
| `Pros` | Text | Positive aspects of working at the company |
| `Summary` | Text | Review title/summary |
| `prosOriginal` | Text | Original language pros text |

### 📊 Review Metadata (5 fields)
| Column | Data Type | Description |
|--------|-----------|-------------|
| `countHelpful` | Integer | Number of helpful votes received |
| `countNothelpful` | Integer | Number of not helpful votes received |
| `Featured` | Boolean | Whether the review is featured |
| `flaggingdisabled` | Boolean | Review flagging status |
| `reviewdatetime` | DateTime | Review submission timestamp |

### 👤 Employee Information (8 fields)
| Column | Data Type | Description |
|--------|-----------|-------------|
| `Employement Status` | Text | Employment status (REGULAR, FORMER, etc.) |
| `isCurrent Job` | Boolean | Whether employee is still with company |
| `job title` | Text | Employee's job position |
| `Job title type` | Text | Job title classification (JobTitle) |
| `length of employement` | Integer | Duration of employment (in years) |
| `location` | Text | Work location (city, state) |
| `location type` | Text | Location classification (City) |
| `location type2` | Text | Secondary location type (CITY) |

### 🏢 Company Information (3 fields)
| Column | Data Type | Description |
|--------|-----------|-------------|
| `Employeer Type` | Text | Employer classification (Employer) |
| `Employeer ID` | Integer | Unique company identifier |
| `Employeer Name` | Text | Company name (e.g., JPMorganChase) |

### ⭐ Ratings (Scale 1-5) (10 fields)
| Column | Data Type | Description |
|--------|-----------|-------------|
| `rating Overall` | Integer | Overall company rating (1-5) |
| `ratingWorkLifeBalance` | Integer | Work-life balance rating |
| `ratingCultureAndValues` | Integer | Culture and values rating |
| `ratingCareerOpportunities` | Integer | Career opportunities rating |
| `ratingCompensationAndBenefits` | Integer | Compensation and benefits rating |
| `ratingSeniorLeadership` | Integer | Senior leadership rating |
| `ratingBusinessOutlook` | Text | Business outlook (POSITIVE/NEGATIVE) |
| `ratingCEO` | Text | CEO approval (APPROVE/DISAPPROVE) |
| `ratingRecommendToFriend` | Text | Recommendation to friend (POSITIVE/NEGATIVE) |
| `ratingDiversityAndInclusion` | Integer | Diversity and inclusion rating |

### 🔧 Technical Fields (2 fields)
| Column | Data Type | Description |
|--------|-----------|-------------|
| `language` | Text | Review language code (eng) |
| `original language id` | Text | Original language identifier |

## 🏭 Companies Included

The dataset includes employee reviews from major corporations, including:
- **JPMorgan Chase** - Financial services giant with multiple locations
- **Other Fortune 500 companies** - Various industries and sectors

### Sample Data Points
- **Locations**: New York NY, Los Angeles CA, and other major cities
- **Job Titles**: Private Client Banker, Senior Associate, and various roles
- **Employment Duration**: Range from recent hires to long-term employees (6-9+ years)
- **Review Dates**: 2025 (recent reviews for current insights)

## 📈 Data Quality & Characteristics

### Data Completeness
- **High Coverage**: 33 standardized fields per review
- **Rich Content**: Detailed textual feedback and numerical ratings
- **Temporal Data**: Recent reviews (2025) for current workplace insights
- **Geographic Diversity**: Multiple locations and regional perspectives

### Data Validation
- **Automated Collection**: Reduces human error in data entry
- **Structured Format**: Consistent field mapping across all records
- **Proxy Rotation**: Ensures data authenticity and reduces bias
- **Error Handling**: Built-in validation during collection process

## 🎯 Use Cases

### Employee Retention Analysis
- **Sentiment Analysis**: Analyze pros/cons to identify satisfaction drivers
- **Turnover Prediction**: Use ratings and employment duration for modeling
- **Culture Assessment**: Evaluate culture and values ratings across companies
- **Compensation Insights**: Analyze compensation satisfaction trends

### Business Intelligence
- **Competitive Analysis**: Compare ratings across different companies
- **Location Analysis**: Assess workplace satisfaction by geographic region
- **Department Analysis**: Evaluate satisfaction by job title/department
- **Temporal Trends**: Track satisfaction changes over time

### Research Applications
- **Academic Studies**: Employee satisfaction and retention research
- **HR Analytics**: Inform talent retention strategies
- **Organizational Psychology**: Workplace culture and satisfaction studies
- **Market Research**: Industry-wide employee sentiment analysis

## 📊 Quick Statistics

### Dataset Overview
```
Total Reviews:        23,924
Total Companies:      Multiple Fortune 500 organizations
Data Fields:          33 structured columns
File Size:           5.8MB
Collection Date:     2025
Average Rating Range: 1-5 stars across 10 categories
```

### Sample Rating Distribution
- **Overall Ratings**: 1-5 scale across all companies
- **Work-Life Balance**: Detailed scoring for retention analysis
- **Compensation**: Direct feedback on salary and benefits satisfaction
- **Culture**: Cultural fit and values alignment metrics

## 🔄 Data Updates

### Collection Frequency
- **Current Status**: One-time collection (2025)
- **Future Updates**: Can be automated for continuous monitoring
- **Refresh Capability**: Workflow can be re-run for updated data
- **Scalability**: System supports expanding to additional companies

## 📝 Data Usage Guidelines

### Best Practices
1. **Data Privacy**: Respect employee anonymity in analysis
2. **Ethical Use**: Use insights to improve workplace conditions
3. **Statistical Analysis**: Apply appropriate statistical methods for insights
4. **Bias Awareness**: Consider potential selection bias in online reviews

### Technical Recommendations
- **Data Cleaning**: Check for duplicate reviews before analysis
- **Text Processing**: Apply NLP techniques for sentiment analysis
- **Missing Data**: Handle null values appropriately in numerical fields
- **Encoding**: UTF-8 encoding for proper text character handling

## 📚 Related Documentation

- **Collection Process**: See `/3 Gathering data using AI/README.md`
- **Analysis Examples**: See `/2 EDA and Analysis/` folder
- **Visualization**: See `/4 Dashboard/` folder
- **Automation Blueprint**: See `/3 Gathering data using AI/blueprint (8).json`

## 🔗 Data Lineage

```
Google Sheets (URLs) → Make.com (Automation) → Apify (Scraping) → CSV Output
```

This dataset provides a comprehensive foundation for employee retention analysis, offering rich insights into workplace satisfaction, company culture, and factors influencing employee loyalty across major organizations. 