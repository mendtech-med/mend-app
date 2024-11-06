// components/CategorySetup/data.ts

export const Types = [
    "Market News",
    "Corporate Finance News",
    "Economic Indicators",
    "Central Bank and Monetary Policy News",
    "Government Fiscal Policy News",
    "Industry-Specific Financial News",
    "International Trade and Global Economy News",
    "Personal Finance News",
    "Regulatory and Legal News",
    "Cryptocurrency and Blockchain News",
    "Investment and Asset Management News",
    "Risk Management and Insurance News",
    "Financial Technology (Fintech) News",
    "Sustainable Finance and ESG News",
    "Financial Education and Literacy News",
] as const;

export type ITypes = typeof Types[number];

export const Categories: { [key in ITypes]: string[] } = {
    "Market News": [
        "Stock market updates",
        "Bond market trends",
        "Commodity market movements",
        "Forex (foreign exchange) market news",
    ],
    "Corporate Finance News": [
        "Earnings reports",
        "Mergers and acquisitions",
        "Initial Public Offerings (IPOs)",
        "Corporate restructuring",
    ],
    "Economic Indicators": [
        "GDP growth rates",
        "Inflation rates",
        "Employment/unemployment figures",
        "Consumer confidence index",
    ],
    "Central Bank and Monetary Policy News": [
        "Interest rate decisions",
        "Quantitative easing measures",
        "Central bank statements and speeches",
        "Changes in reserve requirements",
    ],
    "Government Fiscal Policy News": [
        "Budget announcements",
        "Tax policy changes",
        "Government spending initiatives",
        "National debt updates",
    ],
    "Industry-Specific Financial News": [
        "Banking sector news",
        "Insurance industry updates",
        "Real estate market trends",
        "Fintech developments",
    ],
    "International Trade and Global Economy News": [
        "Trade agreements and disputes",
        "Currency fluctuations",
        "Global economic forecasts",
        "Emerging market trends",
    ],
    "Personal Finance News": [
        "Savings and investment advice",
        "Retirement planning updates",
        "Consumer credit trends",
        "Tax planning strategies",
    ],
    "Regulatory and Legal News": [
        "Financial regulations and reforms",
        "Compliance issues",
        "Legal cases affecting financial markets",
        "Regulatory body announcements (SEC, FCA, etc.)",
    ],
    "Cryptocurrency and Blockchain News": [
        "Bitcoin and altcoin price movements",
        "Blockchain technology developments",
        "Cryptocurrency regulations",
        "Adoption of digital currencies by institutions",
    ],
    "Investment and Asset Management News": [
        "Mutual fund performance",
        "Hedge fund strategies",
        "ETF (Exchange-Traded Fund) trends",
        "Alternative investment news",
    ],
    "Risk Management and Insurance News": [
        "New insurance products",
        "Risk assessment methodologies",
        "Actuarial science developments",
        "Catastrophe and natural disaster impact on insurance",
    ],
    "Financial Technology (Fintech) News": [
        "Mobile banking innovations",
        "Payment processing technologies",
        "Robo-advisory services",
        "Cybersecurity in finance",
    ],
    "Sustainable Finance and ESG News": [
        "Green bonds and sustainable investments",
        "Environmental, Social, and Governance (ESG) trends",
        "Impact investing developments",
        "Corporate sustainability initiatives",
    ],
    "Financial Education and Literacy News": [
        "Financial education programs",
        "Consumer awareness initiatives",
        "Financial literacy statistics and studies",
    ],
};

// components/CategorySetup/data.ts

export const Preferences: { [key in ITypes]?: { key: string; options: string[] }[] } = {
    "Market News": [
        {
            key: "Time Frame",
            options: ["Intraday", "Daily", "Weekly", "Monthly", "Quarterly", "Yearly"],
        },
        {
            key: "Geographic Region",
            options: [
                "North America",
                "Europe",
                "Asia-Pacific",
                "Latin America",
                "Middle East and Africa",
                "Global",
            ],
        },
        {
            key: "Market Type",
            options: ["Developed markets", "Emerging markets", "Frontier markets"],
        },
        {
            key: "Specific Indices",
            options: [
                "S&P 500",
                "Dow Jones",
                "NASDAQ (US)",
                "FTSE 100 (UK)",
                "DAX (Germany)",
                "Nikkei 225 (Japan)",
                "Shanghai Composite (China)",
                "And other major global indices",
            ],
        },
        {
            key: "Market Sectors",
            options: [
                "Technology",
                "Healthcare",
                "Finance",
                "Energy",
                "Consumer goods",
                "Industrials",
                "Utilities",
                "Real estate",
                "Materials",
                "Communication services",
            ],
        },
        {
            key: "Asset Classes",
            options: [
                "Stocks",
                "Bonds (government, corporate, municipal)",
                "Commodities (oil, gold, agricultural products)",
                "Currencies",
            ],
        },
        {
            key: "Market Capitalization",
            options: ["Large-cap", "Mid-cap", "Small-cap", "Micro-cap"],
        },
        {
            key: "Trading Volume",
            options: ["High volume", "Low volume", "Unusual volume"],
        },
        {
            key: "Price Movements",
            options: [
                "Percentage change",
                "Absolute change",
                "52-week highs/lows",
            ],
        },
        {
            key: "Market Sentiment",
            options: ["Bullish", "Bearish", "Neutral"],
        },
        {
            key: "Volatility Levels",
            options: ["High volatility", "Low volatility", "VIX (Volatility Index) levels"],
        },
        {
            key: "Economic Indicators Impacting Markets",
            options: ["GDP growth", "Inflation rates", "Employment data", "Interest rates"],
        },
        {
            key: "Corporate Actions",
            options: [
                "Earnings releases",
                "Mergers and acquisitions",
                "Stock splits",
                "Dividend announcements",
            ],
        },
        {
            key: "Regulatory Environment",
            options: ["Policy changes", "New regulations", "Compliance issues"],
        },
        {
            key: "Geopolitical Factors",
            options: [
                "Trade agreements/disputes",
                "Political events",
                "International conflicts",
            ],
        },
        {
            key: "Technical Analysis",
            options: [
                "Support and resistance levels",
                "Moving averages",
                "Trend lines",
                "Chart patterns",
            ],
        },
        {
            key: "Fundamental Analysis",
            options: [
                "P/E ratios",
                "Debt-to-equity ratios",
                "Return on equity (ROE)",
                "Earnings per share (EPS)",
            ],
        },
        {
            key: "Market Liquidity",
            options: ["Bid-ask spreads", "Market depth"],
        },
        {
            key: "Derivative Markets",
            options: [
                "Options trading volume and open interest",
                "Futures contracts",
            ],
        },
        {
            key: "Alternative Data",
            options: [
                "Social media sentiment",
                "Satellite imagery",
                "Credit card transaction data",
            ],
        },
    ],
    "Corporate Finance News": [
        {
            key: "Company Information",
            options: [
                "Company name",
                "Industry sector",
                "Market capitalization",
                "Stock ticker symbol",
                "Key executives (CEO, CFO, etc.)",
            ],
        },
        {
            key: "Financial Data",
            options: [
                "Revenue",
                "Net income",
                "Earnings per share (EPS)",
                "Year-over-year growth rates",
                "Quarterly/annual comparisons",
            ],
        },
        {
            key: "Market Data",
            options: [
                "Current stock price",
                "Stock price changes (daily, weekly, yearly)",
                "Trading volume",
                "Market indices performance (e.g., S&P 500, Dow Jones)",
            ],
        },
        {
            key: "Timing",
            options: [
                "Date and time of the news",
                "Fiscal quarter/year",
                "Earnings season",
            ],
        },
        {
            key: "Analyst Expectations",
            options: [
                "Consensus estimates for earnings, revenue, etc.",
                "Analyst ratings (buy, hold, sell)",
            ],
        },
        {
            key: "Economic Indicators",
            options: [
                "GDP growth",
                "Inflation rates",
                "Interest rates",
                "Unemployment figures",
            ],
        },
        {
            key: "Industry-specific Metrics",
            options: [
                "Relevant KPIs for different sectors (e.g., same-store sales for retail)",
            ],
        },
        {
            key: "Regulatory Environment",
            options: [
                "Relevant laws and regulations",
                "Compliance status",
            ],
        },
        {
            key: "Competitive Landscape",
            options: [
                "Major competitors",
                "Market share",
                "Industry trends",
            ],
        },
        {
            key: "Geographic Information",
            options: [
                "Company headquarters location",
                "Markets of operation",
                "Regional economic conditions",
            ],
        },
        {
            key: "Historical Context",
            options: [
                "Past performance",
                "Previous similar events (e.g., past mergers, IPOs)",
            ],
        },
        {
            key: "Deal-specific Information (for M&As and IPOs)",
            options: [
                "Transaction value",
                "Involved parties",
                "Expected synergies",
                "Underwriters (for IPOs)",
                "IPO price range",
            ],
        },
        {
            key: "Restructuring Details",
            options: [
                "Reasons for restructuring",
                "Expected cost savings",
                "Impact on workforce",
                "Timeline for implementation",
            ],
        },
        {
            key: "Quotes",
            options: [
                "Statements from company executives",
                "Expert opinions",
                "Analyst comments",
            ],
        },
        {
            key: "Future Outlook",
            options: [
                "Company guidance",
                "Industry forecasts",
                "Potential challenges or opportunities",
            ],
        },
    ],
    "Economic Indicators": [
        {
            key: "Time frame",
            options: [
                "Current values",
                "Historical trends (e.g., last quarter, year-over-year, 5-year average)",
                "Future projections/forecasts",
            ],
        },
        {
            key: "Geographic scope",
            options: [
                "National level",
                "Regional breakdowns",
                "International comparisons",
            ],
        },
        {
            key: "Sector-specific impacts",
            options: [
                "How these indicators affect different industries",
                "Which sectors are most sensitive to changes",
            ],
        },
        {
            key: "Policy implications",
            options: [
                "Central bank decisions (e.g., interest rate changes)",
                "Government fiscal policies",
            ],
        },
        {
            key: "Market reactions",
            options: [
                "Stock market performance",
                "Bond yields",
                "Currency exchange rates",
            ],
        },
        {
            key: "Expert opinions",
            options: [
                "Economist forecasts",
                "Analysis from financial institutions",
            ],
        },
        {
            key: "Interconnections between indicators",
            options: [
                "How changes in one indicator might affect others",
                "Correlation and causation considerations",
            ],
        },
        {
            key: "Seasonal adjustments",
            options: [
                "Account for regular seasonal variations in data",
            ],
        },
        {
            key: "Revision of previous data",
            options: [
                "Note any significant revisions to past figures",
            ],
        },
        {
            key: "Contextual events",
            options: [
                "Major economic events (e.g., trade deals, geopolitical tensions)",
                "Natural disasters or other external shocks",
            ],
        },
        {
            key: "Demographic factors",
            options: [
                "Population changes",
                "Workforce composition",
            ],
        },
        {
            key: "Methodology changes",
            options: [
                "Any updates to how these indicators are calculated or reported",
            ],
        },
    ],
    "Central Bank and Monetary Policy News": [
        {
            key: "Policy decision details",
            options: [
                "Actual changes in rates or policies",
                "Magnitude of changes",
                "Timing of implementation",
            ],
        },
        {
            key: "Historical context",
            options: [
                "Previous policy decisions",
                "Long-term trends in monetary policy",
                "Comparison to historical norms",
            ],
        },
        {
            key: "Economic backdrop",
            options: [
                "Current state of the economy (growth, inflation, employment)",
                "How the policy responds to economic conditions",
            ],
        },
        {
            key: "Forward guidance",
            options: [
                "Central bank's outlook on future policy direction",
                "Key phrases or changes in language used in statements",
            ],
        },
        {
            key: "Market expectations",
            options: [
                "Consensus forecasts prior to announcements",
                "Market reactions to policy decisions",
            ],
        },
        {
            key: "Global context",
            options: [
                "Policies of other major central banks",
                "International economic conditions",
                "Currency exchange rate impacts",
            ],
        },
        {
            key: "Political environment",
            options: [
                "Government fiscal policies",
                "Political pressures or debates surrounding monetary policy",
            ],
        },
        {
            key: "Sectoral impacts",
            options: [
                "Effects on different industries (e.g., banking, real estate)",
                "Implications for borrowers vs. savers",
            ],
        },
        {
            key: "Transmission mechanisms",
            options: [
                "How policy changes are expected to affect the broader economy",
                "Timeframe for policy effects to materialize",
            ],
        },
        {
            key: "Unconventional measures",
            options: [
                "Details of quantitative easing programs",
                "Other non-standard policy tools being used or considered",
            ],
        },
        {
            key: "Central bank credibility",
            options: [
                "Market trust in the central bank's ability to achieve its mandates",
                "Consistency of actions with stated goals",
            ],
        },
        {
            key: "Dissenting opinions",
            options: [
                "Views of policy committee members who disagree with decisions",
                "Alternative policy suggestions from within the central bank",
            ],
        },
        {
            key: "External expert analysis",
            options: [
                "Economist interpretations of policy decisions",
                "Financial institution forecasts based on central bank actions",
            ],
        },
        {
            key: "Technical details",
            options: [
                "Specific changes in reserve requirements",
                "Operational aspects of policy implementation",
            ],
        },
        {
            key: "Communication strategy",
            options: [
                "Analysis of the central bank's communication approach",
                "Changes in transparency or frequency of communications",
            ],
        },
    ],
    "Government Fiscal Policy News": [
        {
            key: "Temporal Context",
            options: [
                "Fiscal year timeline",
                "Historical policy trends (3-5 year lookback)",
                "Implementation deadlines",
                "Budget cycle phase",
                "Economic cycle position",
                "Election cycle timing",
                "Seasonal spending patterns",
                "Previous policy outcomes",
                "Future projections",
                "Policy sunset dates",
            ],
        },
        {
            key: "Economic Context",
            options: [
                "Current GDP growth rate",
                "Inflation rate",
                "Unemployment rate",
                "Interest rates",
                "Exchange rates",
                "Market conditions",
                "Credit ratings",
                "Economic growth forecasts",
                "Sector-specific performance",
                "Regional economic disparities",
            ],
        },
        {
            key: "Political Context",
            options: [
                "Government type (coalition, majority, etc.)",
                "Political party priorities",
                "Opposition stance",
                "Legislative process stage",
                "Parliamentary/Congressional support",
                "State/local government impact",
                "International relations",
                "Public opinion polls",
                "Lobbying influences",
                "Electoral promises",
            ],
        },
        {
            key: "Budget-Specific Parameters",
            options: [
                "Revenue projections",
                "Spending allocations",
                "Deficit/surplus targets",
                "Debt-to-GDP ratio",
                "Emergency funds",
                "Reserve requirements",
                "Infrastructure investments",
                "Social program funding",
                "Defense spending",
                "Discretionary vs. mandatory spending",
            ],
        },
        {
            key: "Tax Policy Parameters",
            options: [
                "Tax brackets",
                "Corporate tax rates",
                "VAT/Sales tax rates",
                "Capital gains taxes",
                "Property taxes",
                "Import/Export duties",
                "Tax incentives",
                "Compliance requirements",
                "International tax agreements",
                "Tax revenue forecasts",
            ],
        },
        {
            key: "Stakeholder Impact",
            options: [
                "Business sector effects",
                "Consumer impact",
                "Income group effects",
                "Regional implications",
                "Industry-specific impact",
                "Small business considerations",
                "Foreign investor perspective",
                "Public sector employees",
                "Pensioners",
                "Special interest groups",
            ],
        },
        {
            key: "International Context",
            options: [
                "Global economic conditions",
                "Trade agreements",
                "International obligations",
                "Foreign investment impact",
                "Currency implications",
                "Competitive position",
                "Credit market access",
                "International rankings",
                "Diplomatic considerations",
                "Global standards compliance",
            ],
        },
        {
            key: "Market Reaction",
            options: [
                "Stock market response",
                "Bond market impact",
                "Currency fluctuations",
                "Sector-specific reactions",
                "Analyst opinions",
                "Rating agency responses",
                "Investment flows",
                "Market sentiment",
                "Trading volume changes",
                "Volatility indicators",
            ],
        },
        {
            key: "Implementation Factors",
            options: [
                "Administrative capacity",
                "Technology requirements",
                "Timeline feasibility",
                "Resource allocation",
                "Training needs",
                "Compliance mechanisms",
                "Enforcement capabilities",
                "Monitoring systems",
                "Reporting requirements",
                "Evaluation metrics",
            ],
        },
        {
            key: "Risk Assessment",
            options: [
                "Implementation risks",
                "Economic risks",
                "Political risks",
                "Social impacts",
                "Environmental considerations",
                "Legal challenges",
                "International reactions",
                "Market volatility",
                "Compliance issues",
                "Unintended consequences",
            ],
        },
        {
            key: "Comparative Analysis",
            options: [
                "Historical precedents",
                "International benchmarks",
                "Similar policy outcomes",
                "Alternative approaches",
                "Best practices",
                "Failed policies",
                "Success stories",
                "Regional variations",
                "Sector comparisons",
                "Policy effectiveness",
            ],
        },
        {
            key: "Technical Details",
            options: [
                "Legal framework",
                "Regulatory requirements",
                "Compliance standards",
                "Technical specifications",
                "Implementation guidelines",
                "Reporting formats",
                "Documentation needs",
                "System requirements",
                "Data management",
                "Security protocols",
            ],
        },
    ],
    // components/CategorySetup/data.ts

    "Industry-Specific Financial News": [
        {
            key: "Performance Metrics",
            options: [
                "Revenue Growth",
                "Profit Margins",
                "Market Share",
                "Customer Acquisition Cost",
                "Customer Lifetime Value",
                "Return on Investment",
                "Operational Efficiency",
                "Year-over-Year Growth",
                "Quarter-over-Quarter Performance",
                "Asset Quality/Performance",
            ],
        },
        {
            key: "Market Position",
            options: [
                "Market Leaders",
                "Emerging Players",
                "Regional Leaders",
                "Global Players",
                "Niche Specialists",
                "Innovation Leaders",
                "Traditional Players",
                "Digital-First Companies",
                "Hybrid Models",
                "Market Consolidators",
            ],
        },
        {
            key: "Regulatory Environment",
            options: [
                "Compliance Status",
                "Regulatory Changes",
                "License Requirements",
                "Consumer Protection",
                "Data Privacy",
                "Risk Management",
                "Capital Requirements",
                "Operational Guidelines",
                "Cross-border Regulations",
                "Industry Standards",
            ],
        },
        {
            key: "Technology Integration",
            options: [
                "Digital Transformation",
                "AI/ML Implementation",
                "Cloud Adoption",
                "Mobile Solutions",
                "API Integration",
                "Cybersecurity Measures",
                "Process Automation",
                "Data Analytics",
                "Platform Development",
                "Legacy System Updates",
            ],
        },
        {
            key: "Customer Experience",
            options: [
                "User Interface",
                "Service Accessibility",
                "Customer Support",
                "Personalization",
                "Digital Channels",
                "Traditional Channels",
                "Response Time",
                "Problem Resolution",
                "Customer Satisfaction",
                "Service Innovation",
            ],
        },
        {
            key: "Risk Factors",
            options: [
                "Market Risk",
                "Credit Risk",
                "Operational Risk",
                "Technology Risk",
                "Regulatory Risk",
                "Reputational Risk",
                "Competition Risk",
                "Economic Risk",
                "Environmental Risk",
                "Systemic Risk",
            ],
        },
        {
            key: "Geographic Scope",
            options: [
                "Local Operations",
                "Regional Presence",
                "National Coverage",
                "International Expansion",
                "Market Entry/Exit",
                "Cross-border Operations",
                "Urban Markets",
                "Rural Markets",
                "Emerging Markets",
                "Mature Markets",
            ],
        },
        {
            key: "Innovation Focus",
            options: [
                "Product Innovation",
                "Service Innovation",
                "Process Innovation",
                "Business Model Innovation",
                "Distribution Innovation",
                "Technical Innovation",
                "Customer Experience Innovation",
                "Risk Management Innovation",
                "Sustainable Innovation",
                "Partnership Innovation",
            ],
        },
        {
            key: "Market Dynamics",
            options: [
                "Competition Level",
                "Market Consolidation",
                "New Entrants",
                "Market Exit",
                "Partnership Formation",
                "Industry Convergence",
                "Market Disruption",
                "Demand Trends",
                "Supply Trends",
                "Pricing Trends",
            ],
        },
        {
            key: "Financial Health",
            options: [
                "Liquidity Position",
                "Capital Adequacy",
                "Debt Levels",
                "Investment Portfolio",
                "Cash Flow",
                "Asset Quality",
                "Funding Sources",
                "Cost Structure",
                "Revenue Diversification",
                "Financial Stability",
            ],
        },
        {
            key: "Environmental, Social, and Governance (ESG)",
            options: [
                "Sustainability Initiatives",
                "Social Responsibility",
                "Corporate Governance",
                "Environmental Impact",
                "Community Engagement",
                "Ethical Practices",
                "Diversity and Inclusion",
                "Stakeholder Management",
                "Transparency",
                "ESG Reporting",
            ],
        },
        {
            key: "Strategic Initiatives",
            options: [
                "Growth Strategy",
                "Digital Strategy",
                "Market Expansion",
                "Product Development",
                "Partnership Strategy",
                "Cost Optimization",
                "Customer Acquisition",
                "Talent Management",
                "Innovation Strategy",
                "Risk Management Strategy",
            ],
        },
        {
            key: "News Type",
            options: [
                "Product Launch",
                "Corporate Announcement",
                "Market Analysis",
                "Industry Report",
                "Regulatory Update",
                "Performance Report",
                "Strategy Update",
                "Partnership Announcement",
                "Research Finding",
                "Expert Opinion",
            ],
        },
        {
            key: "Stakeholder Impact",
            options: [
                "Customers",
                "Employees",
                "Shareholders",
                "Partners",
                "Regulators",
                "Industry Peers",
                "Local Communities",
                "Suppliers",
                "Investors",
                "General Public",
            ],
        },
        {
            key: "Economic Context",
            options: [
                "Market Conditions",
                "Economic Indicators",
                "Interest Rates",
                "Currency Exchange",
                "Investment Climate",
                "Consumer Confidence",
                "Business Sentiment",
                "Policy Environment",
                "Global Economic Factors",
                "Local Economic Factors",
            ],
        },
        {
            key: "Time Frame",
            options: [
                "Breaking News",
                "Daily Update",
                "Weekly Review",
                "Monthly Analysis",
                "Quarterly Report",
                "Annual Review",
                "Future Outlook",
                "Historical Analysis",
                "Short-term Impact",
                "Long-term Trends",
            ],
        },
    ],
};