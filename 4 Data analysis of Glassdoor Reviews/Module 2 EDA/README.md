# Module 2: Exploratory Data Analysis (EDA)

## 📊 Overview

Module 2 focuses on comprehensive exploratory data analysis of the cleaned Glassdoor employee reviews dataset. This module provides deep insights into employee satisfaction patterns, company performance comparisons, and retention factors across major US corporations.

## 🎯 Objectives

- **Statistical Analysis**: Perform comprehensive statistical analysis of employee ratings
- **Company Benchmarking**: Compare companies across multiple satisfaction metrics
- **Role-based Insights**: Analyze satisfaction patterns by job titles and positions
- **Geographic Analysis**: Understand regional variations in employee satisfaction
- **Temporal Trends**: Identify patterns in ratings over time
- **Employment Factors**: Analyze how tenure and employment status affect satisfaction
- **Correlation Analysis**: Understand relationships between different rating categories

## 📁 Files Included

### 1. `1 EDA.ipynb`
**Purpose**: Comprehensive exploratory data analysis

**Analysis Sections:**
- **Dataset Overview & Structure**: Data quality assessment and basic statistics
- **Company Level Summary**: Company performance benchmarking
- **Role-based Analysis**: Job title satisfaction patterns
- **Location-based Analysis**: Geographic distribution and regional trends
- **Rating Category Distribution**: Statistical analysis of all rating types
- **Time-based Trends**: Temporal analysis of review patterns
- **Employment Status & Tenure Impact**: How employment factors affect ratings

### 2. `Plottings/` Directory
**Purpose**: Comprehensive visualization library

**Visualization Categories:**
- **Company Performance**: Top-rated companies across different metrics
- **Job Title Analysis**: Satisfaction patterns by role
- **Geographic Distribution**: State-wise review distribution
- **Statistical Analysis**: Histograms, correlation matrices, and distributions
- **Time-based Trends**: Yearly patterns and temporal analysis
- **Employment Factors**: Tenure and status impact on satisfaction

## 📈 Key Analysis Findings

### 🏢 Company Performance Insights

**Top 5 Companies by Overall Rating:**
1. **NVIDIA** - 4.56 average rating
2. **ConocoPhillips** - 4.45 average rating
3. **General Dynamics Information Technology** - 4.42 average rating
4. **Merck** - 4.40 average rating
5. **KKR** - 4.38 average rating

**Consistent Top Performers:**
- **Travelers, NVIDIA, and Pacific Gas and Electric** consistently appear among top-rated employers across multiple metrics
- **Salesforce** leads in both diversity and compensation ratings
- **General Dynamics Information Technology** shows balanced strength across work-life balance, leadership, and culture

### 👨‍💼 Role-based Analysis

**Most Reviewed Job Titles:**
1. **Software Engineer** - Highest number of reviews
2. **Manager** - Second highest review volume
3. **Director** - Senior management representation
4. **Senior Software Engineer** - Technical leadership
5. **Associate** - Entry-level positions

**Key Role Insights:**
- **Software Engineers** have the highest number of reviews but consistently report lower ratings across work-life balance, career opportunities, and senior leadership
- **Directors and Managers** receive the highest ratings for work-life balance and career opportunities
- **Software Engineers** show the highest overall average rating (3.95) despite lower category-wise scores

### 📍 Geographic Analysis

**Top States by Review Volume:**
1. **California (CA)** - Highest concentration of reviews
2. **Arizona (AZ)** - Second highest volume
3. **Alabama (AL)** - Significant review presence
4. **Other states** - Lower but diverse distribution

**Geographic Insights:**
- **California leads** with the highest number of employee reviews, suggesting concentration of large employers and tech firms
- **States like New Mexico, Hawaii, and Wyoming** report the highest average overall ratings despite low review counts
- **Steep drop** in review frequency outside major tech hubs

### 📊 Rating Category Analysis

**Correlation Insights:**
- **Strong positive relationships** among most rating categories (especially between culture, leadership, and diversity)
- **Weak correlation** with overall rating, indicating employees may score overall satisfaction based on different factors
- **Bimodal distributions** in many rating categories suggest polarized workforce satisfaction

**Rating Patterns:**
- **CEO approval and business outlook** show dominant preference for "Approve" and "Positive"
- **Work-life balance and career opportunities** have substantial low-end ratings, indicating retention concerns
- **Histograms reveal** bimodal or right-skewed distributions across many categories

### ⏰ Temporal Trends

**Review Volume Trends:**
- **Exponential increase** in Glassdoor reviews in 2024 and 2025
- **Recent surge** in employee feedback or improved data collection efforts
- **Growing transparency** in employee expression

**Rating Trends:**
- **Relatively high average ratings** since 2018 with slight downward trend post-2021
- **Steep rise in reviews** paired with moderate decline in ratings may indicate growing employee concerns

### 👥 Employment Factors

**Tenure Impact:**
- **Tenure buckets** analyzed: 0-1 yrs, 1-3 yrs, 3-5 yrs, 5+ yrs
- **Rating patterns** vary significantly by employment duration
- **Long-term employees** show different satisfaction patterns than recent hires

**Current vs Former Employees:**
- **Current employees** give higher overall ratings (3.85) compared to former employees (3.40)
- **Positive sentiment** while still employed vs. retrospective assessment
- **Employment status** significantly impacts satisfaction reporting

## 📊 Visualization Library

### Company Performance Visualizations
- **Top 5 Employers by Average Rating** - Overall company performance
- **Top 5 Employers by Work-Life Balance Rating** - Work-life satisfaction leaders
- **Top 5 Employers by Senior Leadership Rating** - Leadership effectiveness
- **Top 5 Employers by Career Opportunities Rating** - Growth and development
- **Top 5 Employers by Compensation and Benefits Rating** - Financial satisfaction
- **Top 5 Employers by Culture and Values Rating** - Cultural alignment
- **Top 5 Employers by Diversity and Inclusion Rating** - DEI performance

### Role-based Visualizations
- **Number of Reviews by Job Title** - Review volume by position
- **Average Rating by Job Title** - Satisfaction by role
- **Average Work-Life Balance Rating by Job Title** - Work-life satisfaction by position
- **Average Senior Leadership Rating by Job Title** - Leadership perception by role
- **Average Career Opportunities Rating by Job Title** - Growth perception by position

### Geographic Visualizations
- **Number of Reviews by State** - Geographic distribution of reviews
- **Average Rating by State** - Regional satisfaction patterns

### Statistical Analysis Visualizations
- **Correlation Matrix of Ratings** - Inter-rating relationships
- **Histograms for All Rating Categories** - Distribution analysis
- **Boxplot Overall Ratings Current vs Former Employees** - Employment status impact

### Time-based Visualizations
- **Number of Reviews per Year** - Temporal volume trends
- **Average Rating per Year** - Temporal satisfaction trends

### Employment Factor Visualizations
- **Average Rating by Tenure Bucket** - Tenure impact on satisfaction
- **Average Rating Current vs Former Employees** - Employment status comparison

## 🔧 Technical Implementation

### Technologies Used
- **Python**: Primary programming language
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing
- **Matplotlib**: Data visualization
- **Seaborn**: Statistical visualization
- **Jupyter Notebooks**: Interactive development environment

### Key Analysis Functions
- **Statistical Analysis**: Descriptive statistics, correlation analysis
- **Data Grouping**: Company, role, location, and time-based aggregations
- **Visualization Generation**: Automated plot creation with consistent styling
- **Data Transformation**: Binning, categorization, and feature engineering
- **Quality Control**: Missing value handling and data validation

## 📈 Data Quality Metrics

### Analysis Dataset
- **Total Records**: 6,971 employee reviews (after cleaning)
- **Companies**: 127 major US corporations
- **Data Fields**: 24 structured columns
- **Missing Values**: Strategically handled
- **Data Types**: Optimized for statistical analysis

### Analysis Coverage
- **Company Coverage**: 127 major US corporations
- **Role Coverage**: Multiple job titles across various levels
- **Geographic Coverage**: Nationwide location distribution
- **Temporal Coverage**: Multi-year review data
- **Rating Coverage**: 10 different satisfaction metrics

## 🎯 Key Insights Summary

### Employee Satisfaction Drivers
1. **Work-Life Balance**: Critical factor for employee retention
2. **Career Opportunities**: Strong correlation with overall satisfaction
3. **Senior Leadership**: Significant impact on employee perception
4. **Culture and Values**: Foundation for long-term satisfaction
5. **Compensation and Benefits**: Important but not the sole driver

### Company Performance Patterns
1. **Technology Companies**: Mixed performance with some leading in innovation but lagging in work-life balance
2. **Financial Services**: Strong in compensation but varying in culture ratings
3. **Healthcare**: Consistent performance across multiple metrics
4. **Retail**: Varying performance with some leaders in employee satisfaction

### Retention Risk Factors
1. **Software Engineering Roles**: High burnout risk despite good compensation
2. **Junior Positions**: Lower satisfaction in career opportunities
3. **High-Tech Hubs**: Work-life balance challenges
4. **Long Tenure**: Potential satisfaction decline over time

## 🚀 Usage Instructions

### Running the Analysis

1. **Prerequisites**:
   ```bash
   pip install pandas numpy matplotlib seaborn jupyter
   ```

2. **Data Path Setup**:
   - Ensure the cleaned dataset path is correctly configured
   - Update file paths if needed for your system

3. **Execution**:
   ```bash
   jupyter notebook "1 EDA.ipynb"
   ```

4. **Output Generation**:
   - All visualizations are automatically saved to the `Plottings/` directory
   - High-resolution PNG files (300 DPI) for publication quality
   - Organized by analysis category for easy navigation

### Expected Outputs
- **Statistical Analysis**: Comprehensive insights and patterns
- **Visualization Library**: 20+ high-quality plots and charts
- **Company Rankings**: Performance comparisons across metrics
- **Trend Analysis**: Temporal and categorical patterns
- **Correlation Insights**: Inter-relationship analysis

## 📝 Analysis Notes

- **Data Quality**: High-quality, cleaned dataset with minimal missing values
- **Statistical Rigor**: Proper statistical methods applied throughout
- **Visualization Quality**: Publication-ready charts with consistent styling
- **Insight Depth**: Multi-dimensional analysis across various factors
- **Actionable Results**: Clear recommendations and patterns identified

## 🔄 Next Steps

This module provides the foundation for:
- **Module 3**: Advanced Statistical Modeling and Predictive Analytics
- **Module 4**: Interactive Dashboard Development
- **Module 5**: Business Intelligence Reporting
- **Module 6**: Retention Strategy Recommendations

The comprehensive analysis reveals critical insights for understanding employee satisfaction and retention factors across major US corporations.

---

**Note**: This module represents a comprehensive exploration of employee satisfaction data, providing actionable insights for HR professionals, business leaders, and researchers interested in employee retention and workplace satisfaction analysis.
