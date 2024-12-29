import { CategoryOption } from '../../types/index.types';

export const CATEGORIES: CategoryOption[] = [
  {
    label: 'Market News',
    value: 'market_news',
    subcategories: [
      { label: 'Stock market updates', value: 'stock_market_updates' },
      { label: 'Bond market trends', value: 'bond_market_trends' },
      {
        label: 'Commodity market movements',
        value: 'commodity_market_movements',
      },
      {
        label: 'Forex (foreign exchange) market news',
        value: 'forex_market_news',
      },
    ],
  },
  {
    label: 'Corporate Finance News',
    value: 'corporate_finance_news',
    subcategories: [
      { label: 'Earnings reports', value: 'earnings_reports' },
      { label: 'Mergers and acquisitions', value: 'mergers_acquisitions' },
      { label: 'Initial Public Offerings (IPOs)', value: 'ipos' },
      { label: 'Corporate restructuring', value: 'corporate_restructuring' },
    ],
  },
  {
    label: 'Economic Indicators',
    value: 'economic_indicators',
    subcategories: [
      { label: 'GDP growth rates', value: 'gdp_growth_rates' },
      { label: 'Inflation rates', value: 'inflation_rates' },
      { label: 'Employment/unemployment figures', value: 'employment_figures' },
      {
        label: 'Consumer confidence index',
        value: 'consumer_confidence_index',
      },
    ],
  },
  {
    label: 'Central Bank and Monetary Policy News',
    value: 'central_bank_and_monetary_policy_news',
    subcategories: [
      { label: 'Interest rate decisions', value: 'interest_rate_decisions' },
      {
        label: 'Quantitative easing measures',
        value: 'quantitative_easing_measures',
      },
      {
        label: 'Central bank statements and speeches',
        value: 'central_bank_statements',
      },
      {
        label: 'Changes in reserve requirements',
        value: 'reserve_requirements_changes',
      },
    ],
  },
  {
    label: 'Government Fiscal Policy News',
    value: 'government_fiscal_policy_news',
    subcategories: [
      { label: 'Budget announcements', value: 'budget_announcements' },
      { label: 'Tax policy changes', value: 'tax_policy_changes' },
      {
        label: 'Government spending initiatives',
        value: 'government_spending_initiatives',
      },
      { label: 'National debt updates', value: 'national_debt_updates' },
    ],
  },
  {
    label: 'Industry-Specific Financial News',
    value: 'industry_specific_financial_news',
    subcategories: [
      { label: 'Banking sector news', value: 'banking_sector_news' },
      {
        label: 'Insurance industry updates',
        value: 'insurance_industry_updates',
      },
      {
        label: 'Real estate market trends',
        value: 'real_estate_market_trends',
      },
      { label: 'Fintech developments', value: 'fintech_developments' },
    ],
  },
  {
    label: 'International Trade and Global Economy News',
    value: 'international_trade_and_global_economy_news',
    subcategories: [
      {
        label: 'Trade agreements and disputes',
        value: 'trade_agreements_disputes',
      },
      { label: 'Currency fluctuations', value: 'currency_fluctuations' },
      {
        label: 'Global economic forecasts',
        value: 'global_economic_forecasts',
      },
      { label: 'Emerging market trends', value: 'emerging_market_trends' },
    ],
  },
  {
    label: 'Personal Finance News',
    value: 'personal_finance_news',
    subcategories: [
      {
        label: 'Savings and investment advice',
        value: 'savings_investment_advice',
      },
      {
        label: 'Retirement planning updates',
        value: 'retirement_planning_updates',
      },
      { label: 'Consumer credit trends', value: 'consumer_credit_trends' },
      { label: 'Tax planning strategies', value: 'tax_planning_strategies' },
    ],
  },
  {
    label: 'Regulatory and Legal News',
    value: 'regulatory_and_legal_news',
    subcategories: [
      {
        label: 'Financial regulations and reforms',
        value: 'financial_regulations_reforms',
      },
      { label: 'Compliance issues', value: 'compliance_issues' },
      {
        label: 'Legal cases affecting financial markets',
        value: 'legal_cases_financial_markets',
      },
      {
        label: 'Regulatory body announcements (SEC, FCA, etc.)',
        value: 'regulatory_body_announcements',
      },
    ],
  },
  {
    label: 'Cryptocurrency and Blockchain News',
    value: 'cryptocurrency_and_blockchain_news',
    subcategories: [
      {
        label: 'Bitcoin and altcoin price movements',
        value: 'bitcoin_altcoin_price_movements',
      },
      {
        label: 'Blockchain technology developments',
        value: 'blockchain_technology_developments',
      },
      {
        label: 'Cryptocurrency regulations',
        value: 'cryptocurrency_regulations',
      },
      {
        label: 'Adoption of digital currencies by institutions',
        value: 'digital_currency_adoption',
      },
    ],
  },
  {
    label: 'Investment and Asset Management News',
    value: 'investment_and_asset_management_news',
    subcategories: [
      { label: 'Mutual fund performance', value: 'mutual_fund_performance' },
      { label: 'Hedge fund strategies', value: 'hedge_fund_strategies' },
      { label: 'ETF (Exchange-Traded Fund) trends', value: 'etf_trends' },
      {
        label: 'Alternative investment news',
        value: 'alternative_investment_news',
      },
    ],
  },
  {
    label: 'Risk Management and Insurance News',
    value: 'risk_management_and_insurance_news',
    subcategories: [
      { label: 'New insurance products', value: 'new_insurance_products' },
      {
        label: 'Risk assessment methodologies',
        value: 'risk_assessment_methodologies',
      },
      {
        label: 'Actuarial science developments',
        value: 'actuarial_science_developments',
      },
      {
        label: 'Catastrophe and natural disaster impact on insurance',
        value: 'disaster_impact_on_insurance',
      },
    ],
  },
  {
    label: 'Financial Technology (Fintech) News',
    value: 'financial_technology_news',
    subcategories: [
      {
        label: 'Mobile banking innovations',
        value: 'mobile_banking_innovations',
      },
      {
        label: 'Payment processing technologies',
        value: 'payment_processing_technologies',
      },
      { label: 'Robo-advisory services', value: 'robo_advisory_services' },
      { label: 'Cybersecurity in finance', value: 'cybersecurity_in_finance' },
    ],
  },
  {
    label: 'Sustainable Finance and ESG News',
    value: 'sustainable_finance_and_esg_news',
    subcategories: [
      {
        label: 'Green bonds and sustainable investments',
        value: 'green_bonds_investments',
      },
      {
        label: 'Environmental, Social, and Governance (ESG) trends',
        value: 'esg_trends',
      },
      {
        label: 'Impact investing developments',
        value: 'impact_investing_developments',
      },
      {
        label: 'Corporate sustainability initiatives',
        value: 'corporate_sustainability_initiatives',
      },
    ],
  },
  {
    label: 'Financial Education and Literacy News',
    value: 'financial_education_and_literacy_news',
    subcategories: [
      {
        label: 'Financial education programs',
        value: 'financial_education_programs',
      },
      {
        label: 'Consumer awareness initiatives',
        value: 'consumer_awareness_initiatives',
      },
      {
        label: 'Financial literacy statistics and studies',
        value: 'financial_literacy_statistics',
      },
    ],
  },
];

export const MARKET_NEWS: CategoryOption[] = [
  {
    label: "Reader's Investment Experience",
    value: 'readers_investment_experience',
    subcategories: [
      { label: 'New to Investing', value: 'new_to_investing' },
      { label: 'Casual Investor', value: 'casual_investor' },
      { label: 'Active Trader', value: 'active_trader' },
      { label: 'Professional Trader', value: 'professional_trader' },
      { label: 'Institutional Investor', value: 'institutional_investor' },
      { label: 'Financial Advisor', value: 'financial_advisor' },
      { label: 'Market Analyst', value: 'market_analyst' },
    ],
  },
  {
    label: 'Market Knowledge Level',
    value: 'market_knowledge_level',
    subcategories: [
      {
        label: 'Basic Market Understanding',
        value: 'basic_market_understanding',
      },
      {
        label: 'Intermediate Market Knowledge',
        value: 'intermediate_market_knowledge',
      },
      {
        label: 'Advanced Technical Knowledge',
        value: 'advanced_technical_knowledge',
      },
      {
        label: 'Expert/Professional Level',
        value: 'expert_professional_level',
      },
      { label: 'Academic/Research Level', value: 'academic_research_level' },
    ],
  },
  {
    label: 'Investment Approach',
    value: 'investment_approach',
    subcategories: [
      { label: 'Day Trading', value: 'day_trading' },
      { label: 'Swing Trading', value: 'swing_trading' },
      { label: 'Long-term Investing', value: 'long_term_investing' },
      { label: 'Value Investing', value: 'value_investing' },
      { label: 'Growth Investing', value: 'growth_investing' },
      { label: 'Income Investing', value: 'income_investing' },
      { label: 'Index Investing', value: 'index_investing' },
      { label: 'Technical Trading', value: 'technical_trading' },
      { label: 'Fundamental Analysis', value: 'fundamental_analysis' },
      { label: 'Algorithmic Trading', value: 'algorithmic_trading' },
    ],
  },
  {
    label: 'Portfolio Size',
    value: 'portfolio_size',
    subcategories: [
      { label: 'Micro ($0-$10k)', value: 'micro' },
      { label: 'Small ($10k-$50k)', value: 'small' },
      { label: 'Medium ($50k-$250k)', value: 'medium' },
      { label: 'Large ($250k-$1M)', value: 'large' },
      { label: 'High Net Worth ($1M-$5M)', value: 'high_net_worth' },
      { label: 'Ultra High Net Worth ($5M+)', value: 'ultra_high_net_worth' },
    ],
  },
  {
    label: 'Investment Goals',
    value: 'investment_goals',
    subcategories: [
      { label: 'Capital Preservation', value: 'capital_preservation' },
      { label: 'Income Generation', value: 'income_generation' },
      { label: 'Growth', value: 'growth' },
      { label: 'Aggressive Growth', value: 'aggressive_growth' },
      { label: 'Speculation', value: 'speculation' },
      { label: 'Retirement Planning', value: 'retirement_planning' },
      { label: 'Wealth Building', value: 'wealth_building' },
      {
        label: 'Portfolio Diversification',
        value: 'portfolio_diversification',
      },
    ],
  },
  {
    label: 'Market Segments of Interest',
    value: 'market_segments_of_interest',
    subcategories: [
      { label: 'Blue Chip Stocks', value: 'blue_chip_stocks' },
      { label: 'Growth Stocks', value: 'growth_stocks' },
      { label: 'Penny Stocks', value: 'penny_stocks' },
      { label: 'Dividend Stocks', value: 'dividend_stocks' },
      { label: 'Government Bonds', value: 'government_bonds' },
      { label: 'Corporate Bonds', value: 'corporate_bonds' },
      { label: 'Municipal Bonds', value: 'municipal_bonds' },
      { label: 'ETFs', value: 'etfs' },
      { label: 'Mutual Funds', value: 'mutual_funds' },
      { label: 'Options', value: 'options' },
      { label: 'Futures', value: 'futures' },
      { label: 'Forex', value: 'forex' },
      { label: 'Cryptocurrencies', value: 'cryptocurrencies' },
      { label: 'Commodities', value: 'commodities' },
      { label: 'Real Estate Securities', value: 'real_estate_securities' },
    ],
  },
  {
    label: 'Industry Focus',
    value: 'industry_focus',
    subcategories: [
      { label: 'Technology', value: 'technology' },
      { label: 'Healthcare', value: 'healthcare' },
      { label: 'Financial Services', value: 'financial_services' },
      { label: 'Consumer Goods', value: 'consumer_goods' },
      { label: 'Industrial', value: 'industrial' },
      { label: 'Energy', value: 'energy' },
      { label: 'Materials', value: 'materials' },
      { label: 'Real Estate', value: 'real_estate' },
      { label: 'Utilities', value: 'utilities' },
      { label: 'Communications', value: 'communications' },
      { label: 'Transportation', value: 'transportation' },
    ],
  },
  {
    label: 'Geographic Interest',
    value: 'geographic_interest',
    subcategories: [
      { label: 'US Markets', value: 'us_markets' },
      { label: 'European Markets', value: 'european_markets' },
      { label: 'Asian Markets', value: 'asian_markets' },
      { label: 'Emerging Markets', value: 'emerging_markets' },
      { label: 'Global Markets', value: 'global_markets' },
      { label: 'Domestic Only', value: 'domestic_only' },
      { label: 'International Only', value: 'international_only' },
      { label: 'Regional Focus', value: 'regional_focus' },
    ],
  },
  {
    label: 'Trading Frequency',
    value: 'trading_frequency',
    subcategories: [
      { label: 'Daily Trading', value: 'daily_trading' },
      { label: 'Weekly Trading', value: 'weekly_trading' },
      { label: 'Monthly Trading', value: 'monthly_trading' },
      { label: 'Quarterly Rebalancing', value: 'quarterly_rebalancing' },
      { label: 'Annual Review', value: 'annual_review' },
      { label: 'Buy and Hold', value: 'buy_and_hold' },
    ],
  },
  {
    label: 'Risk Tolerance',
    value: 'risk_tolerance',
    subcategories: [
      { label: 'Very Conservative', value: 'very_conservative' },
      { label: 'Conservative', value: 'conservative' },
      { label: 'Moderate', value: 'moderate' },
      { label: 'Aggressive', value: 'aggressive' },
      { label: 'Very Aggressive', value: 'very_aggressive' },
      { label: 'Risk Arbitrage', value: 'risk_arbitrage' },
    ],
  },
  {
    label: 'Time Availability',
    value: 'time_availability',
    subcategories: [
      { label: 'Full-time Trader', value: 'full_time_trader' },
      { label: 'Part-time Active', value: 'part_time_active' },
      { label: 'Evening Researcher', value: 'evening_researcher' },
      { label: 'Weekend Analyst', value: 'weekend_analyst' },
      { label: 'Periodic Review', value: 'periodic_review' },
      { label: 'Passive Observer', value: 'passive_observer' },
    ],
  },
];

export const CORPORATE_FINANCE_NEWS: CategoryOption[] = [
  {
    label: 'Industry Focus',
    value: 'industry_focus',
    subcategories: [
      {
        label: 'Banking & Financial Services',
        value: 'banking_financial_services',
      },
      { label: 'Technology & Software', value: 'technology_software' },
      {
        label: 'Healthcare & Pharmaceuticals',
        value: 'healthcare_pharmaceuticals',
      },
      {
        label: 'Manufacturing & Industrial',
        value: 'manufacturing_industrial',
      },
      { label: 'Consumer Goods & Retail', value: 'consumer_goods_retail' },
      { label: 'Energy & Utilities', value: 'energy_utilities' },
      {
        label: 'Real Estate & Construction',
        value: 'real_estate_construction',
      },
      {
        label: 'Transportation & Logistics',
        value: 'transportation_logistics',
      },
      { label: 'Media & Entertainment', value: 'media_entertainment' },
      { label: 'Telecommunications', value: 'telecommunications' },
    ],
  },
  {
    label: 'Reader Role',
    value: 'reader_role',
    subcategories: [
      { label: 'C-Suite Executive', value: 'c_suite_executive' },
      { label: 'Financial Analyst', value: 'financial_analyst' },
      { label: 'Investment Banker', value: 'investment_banker' },
      {
        label: 'Corporate Finance Manager',
        value: 'corporate_finance_manager',
      },
      {
        label: 'Business Development Manager',
        value: 'business_development_manager',
      },
      { label: 'Risk Manager', value: 'risk_manager' },
      { label: 'Treasury Professional', value: 'treasury_professional' },
      { label: 'Management Consultant', value: 'management_consultant' },
      { label: 'Strategy Director', value: 'strategy_director' },
      { label: 'Institutional Investor', value: 'institutional_investor' },
    ],
  },
  {
    label: 'Company Size',
    value: 'company_size',
    subcategories: [
      { label: 'Startup/Early Stage', value: 'startup_early_stage' },
      { label: 'Small Cap ($300M-$2B)', value: 'small_cap' },
      { label: 'Mid Cap ($2B-$10B)', value: 'mid_cap' },
      { label: 'Large Cap ($10B-$200B)', value: 'large_cap' },
      { label: 'Mega Cap ($200B+)', value: 'mega_cap' },
      { label: 'Private Companies', value: 'private_companies' },
      { label: 'Pre-IPO Companies', value: 'pre_ipo_companies' },
      { label: 'Public Companies', value: 'public_companies' },
      {
        label: 'Multinational Corporations',
        value: 'multinational_corporations',
      },
      { label: 'Small & Medium Enterprises', value: 'smes' },
    ],
  },
  {
    label: 'Professional Expertise',
    value: 'professional_expertise',
    subcategories: [
      { label: 'Entry Level (0-2 years)', value: 'entry_level' },
      { label: 'Junior (2-5 years)', value: 'junior' },
      { label: 'Mid-Level (5-10 years)', value: 'mid_level' },
      { label: 'Senior (10-15 years)', value: 'senior' },
      { label: 'Executive (15+ years)', value: 'executive' },
      { label: 'Subject Matter Expert', value: 'subject_matter_expert' },
      { label: 'Generalist', value: 'generalist' },
      { label: 'Specialist', value: 'specialist' },
      { label: 'Academic/Research', value: 'academic_research' },
      { label: 'Advisory', value: 'advisory' },
    ],
  },
  {
    label: 'Business Interest',
    value: 'business_interest',
    subcategories: [
      { label: 'Mergers & Acquisitions', value: 'mergers_acquisitions' },
      { label: 'Capital Markets', value: 'capital_markets' },
      { label: 'Private Equity', value: 'private_equity' },
      { label: 'Venture Capital', value: 'venture_capital' },
      { label: 'Investment Strategy', value: 'investment_strategy' },
      { label: 'Risk Management', value: 'risk_management' },
      { label: 'Corporate Strategy', value: 'corporate_strategy' },
      { label: 'Market Analysis', value: 'market_analysis' },
      { label: 'Financial Operations', value: 'financial_operations' },
      { label: 'Regulatory Compliance', value: 'regulatory_compliance' },
    ],
  },
  {
    label: 'Decision-Making Level',
    value: 'decision_making_level',
    subcategories: [
      { label: 'Strategic Planning', value: 'strategic_planning' },
      { label: 'Investment Decisions', value: 'investment_decisions' },
      { label: 'Operational Decisions', value: 'operational_decisions' },
      { label: 'Risk Assessment', value: 'risk_assessment' },
      { label: 'Policy Making', value: 'policy_making' },
      { label: 'Advisory Role', value: 'advisory_role' },
      { label: 'Research & Analysis', value: 'research_analysis' },
      { label: 'Implementation', value: 'implementation' },
      { label: 'Monitoring & Control', value: 'monitoring_control' },
      { label: 'Performance Evaluation', value: 'performance_evaluation' },
    ],
  },
  {
    label: 'Geographic Interest',
    value: 'geographic_interest',
    subcategories: [
      { label: 'Domestic Markets', value: 'domestic_markets' },
      { label: 'International Markets', value: 'international_markets' },
      { label: 'Emerging Markets', value: 'emerging_markets' },
      { label: 'Developed Markets', value: 'developed_markets' },
      { label: 'Regional Focus', value: 'regional_focus' },
      { label: 'Global Operations', value: 'global_operations' },
      {
        label: 'Cross-border Transactions',
        value: 'cross_border_transactions',
      },
      { label: 'Market Entry', value: 'market_entry' },
      { label: 'Geographic Expansion', value: 'geographic_expansion' },
      { label: 'Local Markets', value: 'local_markets' },
    ],
  },
  {
    label: 'Business Objective',
    value: 'business_objective',
    subcategories: [
      { label: 'Growth & Expansion', value: 'growth_expansion' },
      { label: 'Cost Optimization', value: 'cost_optimization' },
      { label: 'Market Entry', value: 'market_entry' },
      { label: 'Risk Mitigation', value: 'risk_mitigation' },
      { label: 'Performance Improvement', value: 'performance_improvement' },
      { label: 'Investment Opportunities', value: 'investment_opportunities' },
      { label: 'Competitive Analysis', value: 'competitive_analysis' },
      { label: 'Regulatory Understanding', value: 'regulatory_understanding' },
      { label: 'Strategic Partnerships', value: 'strategic_partnerships' },
      { label: 'Innovation & Technology', value: 'innovation_technology' },
    ],
  },
];

export const ECONOMIC_INDICATOR_NEWS: CategoryOption[] = [
  {
    label: 'Reader Income Level',
    value: 'reader_income_level',
    subcategories: [
      { label: 'Fixed Income', value: 'fixed_income' },
      { label: 'Lower Income (<$30k)', value: 'lower_income' },
      { label: 'Middle Income ($30k-100k)', value: 'middle_income' },
      { label: 'High Income ($100k-250k)', value: 'high_income' },
      { label: 'Affluent ($250k+)', value: 'affluent' },
      { label: 'Business Owner', value: 'business_owner' },
      { label: 'Variable Income', value: 'variable_income' },
      { label: 'Multiple Income Sources', value: 'multiple_income_sources' },
    ],
  },
  {
    label: 'Financial Goals',
    value: 'financial_goals',
    subcategories: [
      { label: 'Saving for Home', value: 'saving_for_home' },
      { label: 'Building Emergency Fund', value: 'building_emergency_fund' },
      { label: 'Retirement Planning', value: 'retirement_planning' },
      { label: 'Debt Reduction', value: 'debt_reduction' },
      { label: 'Investment Growth', value: 'investment_growth' },
      { label: 'College Savings', value: 'college_savings' },
      { label: 'Business Expansion', value: 'business_expansion' },
      { label: 'Wealth Preservation', value: 'wealth_preservation' },
      { label: 'Income Generation', value: 'income_generation' },
      { label: 'Major Purchase Planning', value: 'major_purchase_planning' },
    ],
  },
  {
    label: 'Investment Profile',
    value: 'investment_profile',
    subcategories: [
      { label: 'No Investments', value: 'no_investments' },
      { label: 'New Investor', value: 'new_investor' },
      { label: 'Conservative Investor', value: 'conservative_investor' },
      { label: 'Balanced Investor', value: 'balanced_investor' },
      { label: 'Growth Investor', value: 'growth_investor' },
      { label: 'Active Trader', value: 'active_trader' },
      { label: 'Long-term Investor', value: 'long_term_investor' },
      { label: 'Retirement Account Only', value: 'retirement_account_only' },
      { label: 'Diversified Portfolio', value: 'diversified_portfolio' },
      { label: 'Professional Investor', value: 'professional_investor' },
    ],
  },
  {
    label: 'Economic Sensitivity',
    value: 'economic_sensitivity',
    subcategories: [
      { label: 'Interest Rate Sensitive', value: 'interest_rate_sensitive' },
      { label: 'Inflation Sensitive', value: 'inflation_sensitive' },
      { label: 'Employment Dependent', value: 'employment_dependent' },
      { label: 'Market Dependent', value: 'market_dependent' },
      { label: 'Fixed Income Dependent', value: 'fixed_income_dependent' },
      { label: 'Business Cycle Sensitive', value: 'business_cycle_sensitive' },
      { label: 'Real Estate Dependent', value: 'real_estate_dependent' },
      { label: 'Credit Dependent', value: 'credit_dependent' },
      {
        label: 'Dollar Strength Sensitive',
        value: 'dollar_strength_sensitive',
      },
      { label: 'Supply Chain Dependent', value: 'supply_chain_dependent' },
    ],
  },
  {
    label: 'Financial Decisions Pending',
    value: 'financial_decisions_pending',
    subcategories: [
      { label: 'Home Purchase/Sale', value: 'home_purchase_sale' },
      { label: 'Investment Reallocation', value: 'investment_reallocation' },
      { label: 'Retirement Timeline', value: 'retirement_timeline' },
      { label: 'Job/Career Change', value: 'job_career_change' },
      { label: 'Business Decisions', value: 'business_decisions' },
      { label: 'Major Purchase', value: 'major_purchase' },
      { label: 'Debt Refinancing', value: 'debt_refinancing' },
      { label: 'Insurance Changes', value: 'insurance_changes' },
      { label: 'Education Funding', value: 'education_funding' },
      { label: 'Estate Planning', value: 'estate_planning' },
    ],
  },
  {
    label: 'Knowledge Level',
    value: 'knowledge_level',
    subcategories: [
      {
        label: 'Basic Economic Understanding',
        value: 'basic_economic_understanding',
      },
      {
        label: 'Intermediate Financial Knowledge',
        value: 'intermediate_financial_knowledge',
      },
      {
        label: 'Advanced Market Knowledge',
        value: 'advanced_market_knowledge',
      },
      { label: 'Professional Expertise', value: 'professional_expertise' },
      { label: 'Policy Aware', value: 'policy_aware' },
      { label: 'Market Savvy', value: 'market_savvy' },
      { label: 'Data Analysis Capable', value: 'data_analysis_capable' },
      {
        label: 'Technical Analysis Skilled',
        value: 'technical_analysis_skilled',
      },
      {
        label: 'Fundamental Analysis Expert',
        value: 'fundamental_analysis_expert',
      },
      { label: 'Global Markets Aware', value: 'global_markets_aware' },
    ],
  },
  {
    label: 'Life Stage Impact',
    value: 'life_stage_impact',
    subcategories: [
      { label: 'Student/Early Career', value: 'student_early_career' },
      { label: 'Career Building', value: 'career_building' },
      { label: 'Family Formation', value: 'family_formation' },
      { label: 'Peak Earning Years', value: 'peak_earning_years' },
      { label: 'Pre-Retirement', value: 'pre_retirement' },
      { label: 'Early Retirement', value: 'early_retirement' },
      { label: 'Active Retirement', value: 'active_retirement' },
      { label: 'Business Owner', value: 'business_owner' },
      { label: 'Wealth Transfer Stage', value: 'wealth_transfer_stage' },
      { label: 'Legacy Planning', value: 'legacy_planning' },
    ],
  },
  {
    label: 'Risk Exposure',
    value: 'risk_exposure',
    subcategories: [
      { label: 'Fixed Rate Loans', value: 'fixed_rate_loans' },
      { label: 'Variable Rate Debt', value: 'variable_rate_debt' },
      { label: 'Stock Market Exposure', value: 'stock_market_exposure' },
      { label: 'Real Estate Holdings', value: 'real_estate_holdings' },
      { label: 'Business Ownership', value: 'business_ownership' },
      { label: 'International Exposure', value: 'international_exposure' },
      { label: 'Currency Exposure', value: 'currency_exposure' },
      { label: 'Commodity Exposure', value: 'commodity_exposure' },
      { label: 'Employment Risk', value: 'employment_risk' },
      { label: 'Credit Risk', value: 'credit_risk' },
    ],
  },
];

export const CENTRAL_BANK_AND_MONETARY_POLICY_NEWS: CategoryOption[] = [
  {
    label: 'Role Type',
    value: 'role_type',
    subcategories: [
      {
        label: 'Central Bank Professional',
        value: 'central_bank_professional',
      },
      { label: 'Market Trader', value: 'market_trader' },
      { label: 'Commercial Banker', value: 'commercial_banker' },
      { label: 'Policy Maker', value: 'policy_maker' },
      { label: 'Financial Analyst', value: 'financial_analyst' },
      { label: 'Business Executive', value: 'business_executive' },
      { label: 'Academic', value: 'academic' },
      { label: 'Financial Media', value: 'financial_media' },
      { label: 'Investment Manager', value: 'investment_manager' },
      { label: 'Financial Advisor', value: 'financial_advisor' },
    ],
  },
  {
    label: 'Technical Expertise',
    value: 'technical_expertise',
    subcategories: [
      { label: 'Expert', value: 'expert' },
      { label: 'Advanced Professional', value: 'advanced_professional' },
      { label: 'Intermediate', value: 'intermediate' },
      { label: 'Basic', value: 'basic' },
      { label: 'Learning Stage', value: 'learning_stage' },
    ],
  },
  {
    label: 'Decision Focus',
    value: 'decision_focus',
    subcategories: [
      { label: 'Market Trading', value: 'market_trading' },
      { label: 'Policy Making', value: 'policy_making' },
      { label: 'Business Strategy', value: 'business_strategy' },
      { label: 'Research & Analysis', value: 'research_analysis' },
      { label: 'Education & Studies', value: 'education_studies' },
    ],
  },
  {
    label: 'Market Level',
    value: 'market_level',
    subcategories: [
      { label: 'Global', value: 'global' },
      { label: 'National', value: 'national' },
      { label: 'Regional', value: 'regional' },
      { label: 'Institutional', value: 'institutional' },
      { label: 'Retail/Consumer', value: 'retail_consumer' },
    ],
  },
  {
    label: 'Time Sensitivity',
    value: 'time_sensitivity',
    subcategories: [
      { label: 'Real-time Need', value: 'real_time_need' },
      { label: 'Daily Updates', value: 'daily_updates' },
      { label: 'Weekly Analysis', value: 'weekly_analysis' },
      { label: 'Monthly Planning', value: 'monthly_planning' },
      { label: 'Long-term Research', value: 'long_term_research' },
    ],
  },
  {
    label: 'Content Complexity',
    value: 'content_complexity',
    subcategories: [
      { label: 'Highly Technical', value: 'highly_technical' },
      { label: 'Professional', value: 'professional' },
      { label: 'Business Level', value: 'business_level' },
      { label: 'General Finance', value: 'general_finance' },
      { label: 'Simplified', value: 'simplified' },
    ],
  },
  {
    label: 'Application Area',
    value: 'application_area',
    subcategories: [
      { label: 'Trading/Markets', value: 'trading_markets' },
      { label: 'Banking Operations', value: 'banking_operations' },
      { label: 'Policy Development', value: 'policy_development' },
      { label: 'Corporate Planning', value: 'corporate_planning' },
      { label: 'Academic Research', value: 'academic_research' },
    ],
  },
  {
    label: 'Impact Focus',
    value: 'impact_focus',
    subcategories: [
      { label: 'Market Impact', value: 'market_impact' },
      { label: 'Economic Policy', value: 'economic_policy' },
      { label: 'Banking Sector', value: 'banking_sector' },
      { label: 'Business Operations', value: 'business_operations' },
      { label: 'Consumer Effect', value: 'consumer_effect' },
    ],
  },
  {
    label: 'Geographic Scope',
    value: 'geographic_scope',
    subcategories: [
      { label: 'International', value: 'international' },
      { label: 'National', value: 'national' },
      { label: 'Regional', value: 'regional' },
      { label: 'Local Market', value: 'local_market' },
      { label: 'Multi-region', value: 'multi_region' },
    ],
  },
  {
    label: 'Primary Interest',
    value: 'primary_interest',
    subcategories: [
      { label: 'Monetary Policy', value: 'monetary_policy' },
      { label: 'Interest Rates', value: 'interest_rates' },
      { label: 'Currency Markets', value: 'currency_markets' },
      { label: 'Banking Regulation', value: 'banking_regulation' },
      { label: 'Economic Indicators', value: 'economic_indicators' },
    ],
  },
];

export const GOVERNMENT_FISCAL_POLICY_NEWS: CategoryOption[] = [
  {
    label: 'Role Type',
    value: 'role_type',
    subcategories: [
      { label: 'Government Official', value: 'government_official' },
      { label: 'Policy Analyst', value: 'policy_analyst' },
      { label: 'Business Strategist', value: 'business_strategist' },
      { label: 'Tax Professional', value: 'tax_professional' },
      { label: 'Investment Manager', value: 'investment_manager' },
      { label: 'Corporate Planner', value: 'corporate_planner' },
      { label: 'Economic Researcher', value: 'economic_researcher' },
      { label: 'Financial Advisor', value: 'financial_advisor' },
      { label: 'Business Owner', value: 'business_owner' },
      { label: 'Public Sector Manager', value: 'public_sector_manager' },
    ],
  },
  {
    label: 'Decision Level',
    value: 'decision_level',
    subcategories: [
      { label: 'Strategic Planning', value: 'strategic_planning' },
      { label: 'Policy Implementation', value: 'policy_implementation' },
      { label: 'Budget Management', value: 'budget_management' },
      { label: 'Investment Strategy', value: 'investment_strategy' },
      { label: 'Business Operations', value: 'business_operations' },
    ],
  },
  {
    label: 'Sector Impact',
    value: 'sector_impact',
    subcategories: [
      { label: 'Public Sector', value: 'public_sector' },
      { label: 'Private Enterprise', value: 'private_enterprise' },
      { label: 'Financial Markets', value: 'financial_markets' },
      { label: 'Social Services', value: 'social_services' },
      { label: 'Infrastructure', value: 'infrastructure' },
    ],
  },
  {
    label: 'Budget Focus',
    value: 'budget_focus',
    subcategories: [
      { label: 'Revenue Measures', value: 'revenue_measures' },
      { label: 'Spending Programs', value: 'spending_programs' },
      { label: 'Deficit Management', value: 'deficit_management' },
      { label: 'Debt Policy', value: 'debt_policy' },
      { label: 'Tax Reform', value: 'tax_reform' },
    ],
  },
  {
    label: 'Economic Interest',
    value: 'economic_interest',
    subcategories: [
      { label: 'Public Finance', value: 'public_finance' },
      { label: 'Government Spending', value: 'government_spending' },
      { label: 'Taxation Policy', value: 'taxation_policy' },
      { label: 'Economic Growth', value: 'economic_growth' },
      { label: 'Social Programs', value: 'social_programs' },
    ],
  },
  {
    label: 'Time Horizon',
    value: 'time_horizon',
    subcategories: [
      { label: 'Current Budget Cycle', value: 'current_budget_cycle' },
      { label: 'Annual Planning', value: 'annual_planning' },
      { label: 'Medium-term Outlook', value: 'medium_term_outlook' },
      { label: 'Long-term Impact', value: 'long_term_impact' },
      { label: 'Historical Analysis', value: 'historical_analysis' },
    ],
  },
  {
    label: 'Policy Area',
    value: 'policy_area',
    subcategories: [
      { label: 'Tax Policy', value: 'tax_policy' },
      { label: 'Public Spending', value: 'public_spending' },
      { label: 'Social Programs', value: 'social_programs' },
      { label: 'Infrastructure', value: 'infrastructure' },
      { label: 'Economic Stimulus', value: 'economic_stimulus' },
    ],
  },
  {
    label: 'Impact Scope',
    value: 'impact_scope',
    subcategories: [
      { label: 'National Economy', value: 'national_economy' },
      { label: 'Industry Specific', value: 'industry_specific' },
      { label: 'Business Sector', value: 'business_sector' },
      { label: 'Household Level', value: 'household_level' },
      { label: 'International Trade', value: 'international_trade' },
    ],
  },
  {
    label: 'Technical Level',
    value: 'technical_level',
    subcategories: [
      { label: 'Policy Expert', value: 'policy_expert' },
      { label: 'Professional', value: 'professional' },
      { label: 'Business Level', value: 'business_level' },
      { label: 'General Understanding', value: 'general_understanding' },
      { label: 'Basic Awareness', value: 'basic_awareness' },
    ],
  },
  {
    label: 'Analysis Need',
    value: 'analysis_need',
    subcategories: [
      { label: 'Policy Impact', value: 'policy_impact' },
      { label: 'Economic Effects', value: 'economic_effects' },
      { label: 'Business Planning', value: 'business_planning' },
      { label: 'Market Implications', value: 'market_implications' },
      { label: 'Social Outcomes', value: 'social_outcomes' },
    ],
  },
];

export const INDUSTRY_SPECIFIC_FINANCIAL_NEWS: CategoryOption[] = [
  {
    label: 'Investment Role',
    value: 'investment_role',
    subcategories: [
      { label: 'Retail Investor', value: 'retail_investor' },
      {
        label: 'Institutional Fund Manager',
        value: 'institutional_fund_manager',
      },
      {
        label: 'Private Equity Professional',
        value: 'private_equity_professional',
      },
      { label: 'Investment Banker', value: 'investment_banker' },
      { label: 'Financial Advisor', value: 'financial_advisor' },
    ],
  },
  {
    label: 'Industry Focus',
    value: 'industry_focus',
    subcategories: [
      { label: 'Technology/Software', value: 'technology_software' },
      { label: 'Healthcare/Biotech', value: 'healthcare_biotech' },
      { label: 'Energy/Utilities', value: 'energy_utilities' },
      { label: 'Real Estate/REITS', value: 'real_estate_reits' },
      { label: 'Manufacturing', value: 'manufacturing' },
      { label: 'Financial Services', value: 'financial_services' },
      { label: 'Consumer Goods', value: 'consumer_goods' },
    ],
  },
  {
    label: 'Market Cap Preference',
    value: 'market_cap_preference',
    subcategories: [
      { label: 'Large Cap (>$10B)', value: 'large_cap' },
      { label: 'Mid Cap ($2B-$10B)', value: 'mid_cap' },
      { label: 'Small Cap ($300M-$2B)', value: 'small_cap' },
      { label: 'Micro Cap (<$300M)', value: 'micro_cap' },
    ],
  },
  {
    label: 'Geographic Interest',
    value: 'geographic_interest',
    subcategories: [
      { label: 'North America', value: 'north_america' },
      { label: 'Europe', value: 'europe' },
      { label: 'Asia Pacific', value: 'asia_pacific' },
      { label: 'Emerging Markets', value: 'emerging_markets' },
      { label: 'Global Markets', value: 'global_markets' },
    ],
  },
  {
    label: 'Investment Style',
    value: 'investment_style',
    subcategories: [
      { label: 'Value Investor', value: 'value_investor' },
      { label: 'Growth Investor', value: 'growth_investor' },
      { label: 'Income/Dividend Focus', value: 'income_dividend_focus' },
      { label: 'ESG/Impact Investor', value: 'esg_impact_investor' },
      { label: 'Quantitative Trader', value: 'quantitative_trader' },
    ],
  },
  {
    label: 'Time Horizon',
    value: 'time_horizon',
    subcategories: [
      { label: 'Day Trader', value: 'day_trader' },
      { label: 'Swing Trader', value: 'swing_trader' },
      { label: 'Long-term Investor', value: 'long_term_investor' },
      { label: 'Buy-and-Hold', value: 'buy_and_hold' },
    ],
  },
  {
    label: 'Experience Level',
    value: 'experience_level',
    subcategories: [
      { label: 'Beginner', value: 'beginner' },
      { label: 'Intermediate', value: 'intermediate' },
      { label: 'Advanced', value: 'advanced' },
      { label: 'Professional', value: 'professional' },
    ],
  },
  {
    label: 'Risk Tolerance',
    value: 'risk_tolerance',
    subcategories: [
      { label: 'Conservative', value: 'conservative' },
      { label: 'Moderate', value: 'moderate' },
      { label: 'Aggressive', value: 'aggressive' },
      { label: 'High-Risk/Speculative', value: 'high_risk_speculative' },
    ],
  },
  {
    label: 'Asset Class Focus',
    value: 'asset_class_focus',
    subcategories: [
      { label: 'Equities', value: 'equities' },
      { label: 'Fixed Income', value: 'fixed_income' },
      { label: 'Commodities', value: 'commodities' },
      { label: 'Forex', value: 'forex' },
      { label: 'Cryptocurrencies', value: 'cryptocurrencies' },
      { label: 'Alternative Investments', value: 'alternative_investments' },
    ],
  },
  {
    label: 'Regulatory Environment',
    value: 'regulatory_environment',
    subcategories: [
      { label: 'SEC Regulated', value: 'sec_regulated' },
      { label: 'FINRA Compliance', value: 'finra_compliance' },
      {
        label: 'International Regulations',
        value: 'international_regulations',
      },
      { label: 'Self-Regulated', value: 'self_regulated' },
    ],
  },
  {
    label: 'Market Sector Preference',
    value: 'market_sector_preference',
    subcategories: [
      { label: 'Cyclical', value: 'cyclical' },
      { label: 'Defensive', value: 'defensive' },
      { label: 'Growth Sectors', value: 'growth_sectors' },
      { label: 'Value Sectors', value: 'value_sectors' },
    ],
  },
  {
    label: 'Research Depth',
    value: 'research_depth',
    subcategories: [
      { label: 'Headlines Only', value: 'headlines_only' },
      { label: 'Summary Level', value: 'summary_level' },
      { label: 'Detailed Analysis', value: 'detailed_analysis' },
      { label: 'Deep Dive Research', value: 'deep_dive_research' },
    ],
  },
];

export const INTERNATIONAL_TRADE_AND_GLOBAL_NEWS: CategoryOption[] = [
  {
    label: 'Trade Professional Role',
    value: 'trade_professional_role',
    subcategories: [
      { label: 'Import/Export Manager', value: 'import_export_manager' },
      { label: 'Trade Finance Specialist', value: 'trade_finance_specialist' },
      { label: 'Customs Broker', value: 'customs_broker' },
      { label: 'Supply Chain Director', value: 'supply_chain_director' },
      {
        label: 'International Sales Manager',
        value: 'international_sales_manager',
      },
    ],
  },
  {
    label: 'Industry Sector',
    value: 'industry_sector',
    subcategories: [
      { label: 'Agriculture & Food', value: 'agriculture_food' },
      { label: 'Automotive', value: 'automotive' },
      { label: 'Electronics', value: 'electronics' },
      { label: 'Textiles & Apparel', value: 'textiles_apparel' },
      { label: 'Raw Materials', value: 'raw_materials' },
      { label: 'Industrial Equipment', value: 'industrial_equipment' },
      { label: 'Consumer Goods', value: 'consumer_goods' },
    ],
  },
  {
    label: 'Trade Agreement Focus',
    value: 'trade_agreement_focus',
    subcategories: [
      { label: 'Free Trade Agreements', value: 'free_trade_agreements' },
      {
        label: 'Regional Economic Partnerships',
        value: 'regional_economic_partnerships',
      },
      { label: 'Bilateral Treaties', value: 'bilateral_treaties' },
      { label: 'WTO Regulations', value: 'wto_regulations' },
      { label: 'Customs Unions', value: 'customs_unions' },
    ],
  },
  {
    label: 'Geographic Trading Blocs',
    value: 'geographic_trading_blocs',
    subcategories: [
      { label: 'EU Single Market', value: 'eu_single_market' },
      { label: 'USMCA/NAFTA', value: 'usmca_nafta' },
      { label: 'ASEAN', value: 'asean' },
      { label: 'RCEP', value: 'rcep' },
      {
        label: 'African Continental Free Trade Area',
        value: 'african_continental_free_trade_area',
      },
    ],
  },
  {
    label: 'Economic Development Level',
    value: 'economic_development_level',
    subcategories: [
      { label: 'Advanced Economies', value: 'advanced_economies' },
      { label: 'Emerging Markets', value: 'emerging_markets' },
      { label: 'Developing Nations', value: 'developing_nations' },
      {
        label: 'Least Developed Countries',
        value: 'least_developed_countries',
      },
      { label: 'Transition Economies', value: 'transition_economies' },
    ],
  },
  {
    label: 'Trade Policy Interest',
    value: 'trade_policy_interest',
    subcategories: [
      { label: 'Tariffs & Duties', value: 'tariffs_duties' },
      { label: 'Non-Tariff Barriers', value: 'non_tariff_barriers' },
      { label: 'Trade Remedies', value: 'trade_remedies' },
      { label: 'Export Controls', value: 'export_controls' },
      { label: 'Sanctions Compliance', value: 'sanctions_compliance' },
    ],
  },
  {
    label: 'Market Access Type',
    value: 'market_access_type',
    subcategories: [
      { label: 'Direct Export', value: 'direct_export' },
      { label: 'Distribution Network', value: 'distribution_network' },
      { label: 'Joint Ventures', value: 'joint_ventures' },
      { label: 'Licensing', value: 'licensing' },
      { label: 'E-commerce Channels', value: 'ecommerce_channels' },
    ],
  },
  {
    label: 'Regulatory Compliance',
    value: 'regulatory_compliance',
    subcategories: [
      {
        label: 'International Standards (ISO)',
        value: 'international_standards_iso',
      },
      { label: 'Product Certification', value: 'product_certification' },
      { label: 'Trade Documentation', value: 'trade_documentation' },
      { label: 'Export Controls', value: 'export_controls' },
      { label: 'Customs Compliance', value: 'customs_compliance' },
    ],
  },
  {
    label: 'Economic Indicators Focus',
    value: 'economic_indicators_focus',
    subcategories: [
      { label: 'Exchange Rates', value: 'exchange_rates' },
      { label: 'Trade Balance', value: 'trade_balance' },
      { label: 'GDP Growth', value: 'gdp_growth' },
      { label: 'Inflation Rates', value: 'inflation_rates' },
      {
        label: 'Foreign Direct Investment',
        value: 'foreign_direct_investment',
      },
    ],
  },
  {
    label: 'Supply Chain Perspective',
    value: 'supply_chain_perspective',
    subcategories: [
      { label: 'Logistics Management', value: 'logistics_management' },
      { label: 'Inventory Control', value: 'inventory_control' },
      { label: 'Port Operations', value: 'port_operations' },
      { label: 'Transportation Routes', value: 'transportation_routes' },
      { label: 'Warehousing', value: 'warehousing' },
    ],
  },
  {
    label: 'Risk Management Level',
    value: 'risk_management_level',
    subcategories: [
      { label: 'Political Risk', value: 'political_risk' },
      { label: 'Currency Risk', value: 'currency_risk' },
      { label: 'Credit Risk', value: 'credit_risk' },
      { label: 'Compliance Risk', value: 'compliance_risk' },
      { label: 'Supply Chain Risk', value: 'supply_chain_risk' },
    ],
  },
  {
    label: 'Trade Finance Tools',
    value: 'trade_finance_tools',
    subcategories: [
      { label: 'Letters of Credit', value: 'letters_of_credit' },
      { label: 'Bank Guarantees', value: 'bank_guarantees' },
      { label: 'Export Credit Insurance', value: 'export_credit_insurance' },
      { label: 'Trade Finance Programs', value: 'trade_finance_programs' },
      { label: 'Supply Chain Finance', value: 'supply_chain_finance' },
    ],
  },
  {
    label: 'Sustainability Focus',
    value: 'sustainability_focus',
    subcategories: [
      {
        label: 'Carbon Border Adjustments',
        value: 'carbon_border_adjustments',
      },
      { label: 'Fair Trade Practices', value: 'fair_trade_practices' },
      { label: 'Environmental Standards', value: 'environmental_standards' },
      { label: 'Labor Standards', value: 'labor_standards' },
      { label: 'Circular Economy', value: 'circular_economy' },
    ],
  },
  {
    label: 'Digital Trade Interest',
    value: 'digital_trade_interest',
    subcategories: [
      { label: 'E-commerce Regulations', value: 'ecommerce_regulations' },
      { label: 'Digital Services Trade', value: 'digital_services_trade' },
      { label: 'Cross-border Data Flows', value: 'cross_border_data_flows' },
      { label: 'Digital Payment Systems', value: 'digital_payment_systems' },
      { label: 'Platform Economics', value: 'platform_economics' },
    ],
  },
];

export const PERSONAL_FINANCE_NEWS: CategoryOption[] = [
  {
    label: 'Life Stage',
    value: 'life_stage',
    subcategories: [
      { label: 'Young Professional', value: 'young_professional' },
      { label: 'Mid-Career', value: 'mid_career' },
      { label: 'Pre-Retirement', value: 'pre_retirement' },
      { label: 'Retired', value: 'retired' },
      { label: 'Student', value: 'student' },
    ],
  },
  {
    label: 'Income Level',
    value: 'income_level',
    subcategories: [
      { label: 'Entry Level (<$40K)', value: 'entry_level' },
      { label: 'Middle Income ($40K-$100K)', value: 'middle_income' },
      { label: 'High Income ($100K-$250K)', value: 'high_income' },
      { label: 'Affluent ($250K+)', value: 'affluent' },
    ],
  },
  {
    label: 'Financial Goals',
    value: 'financial_goals',
    subcategories: [
      { label: 'Debt Reduction', value: 'debt_reduction' },
      { label: 'Wealth Building', value: 'wealth_building' },
      { label: 'Retirement Planning', value: 'retirement_planning' },
      { label: 'Home Ownership', value: 'home_ownership' },
      { label: 'College Savings', value: 'college_savings' },
      { label: 'Legacy Planning', value: 'legacy_planning' },
    ],
  },
  {
    label: 'Family Status',
    value: 'family_status',
    subcategories: [
      { label: 'Single', value: 'single' },
      { label: 'Married', value: 'married' },
      { label: 'Parents with Children', value: 'parents_with_children' },
      { label: 'Empty Nesters', value: 'empty_nesters' },
      {
        label: 'Multi-generational Household',
        value: 'multi_generational_household',
      },
      { label: 'Divorced/Separated', value: 'divorced_separated' },
    ],
  },
  {
    label: 'Housing Situation',
    value: 'housing_situation',
    subcategories: [
      { label: 'First-time Homebuyer', value: 'first_time_homebuyer' },
      { label: 'Homeowner', value: 'homeowner' },
      { label: 'Renter', value: 'renter' },
      { label: 'Real Estate Investor', value: 'real_estate_investor' },
      { label: 'Downsizing', value: 'downsizing' },
    ],
  },
  {
    label: 'Geographic Location',
    value: 'geographic_location',
    subcategories: [
      { label: 'Urban', value: 'urban' },
      { label: 'Suburban', value: 'suburban' },
      { label: 'Rural', value: 'rural' },
      { label: 'High Cost of Living Area', value: 'high_cost_of_living' },
      { label: 'Low Cost of Living Area', value: 'low_cost_of_living' },
      { label: 'International/Expat', value: 'international_expat' },
    ],
  },
  {
    label: 'Employment Type',
    value: 'employment_type',
    subcategories: [
      { label: 'Full-time Employee', value: 'full_time_employee' },
      { label: 'Self-employed/Freelancer', value: 'self_employed' },
      { label: 'Small Business Owner', value: 'small_business_owner' },
      { label: 'Government Employee', value: 'government_employee' },
      { label: 'Gig Economy Worker', value: 'gig_economy_worker' },
      { label: 'Multiple Income Streams', value: 'multiple_income_streams' },
    ],
  },
  {
    label: 'Debt Profile',
    value: 'debt_profile',
    subcategories: [
      { label: 'Student Loans', value: 'student_loans' },
      { label: 'Mortgage', value: 'mortgage' },
      { label: 'Credit Card Debt', value: 'credit_card_debt' },
      { label: 'Car Loans', value: 'car_loans' },
      { label: 'Debt-Free', value: 'debt_free' },
      { label: 'Business Debt', value: 'business_debt' },
    ],
  },
  {
    label: 'Financial Knowledge Level',
    value: 'financial_knowledge_level',
    subcategories: [
      { label: 'Beginner', value: 'beginner' },
      { label: 'Intermediate', value: 'intermediate' },
      { label: 'Advanced', value: 'advanced' },
      { label: 'Professional', value: 'professional' },
    ],
  },
  {
    label: 'Benefits Status',
    value: 'benefits_status',
    subcategories: [
      { label: 'Full Corporate Benefits', value: 'full_corporate_benefits' },
      { label: 'Partial Benefits', value: 'partial_benefits' },
      { label: 'No Benefits', value: 'no_benefits' },
      { label: 'Self-Insured', value: 'self_insured' },
      { label: 'Government Benefits', value: 'government_benefits' },
    ],
  },
  {
    label: 'Tax Situation',
    value: 'tax_situation',
    subcategories: [
      { label: 'Standard Deduction', value: 'standard_deduction' },
      { label: 'Itemized Deductions', value: 'itemized_deductions' },
      { label: 'Business Owner', value: 'business_owner' },
      { label: 'Investment Income', value: 'investment_income' },
      {
        label: 'International Tax Considerations',
        value: 'international_tax_considerations',
      },
    ],
  },
  {
    label: 'Financial Services Usage',
    value: 'financial_services_usage',
    subcategories: [
      { label: 'Traditional Banking', value: 'traditional_banking' },
      { label: 'Digital Banking', value: 'digital_banking' },
      { label: 'Investment Apps', value: 'investment_apps' },
      { label: 'Robo-Advisors', value: 'robo_advisors' },
      {
        label: 'Full-Service Financial Advisor',
        value: 'full_service_financial_advisor',
      },
    ],
  },
  {
    label: 'Risk Management Profile',
    value: 'risk_management_profile',
    subcategories: [
      { label: 'Insurance Focus', value: 'insurance_focus' },
      { label: 'Emergency Planning', value: 'emergency_planning' },
      { label: 'Estate Planning', value: 'estate_planning' },
      { label: 'Asset Protection', value: 'asset_protection' },
      { label: 'Health Care Planning', value: 'health_care_planning' },
    ],
  },
  {
    label: 'Spending Patterns',
    value: 'spending_patterns',
    subcategories: [
      { label: 'Frugal/Minimalist', value: 'frugal_minimalist' },
      { label: 'Moderate Spender', value: 'moderate_spender' },
      { label: 'Luxury/Premium', value: 'luxury_premium' },
      { label: 'Experience-focused', value: 'experience_focused' },
      { label: 'Value-focused', value: 'value_focused' },
    ],
  },
];

export const REGULATORY_AND_LEGAL_NEWS: CategoryOption[] = [
  {
    label: 'Regulatory Jurisdiction',
    value: 'regulatory_jurisdiction',
    subcategories: [
      { label: 'Federal/National Level', value: 'federal_national_level' },
      { label: 'State/Provincial Level', value: 'state_provincial_level' },
      {
        label: 'International/Cross-border',
        value: 'international_cross_border',
      },
      { label: 'Regional Frameworks', value: 'regional_frameworks' },
      { label: 'Municipal/Local', value: 'municipal_local' },
    ],
  },
  {
    label: 'Professional Role',
    value: 'professional_role',
    subcategories: [
      { label: 'Compliance Officer', value: 'compliance_officer' },
      { label: 'Legal Counsel', value: 'legal_counsel' },
      { label: 'Risk Manager', value: 'risk_manager' },
      { label: 'Chief Legal Officer', value: 'chief_legal_officer' },
      {
        label: 'Regulatory Affairs Director',
        value: 'regulatory_affairs_director',
      },
      { label: 'Policy Maker', value: 'policy_maker' },
      { label: 'Lobbyist', value: 'lobbyist' },
    ],
  },
  {
    label: 'Industry Segment',
    value: 'industry_segment',
    subcategories: [
      { label: 'Banking & Lending', value: 'banking_lending' },
      { label: 'Securities & Trading', value: 'securities_trading' },
      { label: 'Insurance', value: 'insurance' },
      { label: 'Investment Management', value: 'investment_management' },
      { label: 'FinTech/Digital Finance', value: 'fintech_digital_finance' },
      {
        label: 'Cryptocurrency/Digital Assets',
        value: 'cryptocurrency_digital_assets',
      },
      { label: 'Payment Services', value: 'payment_services' },
      {
        label: 'Consumer Financial Services',
        value: 'consumer_financial_services',
      },
    ],
  },
  {
    label: 'Regulatory Agency Focus',
    value: 'regulatory_agency_focus',
    subcategories: [
      { label: 'SEC', value: 'sec' },
      { label: 'FINRA', value: 'finra' },
      { label: 'Federal Reserve', value: 'federal_reserve' },
      { label: 'CFTC', value: 'cftc' },
      { label: 'OCC', value: 'occ' },
      { label: 'FDIC', value: 'fdic' },
      {
        label: 'International Bodies (Basel, IOSCO)',
        value: 'international_bodies',
      },
    ],
  },
  {
    label: 'Compliance Area',
    value: 'compliance_area',
    subcategories: [
      { label: 'AML/KYC', value: 'aml_kyc' },
      { label: 'Market Manipulation', value: 'market_manipulation' },
      { label: 'Insider Trading', value: 'insider_trading' },
      { label: 'Consumer Protection', value: 'consumer_protection' },
      { label: 'Capital Requirements', value: 'capital_requirements' },
      { label: 'Data Privacy/Security', value: 'data_privacy_security' },
      { label: 'ESG Compliance', value: 'esg_compliance' },
      { label: 'Digital Asset Regulation', value: 'digital_asset_regulation' },
    ],
  },
  {
    label: 'Documentation Level',
    value: 'documentation_level',
    subcategories: [
      { label: 'Executive Summaries', value: 'executive_summaries' },
      { label: 'Full Legal Text', value: 'full_legal_text' },
      { label: 'Practical Implications', value: 'practical_implications' },
      { label: 'Implementation Guides', value: 'implementation_guides' },
      { label: 'Case Studies', value: 'case_studies' },
    ],
  },
  {
    label: 'Update Frequency',
    value: 'update_frequency',
    subcategories: [
      { label: 'Real-time Alerts', value: 'real_time_alerts' },
      { label: 'Daily Digests', value: 'daily_digests' },
      { label: 'Weekly Roundups', value: 'weekly_roundups' },
      { label: 'Monthly Updates', value: 'monthly_updates' },
      { label: 'Quarterly Reviews', value: 'quarterly_reviews' },
    ],
  },
  {
    label: 'Risk Category',
    value: 'risk_category',
    subcategories: [
      { label: 'Operational Risk', value: 'operational_risk' },
      { label: 'Legal Risk', value: 'legal_risk' },
      { label: 'Reputational Risk', value: 'reputational_risk' },
      { label: 'Systemic Risk', value: 'systemic_risk' },
      { label: 'Market Risk', value: 'market_risk' },
      { label: 'Credit Risk', value: 'credit_risk' },
    ],
  },
  {
    label: 'Business Size Focus',
    value: 'business_size_focus',
    subcategories: [
      { label: 'Large Institutions', value: 'large_institutions' },
      { label: 'Mid-size Companies', value: 'mid_size_companies' },
      { label: 'Small Businesses', value: 'small_businesses' },
      { label: 'Startups', value: 'startups' },
    ],
  },
  {
    label: 'Geographic Scope',
    value: 'geographic_scope',
    subcategories: [
      { label: 'Domestic Regulations', value: 'domestic_regulations' },
      { label: 'EU Regulations', value: 'eu_regulations' },
      { label: 'APAC Framework', value: 'apac_framework' },
      { label: 'Global Standards', value: 'global_standards' },
      { label: 'Regional Requirements', value: 'regional_requirements' },
    ],
  },
  {
    label: 'Enforcement Priority',
    value: 'enforcement_priority',
    subcategories: [
      { label: 'High Priority/Active Enforcement', value: 'high_priority' },
      { label: 'Routine Supervision', value: 'routine_supervision' },
      { label: 'Emerging Issues', value: 'emerging_issues' },
      { label: 'Historical Precedents', value: 'historical_precedents' },
      { label: 'Industry Guidance', value: 'industry_guidance' },
    ],
  },
  {
    label: 'Special Topics',
    value: 'special_topics',
    subcategories: [
      { label: 'Climate/ESG Regulations', value: 'climate_esg' },
      { label: 'Digital Innovation', value: 'digital_innovation' },
      { label: 'Consumer Rights', value: 'consumer_rights' },
      { label: 'Market Structure', value: 'market_structure' },
      { label: 'Systemic Risk Management', value: 'systemic_risk_management' },
      { label: 'Corporate Governance', value: 'corporate_governance' },
    ],
  },
  {
    label: 'Content Depth',
    value: 'content_depth',
    subcategories: [
      { label: 'Brief Updates', value: 'brief_updates' },
      { label: 'Technical Analysis', value: 'technical_analysis' },
      { label: 'Impact Assessment', value: 'impact_assessment' },
      { label: 'Compliance Guides', value: 'compliance_guides' },
      { label: 'Expert Commentary', value: 'expert_commentary' },
    ],
  },
];

export const CRYPTOCURRENCY_AND_BLOCKCHAIN_NEWS: CategoryOption[] = [
  {
    label: 'Trading Style',
    value: 'trading_style',
    subcategories: [
      { label: 'Spot Trader', value: 'spot_trader' },
      { label: 'Derivatives Trader', value: 'derivatives_trader' },
      { label: 'DeFi Yield Farmer', value: 'defi_yield_farmer' },
      { label: 'Arbitrage Trader', value: 'arbitrage_trader' },
      { label: 'HODLer', value: 'hodler' },
      { label: 'Staking Participant', value: 'staking_participant' },
    ],
  },
  {
    label: 'Market Segment',
    value: 'market_segment',
    subcategories: [
      { label: 'Layer 1 Protocols', value: 'layer_1_protocols' },
      { label: 'Layer 2 Solutions', value: 'layer_2_solutions' },
      { label: 'DeFi Platforms', value: 'defi_platforms' },
      { label: 'NFT Markets', value: 'nft_markets' },
      { label: 'GameFi/Play-to-Earn', value: 'gamefi_play_to_earn' },
      { label: 'Web3 Infrastructure', value: 'web3_infrastructure' },
      { label: 'Metaverse Projects', value: 'metaverse_projects' },
    ],
  },
  {
    label: 'Technical Expertise',
    value: 'technical_expertise',
    subcategories: [
      { label: 'Non-Technical User', value: 'non_technical_user' },
      { label: 'Basic Protocol Knowledge', value: 'basic_protocol_knowledge' },
      { label: 'Smart Contract Developer', value: 'smart_contract_developer' },
      { label: 'Blockchain Architect', value: 'blockchain_architect' },
      { label: 'Security Researcher', value: 'security_researcher' },
      { label: 'Protocol Designer', value: 'protocol_designer' },
    ],
  },
  {
    label: 'Investment Scale',
    value: 'investment_scale',
    subcategories: [
      { label: 'Retail Trader (<$10K)', value: 'retail_trader' },
      { label: 'Medium Portfolio ($10K-$100K)', value: 'medium_portfolio' },
      { label: 'Large Portfolio ($100K-$1M)', value: 'large_portfolio' },
      { label: 'Institutional ($1M+)', value: 'institutional' },
      { label: 'DAO Treasury Manager', value: 'dao_treasury_manager' },
    ],
  },
  {
    label: 'Ecosystem Focus',
    value: 'ecosystem_focus',
    subcategories: [
      { label: 'Bitcoin Ecosystem', value: 'bitcoin_ecosystem' },
      { label: 'Ethereum Ecosystem', value: 'ethereum_ecosystem' },
      { label: 'Alternative L1s', value: 'alternative_l1s' },
      { label: 'Cross-chain Protocols', value: 'cross_chain_protocols' },
      { label: 'Privacy Coins', value: 'privacy_coins' },
      { label: 'Meme Coins', value: 'meme_coins' },
    ],
  },
  {
    label: 'Geographic Context',
    value: 'geographic_context',
    subcategories: [
      {
        label: 'US Regulatory Environment',
        value: 'us_regulatory_environment',
      },
      { label: 'EU Markets', value: 'eu_markets' },
      { label: 'Asia Pacific Trading', value: 'asia_pacific_trading' },
      { label: 'Global Markets', value: 'global_markets' },
      { label: 'Emerging Markets', value: 'emerging_markets' },
    ],
  },
  {
    label: 'Use Case Interest',
    value: 'use_case_interest',
    subcategories: [
      { label: 'Payments/Remittance', value: 'payments_remittance' },
      { label: 'Store of Value', value: 'store_of_value' },
      { label: 'DeFi Applications', value: 'defi_applications' },
      { label: 'Enterprise Solutions', value: 'enterprise_solutions' },
      { label: 'Government/CBDC', value: 'government_cbdc' },
      { label: 'Social Tokens', value: 'social_tokens' },
    ],
  },
  {
    label: 'Risk Profile',
    value: 'risk_profile',
    subcategories: [
      { label: 'Blue Chip Only', value: 'blue_chip_only' },
      { label: 'Mid-Cap Protocols', value: 'mid_cap_protocols' },
      { label: 'New Projects/IDOs', value: 'new_projects_idos' },
      { label: 'Experimental DeFi', value: 'experimental_defi' },
      { label: 'High-Risk Trading', value: 'high_risk_trading' },
    ],
  },
  {
    label: 'Industry Role',
    value: 'industry_role',
    subcategories: [
      { label: 'Individual Investor', value: 'individual_investor' },
      { label: 'Protocol Developer', value: 'protocol_developer' },
      { label: 'DAO Contributor', value: 'dao_contributor' },
      { label: 'Mining/Validator', value: 'mining_validator' },
      { label: 'Market Maker', value: 'market_maker' },
      { label: 'Research Analyst', value: 'research_analyst' },
      { label: 'Compliance Officer', value: 'compliance_officer' },
    ],
  },
  {
    label: 'Technical Analysis Level',
    value: 'technical_analysis_level',
    subcategories: [
      { label: 'Basic Chart Reading', value: 'basic_chart_reading' },
      { label: 'Advanced TA', value: 'advanced_ta' },
      { label: 'On-Chain Analytics', value: 'on_chain_analytics' },
      { label: 'Sentiment Analysis', value: 'sentiment_analysis' },
      { label: 'Quant Trading', value: 'quant_trading' },
    ],
  },
  {
    label: 'Regulatory Interest',
    value: 'regulatory_interest',
    subcategories: [
      { label: 'Compliance Focus', value: 'compliance_focus' },
      { label: 'Legal Framework', value: 'legal_framework' },
      { label: 'Tax Implications', value: 'tax_implications' },
      { label: 'Policy Development', value: 'policy_development' },
      { label: 'Regulatory Arbitrage', value: 'regulatory_arbitrage' },
    ],
  },
  {
    label: 'Protocol Participation',
    value: 'protocol_participation',
    subcategories: [
      { label: 'Governance Voter', value: 'governance_voter' },
      { label: 'Liquidity Provider', value: 'liquidity_provider' },
      { label: 'Network Validator', value: 'network_validator' },
      { label: 'Protocol Tester', value: 'protocol_tester' },
      { label: 'Community Moderator', value: 'community_moderator' },
    ],
  },
  {
    label: 'Research Depth',
    value: 'research_depth',
    subcategories: [
      { label: 'News Headlines', value: 'news_headlines' },
      { label: 'Market Updates', value: 'market_updates' },
      { label: 'Technical Deep Dives', value: 'technical_deep_dives' },
      { label: 'Academic Research', value: 'academic_research' },
      { label: 'White Paper Analysis', value: 'white_paper_analysis' },
      { label: 'Protocol Documentation', value: 'protocol_documentation' },
    ],
  },
  {
    label: 'Time Commitment',
    value: 'time_commitment',
    subcategories: [
      { label: 'Full-time Trader', value: 'full_time_trader' },
      { label: 'Part-time Investor', value: 'part_time_investor' },
      { label: 'Casual Observer', value: 'casual_observer' },
      { label: 'Project Contributor', value: 'project_contributor' },
      { label: 'Professional Analyst', value: 'professional_analyst' },
    ],
  },
];

export const INVESTMENT_AND_ASSET_MANAGEMENT_NEWS: CategoryOption[] = [
  {
    label: 'Professional Role',
    value: 'professional_role',
    subcategories: [
      { label: 'Portfolio Manager', value: 'portfolio_manager' },
      { label: 'Investment Strategist', value: 'investment_strategist' },
      { label: 'Risk Manager', value: 'risk_manager' },
      { label: 'Investment Analyst', value: 'investment_analyst' },
      { label: 'Wealth Manager', value: 'wealth_manager' },
      { label: 'Family Office Manager', value: 'family_office_manager' },
      { label: 'Asset Allocator', value: 'asset_allocator' },
      { label: 'Product Specialist', value: 'product_specialist' },
    ],
  },
  {
    label: 'Asset Class Expertise',
    value: 'asset_class_expertise',
    subcategories: [
      { label: 'Public Equities', value: 'public_equities' },
      { label: 'Fixed Income/Credit', value: 'fixed_income_credit' },
      { label: 'Private Markets', value: 'private_markets' },
      { label: 'Real Assets', value: 'real_assets' },
      { label: 'Multi-Asset Solutions', value: 'multi_asset_solutions' },
      {
        label: 'Derivatives/Structured Products',
        value: 'derivatives_structured_products',
      },
      { label: 'ETFs/Index Funds', value: 'etfs_index_funds' },
      { label: 'Hedge Fund Strategies', value: 'hedge_fund_strategies' },
    ],
  },
  {
    label: 'Client Type Focus',
    value: 'client_type_focus',
    subcategories: [
      { label: 'Institutional Investors', value: 'institutional_investors' },
      {
        label: 'High Net Worth Individuals',
        value: 'high_net_worth_individuals',
      },
      { label: 'Pension Funds', value: 'pension_funds' },
      { label: 'Insurance Companies', value: 'insurance_companies' },
      { label: 'Endowments/Foundations', value: 'endowments_foundations' },
      { label: 'Sovereign Wealth Funds', value: 'sovereign_wealth_funds' },
      { label: 'Corporate Treasury', value: 'corporate_treasury' },
      { label: 'Retail Distribution', value: 'retail_distribution' },
    ],
  },
  {
    label: 'Investment Vehicle Focus',
    value: 'investment_vehicle_focus',
    subcategories: [
      { label: 'Mutual Funds', value: 'mutual_funds' },
      {
        label: 'Separately Managed Accounts',
        value: 'separately_managed_accounts',
      },
      {
        label: 'Collective Investment Trusts',
        value: 'collective_investment_trusts',
      },
      { label: 'Limited Partnerships', value: 'limited_partnerships' },
      { label: 'UCITS Funds', value: 'ucits_funds' },
      { label: 'ETFs', value: 'etfs' },
      { label: 'Closed-End Funds', value: 'closed_end_funds' },
    ],
  },
  {
    label: 'Investment Process Interest',
    value: 'investment_process_interest',
    subcategories: [
      { label: 'Asset Allocation', value: 'asset_allocation' },
      { label: 'Security Selection', value: 'security_selection' },
      { label: 'Portfolio Construction', value: 'portfolio_construction' },
      { label: 'Risk Management', value: 'risk_management' },
      { label: 'ESG Integration', value: 'esg_integration' },
      { label: 'Factor Investing', value: 'factor_investing' },
      { label: 'Thematic Investing', value: 'thematic_investing' },
      { label: 'Tax-Efficient Strategies', value: 'tax_efficient_strategies' },
    ],
  },
  {
    label: 'Operational Focus',
    value: 'operational_focus',
    subcategories: [
      { label: 'Trading Operations', value: 'trading_operations' },
      { label: 'Portfolio Analytics', value: 'portfolio_analytics' },
      { label: 'Performance Attribution', value: 'performance_attribution' },
      { label: 'Compliance/Regulatory', value: 'compliance_regulatory' },
      { label: 'Client Reporting', value: 'client_reporting' },
      { label: 'Investment Operations', value: 'investment_operations' },
      { label: 'Technology Systems', value: 'technology_systems' },
      { label: 'Due Diligence', value: 'due_diligence' },
    ],
  },
  {
    label: 'Market Coverage',
    value: 'market_coverage',
    subcategories: [
      { label: 'Developed Markets', value: 'developed_markets' },
      { label: 'Emerging Markets', value: 'emerging_markets' },
      { label: 'Frontier Markets', value: 'frontier_markets' },
      { label: 'Global Markets', value: 'global_markets' },
      { label: 'Regional Specialization', value: 'regional_specialization' },
      { label: 'Country-Specific Focus', value: 'country_specific_focus' },
    ],
  },
  {
    label: 'Investment Philosophy',
    value: 'investment_philosophy',
    subcategories: [
      { label: 'Active Management', value: 'active_management' },
      { label: 'Passive/Index', value: 'passive_index' },
      { label: 'Smart Beta/Factor', value: 'smart_beta_factor' },
      { label: 'Alternative Strategies', value: 'alternative_strategies' },
      { label: 'Sustainable Investing', value: 'sustainable_investing' },
      { label: 'Absolute Return', value: 'absolute_return' },
      {
        label: 'Liability-Driven Investment',
        value: 'liability_driven_investment',
      },
    ],
  },
  {
    label: 'Research Interest',
    value: 'research_interest',
    subcategories: [
      { label: 'Macro Research', value: 'macro_research' },
      { label: 'Bottom-up Analysis', value: 'bottom_up_analysis' },
      { label: 'Quantitative Models', value: 'quantitative_models' },
      { label: 'Technical Analysis', value: 'technical_analysis' },
      { label: 'ESG Research', value: 'esg_research' },
      { label: 'Alternative Data', value: 'alternative_data' },
      { label: 'Academic Research', value: 'academic_research' },
    ],
  },
  {
    label: 'Regulatory Framework',
    value: 'regulatory_framework',
    subcategories: [
      { label: 'Investment Company Act', value: 'investment_company_act' },
      { label: 'ERISA', value: 'erisa' },
      { label: 'AIFMD', value: 'aifmd' },
      { label: 'UCITS', value: 'ucits' },
      { label: 'Basel Requirements', value: 'basel_requirements' },
      { label: 'Local Market Regulations', value: 'local_market_regulations' },
    ],
  },
  {
    label: 'Performance Metrics',
    value: 'performance_metrics',
    subcategories: [
      { label: 'Absolute Returns', value: 'absolute_returns' },
      { label: 'Relative Returns', value: 'relative_returns' },
      { label: 'Risk-Adjusted Metrics', value: 'risk_adjusted_metrics' },
      { label: 'Attribution Analysis', value: 'attribution_analysis' },
      { label: 'ESG Metrics', value: 'esg_metrics' },
      { label: 'Portfolio Analytics', value: 'portfolio_analytics' },
      { label: 'Benchmark Selection', value: 'benchmark_selection' },
    ],
  },
  {
    label: 'Business Development',
    value: 'business_development',
    subcategories: [
      { label: 'Product Development', value: 'product_development' },
      { label: 'Distribution Strategy', value: 'distribution_strategy' },
      { label: 'Client Acquisition', value: 'client_acquisition' },
      { label: 'RFP Management', value: 'rfp_management' },
      { label: 'Consultant Relations', value: 'consultant_relations' },
      { label: 'Marketing Materials', value: 'marketing_materials' },
      { label: 'Educational Content', value: 'educational_content' },
    ],
  },
  {
    label: 'Industry Standards',
    value: 'industry_standards',
    subcategories: [
      { label: 'GIPS Compliance', value: 'gips_compliance' },
      { label: 'CFA Institute Standards', value: 'cfa_institute_standards' },
      { label: 'UN PRI Guidelines', value: 'un_pri_guidelines' },
      { label: 'Industry Best Practices', value: 'industry_best_practices' },
      { label: 'Ethics Requirements', value: 'ethics_requirements' },
      { label: 'Fiduciary Standards', value: 'fiduciary_standards' },
    ],
  },
];

export const RISK_MANAGEMENT_AND_INSURANCE_NEWS: CategoryOption[] = [
  {
    label: 'Professional Role',
    value: 'professional_role',
    subcategories: [
      { label: 'Insurance Underwriter', value: 'insurance_underwriter' },
      { label: 'Risk Manager', value: 'risk_manager' },
      { label: 'Claims Adjuster', value: 'claims_adjuster' },
      { label: 'Insurance Broker', value: 'insurance_broker' },
      { label: 'Actuary', value: 'actuary' },
      { label: 'Insurance Agent', value: 'insurance_agent' },
      { label: 'Risk Consultant', value: 'risk_consultant' },
    ],
  },
  {
    label: 'Industry Sector',
    value: 'industry_sector',
    subcategories: [
      { label: 'Property & Casualty', value: 'property_casualty' },
      { label: 'Life & Health', value: 'life_health' },
      { label: 'Reinsurance', value: 'reinsurance' },
      { label: 'Commercial Lines', value: 'commercial_lines' },
      { label: 'Personal Lines', value: 'personal_lines' },
      { label: 'Specialty Insurance', value: 'specialty_insurance' },
      { label: 'Marine Insurance', value: 'marine_insurance' },
    ],
  },
  {
    label: 'Organization Type',
    value: 'organization_type',
    subcategories: [
      { label: 'Insurance Carrier', value: 'insurance_carrier' },
      { label: 'Insurance Agency', value: 'insurance_agency' },
      { label: 'Brokerage Firm', value: 'brokerage_firm' },
      {
        label: 'Corporate Risk Department',
        value: 'corporate_risk_department',
      },
      { label: 'Public Entity Risk Pool', value: 'public_entity_risk_pool' },
      {
        label: 'Captive Insurance Company',
        value: 'captive_insurance_company',
      },
      { label: 'TPA (Third Party Administrator)', value: 'tpa' },
    ],
  },
  {
    label: 'Geographic Scope',
    value: 'geographic_scope',
    subcategories: [
      { label: 'Domestic Markets', value: 'domestic_markets' },
      { label: 'International Markets', value: 'international_markets' },
      { label: 'Regional Focus', value: 'regional_focus' },
      { label: 'Emerging Markets', value: 'emerging_markets' },
      { label: "Lloyd's Market", value: 'lloyds_market' },
      { label: 'Bermuda Market', value: 'bermuda_market' },
    ],
  },
  {
    label: 'Coverage Areas',
    value: 'coverage_areas',
    subcategories: [
      { label: 'Property Coverage', value: 'property_coverage' },
      { label: 'Liability Coverage', value: 'liability_coverage' },
      { label: 'Cyber Insurance', value: 'cyber_insurance' },
      { label: "Workers' Compensation", value: 'workers_compensation' },
      { label: 'Professional Liability', value: 'professional_liability' },
      { label: 'Environmental Risk', value: 'environmental_risk' },
      { label: 'Directors & Officers', value: 'directors_officers' },
    ],
  },
  {
    label: 'Risk Categories',
    value: 'risk_categories',
    subcategories: [
      { label: 'Operational Risk', value: 'operational_risk' },
      { label: 'Financial Risk', value: 'financial_risk' },
      { label: 'Strategic Risk', value: 'strategic_risk' },
      { label: 'Compliance Risk', value: 'compliance_risk' },
      { label: 'Catastrophic Risk', value: 'catastrophic_risk' },
      { label: 'Emerging Risks', value: 'emerging_risks' },
      { label: 'Environmental, Social & Governance (ESG)', value: 'esg' },
    ],
  },
  {
    label: 'Experience Level',
    value: 'experience_level',
    subcategories: [
      { label: 'Entry Level', value: 'entry_level' },
      { label: 'Mid-Career', value: 'mid_career' },
      { label: 'Senior Executive', value: 'senior_executive' },
      { label: 'Technical Specialist', value: 'technical_specialist' },
      { label: 'Board Level', value: 'board_level' },
    ],
  },
  {
    label: 'Regulatory Focus',
    value: 'regulatory_focus',
    subcategories: [
      {
        label: 'State Insurance Regulations',
        value: 'state_insurance_regulations',
      },
      { label: 'Federal Oversight', value: 'federal_oversight' },
      { label: 'International Standards', value: 'international_standards' },
      { label: 'Solvency Requirements', value: 'solvency_requirements' },
      { label: 'Rate Regulation', value: 'rate_regulation' },
      { label: 'Market Conduct', value: 'market_conduct' },
    ],
  },
  {
    label: 'Business Size Focus',
    value: 'business_size_focus',
    subcategories: [
      { label: 'Small Business', value: 'small_business' },
      { label: 'Mid-Market', value: 'mid_market' },
      { label: 'Large Corporate', value: 'large_corporate' },
      { label: 'Global Enterprise', value: 'global_enterprise' },
      { label: 'Public Sector', value: 'public_sector' },
    ],
  },
  {
    label: 'Technical Interest',
    value: 'technical_interest',
    subcategories: [
      { label: 'Actuarial Science', value: 'actuarial_science' },
      { label: 'Risk Modeling', value: 'risk_modeling' },
      { label: 'Claims Analytics', value: 'claims_analytics' },
      { label: 'Underwriting Technology', value: 'underwriting_technology' },
      { label: 'InsurTech', value: 'insurtech' },
      { label: 'Predictive Analytics', value: 'predictive_analytics' },
    ],
  },
  {
    label: 'Market Conditions',
    value: 'market_conditions',
    subcategories: [
      { label: 'Hard Market', value: 'hard_market' },
      { label: 'Soft Market', value: 'soft_market' },
      { label: 'Transitional Market', value: 'transitional_market' },
      { label: 'Specialty Market', value: 'specialty_market' },
      {
        label: 'Alternative Risk Transfer',
        value: 'alternative_risk_transfer',
      },
    ],
  },
  {
    label: 'Risk Management Strategy',
    value: 'risk_management_strategy',
    subcategories: [
      { label: 'Risk Avoidance', value: 'risk_avoidance' },
      { label: 'Risk Mitigation', value: 'risk_mitigation' },
      { label: 'Risk Transfer', value: 'risk_transfer' },
      { label: 'Risk Retention', value: 'risk_retention' },
      {
        label: 'Enterprise Risk Management',
        value: 'enterprise_risk_management',
      },
      { label: 'Total Cost of Risk', value: 'total_cost_of_risk' },
    ],
  },
  {
    label: 'Claims Focus',
    value: 'claims_focus',
    subcategories: [
      { label: 'Claims Processing', value: 'claims_processing' },
      { label: 'Litigation Management', value: 'litigation_management' },
      { label: 'Loss Control', value: 'loss_control' },
      { label: 'Recovery/Subrogation', value: 'recovery_subrogation' },
      { label: 'Claims Technology', value: 'claims_technology' },
      { label: 'Settlement Strategies', value: 'settlement_strategies' },
    ],
  },
];

export const FINANCIAL_EDUCATION_AND_LITERACY_NEWS: CategoryOption[] = [
  {
    label: 'Life Stage',
    value: 'life_stage',
    subcategories: [
      { label: 'Students/Young Adults', value: 'students_young_adults' },
      {
        label: 'Early Career Professionals',
        value: 'early_career_professionals',
      },
      { label: 'Mid-Career', value: 'mid_career' },
      { label: 'Pre-Retirement', value: 'pre_retirement' },
      { label: 'Retirees', value: 'retirees' },
      {
        label: 'Multi-generational Family',
        value: 'multi_generational_family',
      },
    ],
  },
  {
    label: 'Financial Knowledge Level',
    value: 'financial_knowledge_level',
    subcategories: [
      { label: 'Complete Beginner', value: 'complete_beginner' },
      { label: 'Basic Understanding', value: 'basic_understanding' },
      { label: 'Intermediate', value: 'intermediate' },
      { label: 'Advanced', value: 'advanced' },
      { label: 'Professional/Educator', value: 'professional_educator' },
    ],
  },
  {
    label: 'Income Bracket',
    value: 'income_bracket',
    subcategories: [
      { label: 'Entry Level (<$30K)', value: 'entry_level' },
      { label: 'Middle Income ($30K-$75K)', value: 'middle_income' },
      { label: 'Upper Middle ($75K-$150K)', value: 'upper_middle' },
      { label: 'High Income ($150K+)', value: 'high_income' },
      { label: 'High Net Worth', value: 'high_net_worth' },
    ],
  },
  {
    label: 'Educational Focus Areas',
    value: 'educational_focus_areas',
    subcategories: [
      { label: 'Budgeting Basics', value: 'budgeting_basics' },
      { label: 'Debt Management', value: 'debt_management' },
      { label: 'Credit Building', value: 'credit_building' },
      { label: 'Savings Strategies', value: 'savings_strategies' },
      { label: 'Investment Fundamentals', value: 'investment_fundamentals' },
      { label: 'Tax Planning', value: 'tax_planning' },
      { label: 'Insurance Understanding', value: 'insurance_understanding' },
      { label: 'Estate Planning', value: 'estate_planning' },
    ],
  },
  {
    label: 'Financial Goals',
    value: 'financial_goals',
    subcategories: [
      { label: 'Emergency Fund Building', value: 'emergency_fund_building' },
      { label: 'Debt Reduction', value: 'debt_reduction' },
      { label: 'Home Ownership', value: 'home_ownership' },
      { label: 'College Savings', value: 'college_savings' },
      { label: 'Retirement Planning', value: 'retirement_planning' },
      { label: 'Wealth Building', value: 'wealth_building' },
      { label: 'Legacy Planning', value: 'legacy_planning' },
    ],
  },
  {
    label: 'Learning Style',
    value: 'learning_style',
    subcategories: [
      { label: 'Visual Learners', value: 'visual_learners' },
      { label: 'Text-Based', value: 'text_based' },
      { label: 'Interactive/Hands-on', value: 'interactive_hands_on' },
      { label: 'Case Study Based', value: 'case_study_based' },
      { label: 'Video/Multimedia', value: 'video_multimedia' },
      { label: 'Classroom Style', value: 'classroom_style' },
    ],
  },
  {
    label: 'Cultural Context',
    value: 'cultural_context',
    subcategories: [
      { label: 'International Students', value: 'international_students' },
      { label: 'Immigrants/New Citizens', value: 'immigrants_new_citizens' },
      { label: 'Multi-cultural Families', value: 'multi_cultural_families' },
      { label: 'Language Preferences', value: 'language_preferences' },
      {
        label: 'Cultural Financial Practices',
        value: 'cultural_financial_practices',
      },
    ],
  },
  {
    label: 'Special Circumstances',
    value: 'special_circumstances',
    subcategories: [
      {
        label: 'First-Generation Wealth Builders',
        value: 'first_generation_wealth_builders',
      },
      { label: 'Career Transitions', value: 'career_transitions' },
      {
        label: 'Recently Divorced/Widowed',
        value: 'recently_divorced_widowed',
      },
      { label: 'Small Business Owners', value: 'small_business_owners' },
      { label: 'Gig Economy Workers', value: 'gig_economy_workers' },
      { label: 'Military/Veterans', value: 'military_veterans' },
    ],
  },
  {
    label: 'Financial Behaviors',
    value: 'financial_behaviors',
    subcategories: [
      { label: 'Spenders', value: 'spenders' },
      { label: 'Savers', value: 'savers' },
      { label: 'Risk-Averse', value: 'risk_averse' },
      { label: 'Entrepreneurial', value: 'entrepreneurial' },
      { label: 'Traditional', value: 'traditional' },
    ],
  },
  {
    label: 'Content Complexity',
    value: 'content_complexity',
    subcategories: [
      { label: 'Basic Terminology', value: 'basic_terminology' },
      { label: 'Intermediate Concepts', value: 'intermediate_concepts' },
      { label: 'Advanced Strategies', value: 'advanced_strategies' },
      { label: 'Professional Level', value: 'professional_level' },
      { label: 'Academic/Research', value: 'academic_research' },
    ],
  },
  {
    label: 'Financial Products Focus',
    value: 'financial_products_focus',
    subcategories: [
      { label: 'Banking Products', value: 'banking_products' },
      { label: 'Credit Products', value: 'credit_products' },
      { label: 'Investment Vehicles', value: 'investment_vehicles' },
      { label: 'Insurance Products', value: 'insurance_products' },
      { label: 'Retirement Accounts', value: 'retirement_accounts' },
      { label: 'Real Estate', value: 'real_estate' },
    ],
  },
  {
    label: 'Application Context',
    value: 'application_context',
    subcategories: [
      { label: 'Personal Finance', value: 'personal_finance' },
      { label: 'Family Finance', value: 'family_finance' },
      { label: 'Small Business', value: 'small_business' },
      { label: 'Non-Profit', value: 'non_profit' },
      { label: 'Social Enterprise', value: 'social_enterprise' },
      { label: 'Community Education', value: 'community_education' },
    ],
  },
  {
    label: 'Time Availability',
    value: 'time_availability',
    subcategories: [
      { label: 'Quick Tips (5 min)', value: 'quick_tips' },
      { label: 'Brief Lessons (15 min)', value: 'brief_lessons' },
      { label: 'Detailed Modules (30+ min)', value: 'detailed_modules' },
      { label: 'Comprehensive Courses', value: 'comprehensive_courses' },
      { label: 'Self-Paced Programs', value: 'self_paced_programs' },
    ],
  },
  {
    label: 'Support Needs',
    value: 'support_needs',
    subcategories: [
      { label: 'Self-Guided', value: 'self_guided' },
      { label: 'Mentor/Coach Required', value: 'mentor_coach_required' },
      { label: 'Peer Group Learning', value: 'peer_group_learning' },
      { label: 'Professional Guidance', value: 'professional_guidance' },
      { label: 'Family Support', value: 'family_support' },
    ],
  },
];

export const SUSTAINABLE_FINANCE_AND_ESG_NEWS: CategoryOption[] = [
  {
    label: 'ESG Focus Area',
    value: 'esg_focus_area',
    subcategories: [
      { label: 'Environmental Specialist', value: 'environmental_specialist' },
      { label: 'Social Impact Expert', value: 'social_impact_expert' },
      { label: 'Governance Professional', value: 'governance_professional' },
      { label: 'Integrated ESG Analyst', value: 'integrated_esg_analyst' },
      { label: 'Climate Risk Specialist', value: 'climate_risk_specialist' },
    ],
  },
  {
    label: 'Stakeholder Role',
    value: 'stakeholder_role',
    subcategories: [
      { label: 'ESG Portfolio Manager', value: 'esg_portfolio_manager' },
      { label: 'Sustainability Officer', value: 'sustainability_officer' },
      { label: 'Impact Investor', value: 'impact_investor' },
      { label: 'Corporate ESG Director', value: 'corporate_esg_director' },
      {
        label: 'ESG Rating Agency Analyst',
        value: 'esg_rating_agency_analyst',
      },
      { label: 'Green Bond Investor', value: 'green_bond_investor' },
      {
        label: 'Regulatory Compliance Officer',
        value: 'regulatory_compliance_officer',
      },
    ],
  },
  {
    label: 'Industry ESG Interest',
    value: 'industry_esg_interest',
    subcategories: [
      { label: 'Clean Energy', value: 'clean_energy' },
      { label: 'Sustainable Agriculture', value: 'sustainable_agriculture' },
      { label: 'Green Construction', value: 'green_construction' },
      { label: 'Circular Economy', value: 'circular_economy' },
      {
        label: 'Sustainable Transportation',
        value: 'sustainable_transportation',
      },
      { label: 'Clean Technology', value: 'clean_technology' },
      { label: 'Sustainable Fashion', value: 'sustainable_fashion' },
    ],
  },
  {
    label: 'ESG Investment Vehicle',
    value: 'esg_investment_vehicle',
    subcategories: [
      { label: 'Green Bonds', value: 'green_bonds' },
      {
        label: 'Sustainability-Linked Loans',
        value: 'sustainability_linked_loans',
      },
      { label: 'ESG ETFs', value: 'esg_etfs' },
      { label: 'Impact Funds', value: 'impact_funds' },
      { label: 'Carbon Credits', value: 'carbon_credits' },
      { label: 'Social Impact Bonds', value: 'social_impact_bonds' },
    ],
  },
  {
    label: 'Regulatory Framework',
    value: 'regulatory_framework',
    subcategories: [
      { label: 'EU Taxonomy', value: 'eu_taxonomy' },
      { label: 'SFDR Compliance', value: 'sfdr_compliance' },
      { label: 'TCFD Reporting', value: 'tcfd_reporting' },
      { label: 'GRI Standards', value: 'gri_standards' },
      { label: 'SEC ESG Rules', value: 'sec_esg_rules' },
    ],
  },
  {
    label: 'Impact Measurement Focus',
    value: 'impact_measurement_focus',
    subcategories: [
      { label: 'Carbon Metrics', value: 'carbon_metrics' },
      { label: 'Water Usage', value: 'water_usage' },
      { label: 'Social Impact KPIs', value: 'social_impact_kpis' },
      { label: 'Biodiversity Metrics', value: 'biodiversity_metrics' },
      {
        label: 'Supply Chain Sustainability',
        value: 'supply_chain_sustainability',
      },
      { label: 'DEI Metrics', value: 'dei_metrics' },
    ],
  },
  {
    label: 'Geographic ESG Standards',
    value: 'geographic_esg_standards',
    subcategories: [
      { label: 'EU Green Deal', value: 'eu_green_deal' },
      { label: 'US ESG Regulations', value: 'us_esg_regulations' },
      {
        label: 'Asia Pacific Green Finance',
        value: 'asia_pacific_green_finance',
      },
      {
        label: 'Emerging Markets Standards',
        value: 'emerging_markets_standards',
      },
      { label: 'Global ESG Frameworks', value: 'global_esg_frameworks' },
    ],
  },
  {
    label: 'Sustainability Expertise Level',
    value: 'sustainability_expertise_level',
    subcategories: [
      { label: 'ESG Beginner', value: 'esg_beginner' },
      {
        label: 'Intermediate Practitioner',
        value: 'intermediate_practitioner',
      },
      { label: 'Advanced Specialist', value: 'advanced_specialist' },
      { label: 'Subject Matter Expert', value: 'subject_matter_expert' },
    ],
  },
  {
    label: 'Time Horizon',
    value: 'time_horizon',
    subcategories: [
      {
        label: 'Short-term Transition Risks',
        value: 'short_term_transition_risks',
      },
      { label: 'Medium-term Adaptation', value: 'medium_term_adaptation' },
      {
        label: 'Long-term Sustainability Goals',
        value: 'long_term_sustainability_goals',
      },
      { label: 'Net-Zero Pathways', value: 'net_zero_pathways' },
    ],
  },
  {
    label: 'Stakeholder Engagement',
    value: 'stakeholder_engagement',
    subcategories: [
      { label: 'Shareholder Activism', value: 'shareholder_activism' },
      { label: 'Community Impact', value: 'community_impact' },
      { label: 'Employee Engagement', value: 'employee_engagement' },
      { label: 'Supply Chain Partners', value: 'supply_chain_partners' },
      { label: 'NGO Collaboration', value: 'ngo_collaboration' },
    ],
  },
  {
    label: 'ESG Data Interest',
    value: 'esg_data_interest',
    subcategories: [
      { label: 'ESG Ratings', value: 'esg_ratings' },
      { label: 'Sustainability Reports', value: 'sustainability_reports' },
      { label: 'Impact Assessments', value: 'impact_assessments' },
      { label: 'Scientific Climate Data', value: 'scientific_climate_data' },
      { label: 'Social Impact Metrics', value: 'social_impact_metrics' },
    ],
  },
  {
    label: 'Sustainable Development Goals',
    value: 'sustainable_development_goals',
    subcategories: [
      { label: 'SDG Alignment Specialist', value: 'sdg_alignment_specialist' },
      { label: 'Climate Action Focus (SDG 13)', value: 'climate_action_focus' },
      { label: 'Gender Equality (SDG 5)', value: 'gender_equality_focus' },
      { label: 'Clean Energy (SDG 7)', value: 'clean_energy_focus' },
      { label: 'Multiple SDG Integration', value: 'multiple_sdg_integration' },
    ],
  },
  {
    label: 'Market Development Stage',
    value: 'market_development_stage',
    subcategories: [
      { label: 'Emerging ESG Markets', value: 'emerging_esg_markets' },
      { label: 'Developed ESG Markets', value: 'developed_esg_markets' },
      { label: 'Transition Economies', value: 'transition_economies' },
      { label: 'Frontier Markets', value: 'frontier_markets' },
    ],
  },
];

export const FINANCIAL_TECHNOLOGY_FINTECH_NEWS: CategoryOption[] = [
  {
    label: 'Industry Segment',
    value: 'industry_segment',
    subcategories: [
      { label: 'Digital Banking/Neobanks', value: 'digital_banking_neobanks' },
      { label: 'Payment Processing', value: 'payment_processing' },
      { label: 'Blockchain/Crypto', value: 'blockchain_crypto' },
      { label: 'WealthTech/Robo-Advisors', value: 'wealthtech_robo_advisors' },
      { label: 'InsurTech', value: 'insurtech' },
      { label: 'RegTech', value: 'regtech' },
      { label: 'LendTech', value: 'lendtech' },
      { label: 'Open Banking', value: 'open_banking' },
    ],
  },
  {
    label: 'Role/Position',
    value: 'role_position',
    subcategories: [
      { label: 'Fintech Founder/CEO', value: 'fintech_founder_ceo' },
      { label: 'Product Manager', value: 'product_manager' },
      { label: 'Technical Architect', value: 'technical_architect' },
      { label: 'Compliance Officer', value: 'compliance_officer' },
      { label: 'UX Designer', value: 'ux_designer' },
      { label: 'Data Scientist', value: 'data_scientist' },
      { label: 'Venture Capitalist', value: 'venture_capitalist' },
      { label: 'Banking Innovation Lead', value: 'banking_innovation_lead' },
    ],
  },
  {
    label: 'Technology Focus',
    value: 'technology_focus',
    subcategories: [
      { label: 'AI/Machine Learning', value: 'ai_machine_learning' },
      { label: 'Cloud Infrastructure', value: 'cloud_infrastructure' },
      { label: 'API Integration', value: 'api_integration' },
      { label: 'Blockchain', value: 'blockchain' },
      { label: 'Mobile Development', value: 'mobile_development' },
      { label: 'Cybersecurity', value: 'cybersecurity' },
      { label: 'Data Analytics', value: 'data_analytics' },
      { label: 'Edge Computing', value: 'edge_computing' },
    ],
  },
  {
    label: 'Market Stage',
    value: 'market_stage',
    subcategories: [
      { label: 'Startup/Early Stage', value: 'startup_early_stage' },
      { label: 'Growth Phase', value: 'growth_phase' },
      { label: 'Enterprise/Established', value: 'enterprise_established' },
      { label: 'Pre-IPO', value: 'pre_ipo' },
      { label: 'Public Company', value: 'public_company' },
    ],
  },
  {
    label: 'Business Model',
    value: 'business_model',
    subcategories: [
      { label: 'B2B', value: 'b2b' },
      { label: 'B2C', value: 'b2c' },
      { label: 'B2B2C', value: 'b2b2c' },
      { label: 'Platform/Marketplace', value: 'platform_marketplace' },
      { label: 'SaaS', value: 'saas' },
      { label: 'BaaS (Banking-as-a-Service)', value: 'baas' },
    ],
  },
  {
    label: 'Geographic Scope',
    value: 'geographic_scope',
    subcategories: [
      { label: 'Developed Markets', value: 'developed_markets' },
      { label: 'Emerging Markets', value: 'emerging_markets' },
      { label: 'Cross-Border', value: 'cross_border' },
      { label: 'Regional Focus', value: 'regional_focus' },
      { label: 'Global Operations', value: 'global_operations' },
    ],
  },
  {
    label: 'Regulatory Framework',
    value: 'regulatory_framework',
    subcategories: [
      { label: 'Banking Licenses', value: 'banking_licenses' },
      { label: 'Payment Services', value: 'payment_services' },
      { label: 'Securities/Trading', value: 'securities_trading' },
      { label: 'Data Protection/Privacy', value: 'data_protection_privacy' },
      { label: 'Anti-Money Laundering', value: 'anti_money_laundering' },
      { label: 'Consumer Protection', value: 'consumer_protection' },
    ],
  },
  {
    label: 'Partnership Interest',
    value: 'partnership_interest',
    subcategories: [
      { label: 'Bank Partnerships', value: 'bank_partnerships' },
      { label: 'Tech Vendor Integration', value: 'tech_vendor_integration' },
      { label: 'API Providers', value: 'api_providers' },
      { label: 'White Label Solutions', value: 'white_label_solutions' },
      { label: 'Channel Partners', value: 'channel_partners' },
    ],
  },
  {
    label: 'Investment Focus',
    value: 'investment_focus',
    subcategories: [
      { label: 'Venture Capital', value: 'venture_capital' },
      { label: 'Private Equity', value: 'private_equity' },
      { label: 'Strategic Investment', value: 'strategic_investment' },
      { label: 'IPO/SPAC', value: 'ipo_spac' },
      { label: 'M&A Activity', value: 'ma_activity' },
    ],
  },
  {
    label: 'Customer Segment',
    value: 'customer_segment',
    subcategories: [
      { label: 'Retail/Consumer', value: 'retail_consumer' },
      { label: 'SME/Business', value: 'sme_business' },
      { label: 'Enterprise', value: 'enterprise' },
      { label: 'Underbanked', value: 'underbanked' },
      { label: 'High Net Worth', value: 'high_net_worth' },
      { label: 'Gen Z/Millennial', value: 'gen_z_millennial' },
    ],
  },
  {
    label: 'Innovation Category',
    value: 'innovation_category',
    subcategories: [
      { label: 'Disruptive Innovation', value: 'disruptive_innovation' },
      { label: 'Incremental Improvement', value: 'incremental_improvement' },
      { label: 'Market Expansion', value: 'market_expansion' },
      { label: 'Product Enhancement', value: 'product_enhancement' },
      {
        label: 'Business Model Innovation',
        value: 'business_model_innovation',
      },
    ],
  },
  {
    label: 'Development Stage',
    value: 'development_stage',
    subcategories: [
      { label: 'Proof of Concept', value: 'proof_of_concept' },
      { label: 'MVP Launch', value: 'mvp_launch' },
      { label: 'Scale-up Phase', value: 'scale_up_phase' },
      { label: 'Market Expansion', value: 'market_expansion' },
      { label: 'International Growth', value: 'international_growth' },
    ],
  },
  {
    label: 'Industry Trends',
    value: 'industry_trends',
    subcategories: [
      { label: 'Embedded Finance', value: 'embedded_finance' },
      { label: 'DeFi Integration', value: 'defi_integration' },
      { label: 'Super Apps', value: 'super_apps' },
      { label: 'Financial Inclusion', value: 'financial_inclusion' },
      { label: 'Green Finance', value: 'green_finance' },
      { label: 'Banking-as-a-Service', value: 'banking_as_a_service' },
    ],
  },
  {
    label: 'Competitive Analysis',
    value: 'competitive_analysis',
    subcategories: [
      { label: 'Market Leaders', value: 'market_leaders' },
      { label: 'Emerging Players', value: 'emerging_players' },
      { label: 'Traditional Banks', value: 'traditional_banks' },
      { label: 'Big Tech Entrants', value: 'big_tech_entrants' },
      { label: 'Regional Champions', value: 'regional_champions' },
    ],
  },
];
