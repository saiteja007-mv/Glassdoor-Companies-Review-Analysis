# Module 1: Data Understanding

## 📊 Overview

Module 1 focuses on the foundational data understanding phase of the Employee Retention Analysis project. This module contains comprehensive data exploration and cleaning processes for the Glassdoor employee reviews dataset, providing essential insights into data quality, structure, and characteristics.

## 🎯 Objectives

- **Data Exploration**: Understand the structure, content, and quality of the raw dataset
- **Data Assessment**: Identify missing values, data types, and potential issues
- **Data Cleaning**: Prepare the dataset for analysis by handling missing values and data type conversions
- **Feature Engineering**: Create new features for enhanced analysis capabilities
- **Data Quality Report**: Document data quality metrics and cleaning decisions

## 📁 Files Included

### 1. `1 Data Exploration.ipynb`
**Purpose**: Initial data exploration and understanding

**Key Analysis Components:**
- Dataset overview and basic statistics
- Company distribution analysis (127 companies)
- Column structure and data types examination
- Missing value assessment
- Data quality evaluation

**Key Findings:**
- **Dataset Size**: 11,925 employee reviews
- **Companies**: 127 major US corporations from Forbes list
- **Data Fields**: 24 columns with comprehensive review information
- **Review Distribution**: Maximum 110 reviews per company
- **Data Source**: Glassdoor employee reviews collected via AI automation

### 2. `2 Data Cleaning.ipynb`
**Purpose**: Comprehensive data cleaning and preprocessing

**Cleaning Operations:**
- **Missing Value Handling**: Strategic removal of columns with high missing percentages
- **Data Type Conversions**: Converting ratings to appropriate numeric types
- **Date Processing**: Splitting datetime into separate date and time columns
- **Location Parsing**: Separating city and state information
- **Data Reduction**: Removing ~40% of records with critical missing values

**Key Transformations:**
- **Removed Columns**: 'Advice', 'ratingRecommendtoFriend' (high missing values)
- **Dropped Records**: Records missing critical fields (employment status, job title, ratings)
- **New Features**: 'reviewdate', 'reviewtime', 'city', 'state'
- **Final Dataset**: 7,160 records with 22 columns

## 📈 Dataset Characteristics

### Original Dataset
- **Records**: 11,925 employee reviews
- **Columns**: 24 fields
- **Companies**: 127 major US corporations
- **Time Period**: Recent employee reviews

### Cleaned Dataset
- **Records**: 7,160 employee reviews (40% reduction)
- **Columns**: 22 fields
- **Data Quality**: High-quality, analysis-ready data
- **Missing Values**: Strategically handled

## 🏢 Companies Analyzed

The dataset includes employee reviews from major corporations across various industries:

**Technology**: Microsoft, Apple, Google (Alphabet), Amazon, Meta, Tesla, NVIDIA, Intel, AMD, Adobe, Salesforce, Netflix, Uber

**Financial Services**: JPMorgan Chase, Goldman Sachs, Morgan Stanley, Citi, Wells Fargo, American Express, Visa, Mastercard, PayPal, Capital One

**Healthcare**: UnitedHealth Group, CVS Health, Johnson & Johnson, Abbott, Merck, Amgen, HCA Healthcare

**Retail & Consumer**: Walmart, Target, Costco, McDonald's, Starbucks, Nike, The Home Depot, Lowe's

**Energy & Industrial**: ExxonMobil, ConocoPhillips, Caterpillar, John Deere, General Electric, Duke Energy

**And many more Fortune 500 companies...**

## 📋 Data Fields

### Core Review Information
- **Employeer Name**: Company name
- **job title**: Employee position
- **Employement Status**: Current/former employee status
- **length of employement**: Employment duration in years
- **location/city/state**: Work location information

### Rating Metrics (1-5 Scale)
- **rating Overall**: Overall company rating
- **rating worklifebalance**: Work-life balance rating
- **ratingSeniorleadership**: Senior leadership rating
- **ratingDiversity and Inclusion**: Diversity and inclusion rating

### Review Content
- **summary**: Review title/summary
- **Pros**: Positive aspects of working at the company
- **Cons**: Negative aspects of working at the company

### Metadata
- **reviewdate/reviewtime**: Review submission timestamp
- **countHelpful/countNothelpful**: Review helpfulness votes
- **Featured**: Whether review is featured

## 🔧 Technical Implementation

### Technologies Used
- **Python**: Primary programming language
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing
- **Jupyter Notebooks**: Interactive development environment

### Key Functions
- **Data Loading**: CSV file import with proper encoding
- **Missing Value Analysis**: Percentage-based missing value assessment
- **Data Type Conversion**: Converting ratings to integers
- **Date Processing**: Parsing and splitting datetime fields
- **Location Parsing**: String manipulation for city/state separation

## 📊 Data Quality Metrics

### Before Cleaning
- **Total Records**: 11,925
- **Missing Values**: Varied across columns (0-60% missing)
- **Data Types**: Mixed (object, float, int)

### After Cleaning
- **Total Records**: 7,160 (40% reduction)
- **Missing Values**: Minimal, strategically handled
- **Data Types**: Optimized for analysis
- **Data Quality**: High-quality, analysis-ready

## 🎯 Key Insights

### Data Distribution
- **Company Coverage**: 127 major US corporations
- **Review Distribution**: Balanced across companies (max 110 per company)
- **Industry Representation**: Diverse sector coverage
- **Geographic Coverage**: Nationwide location distribution

### Data Quality Findings
- **High Missing Rates**: Advice and recommendation columns
- **Critical Fields**: Employment status, job title, ratings are well-populated
- **Date Quality**: Consistent datetime format
- **Location Data**: Well-structured city/state information

### Cleaning Decisions
- **Strategic Removal**: High-missing columns removed
- **Record Filtering**: Critical missing values trigger record removal
- **Feature Engineering**: Enhanced location and date features
- **Type Optimization**: Ratings converted to integers for analysis

## 🚀 Usage Instructions

### Running the Notebooks

1. **Prerequisites**:
   ```bash
   pip install pandas numpy jupyter
   ```

2. **Data Path Setup**:
   - Ensure the dataset path is correctly configured
   - Update file paths if needed for your system

3. **Execution Order**:
   - Run `1 Data Exploration.ipynb` first for understanding
   - Run `2 Data Cleaning.ipynb` for data preparation

4. **Output Files**:
   - Cleaned dataset saved as `Glassdoor Reviews Cleaned and Processed.csv`

### Expected Outputs
- **Exploration Results**: Dataset statistics and quality metrics
- **Cleaned Dataset**: Analysis-ready CSV file
- **Quality Report**: Documentation of cleaning decisions

## 📝 Notes

- **Data Reduction**: 40% data reduction is intentional for quality
- **Missing Values**: Strategic handling based on business importance
- **Feature Engineering**: New features enhance analysis capabilities
- **Data Types**: Optimized for statistical analysis and visualization

## 🔄 Next Steps

This module prepares the foundation for:
- **Module 2**: Statistical Analysis and Insights
- **Module 3**: Visualization and Reporting
- **Module 4**: Advanced Analytics and Modeling

The cleaned dataset is now ready for comprehensive employee retention analysis across major US corporations.

---

**Note**: This module represents the critical first step in the data analysis pipeline, ensuring high-quality, well-structured data for subsequent analysis phases.
