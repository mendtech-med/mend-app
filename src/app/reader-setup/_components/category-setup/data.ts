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
            key: "Reader's Investment Experience",
            options: [
                "New to Investing",
                "Casual Investor",
                "Active Trader",
                "Professional Trader",
                "Institutional Investor",
                "Financial Advisor",
                "Market Analyst",
            ],
        },
        {
            key: "Market Knowledge Level",
            options: [
                "Basic Market Understanding",
                "Intermediate Market Knowledge",
                "Advanced Technical Knowledge",
                "Expert/Professional Level",
                "Academic/Research Level",
            ],
        },
        {
            key: "Investment Approach",
            options: [
                "Day Trading",
                "Swing Trading",
                "Long-term Investing",
                "Value Investing",
                "Growth Investing",
                "Income Investing",
                "Index Investing",
                "Technical Trading",
                "Fundamental Analysis",
                "Algorithmic Trading",
            ],
        },
        {
            key: "Portfolio Size",
            options: [
                "Micro ($0-$10k)",
                "Small ($10k-$50k)",
                "Medium ($50k-$250k)",
                "Large ($250k-$1M)",
                "High Net Worth ($1M-$5M)",
                "Ultra High Net Worth ($5M+)",
            ],
        },
        {
            key: "Investment Goals",
            options: [
                "Capital Preservation",
                "Income Generation",
                "Growth",
                "Aggressive Growth",
                "Speculation",
                "Retirement Planning",
                "Wealth Building",
                "Portfolio Diversification",
            ],
        },
        {
            key: "Market Segments of Interest",
            options: [
                "Blue Chip Stocks",
                "Growth Stocks",
                "Penny Stocks",
                "Dividend Stocks",
                "Government Bonds",
                "Corporate Bonds",
                "Municipal Bonds",
                "ETFs",
                "Mutual Funds",
                "Options",
                "Futures",
                "Forex",
                "Cryptocurrencies",
                "Commodities",
                "Real Estate Securities",
            ],
        },
        {
            key: "Industry Focus",
            options: [
                "Technology",
                "Healthcare",
                "Financial Services",
                "Consumer Goods",
                "Industrial",
                "Energy",
                "Materials",
                "Real Estate",
                "Utilities",
                "Communications",
                "Transportation",
            ],
        },
        {
            key: "Trading Volume",
            options: [
                "Technology",
                "Healthcare",
                "Financial Services",
                "Consumer Goods",
                "Industrial",
                "Energy",
                "Materials",
                "Real Estate",
                "Utilities",
                "Communications",
                "Transportation",
            ],
        },
        {
            key: "Geographic Interest",
            options: [
                "US Markets",
                "European Markets",
                "Asian Markets",
                "Emerging Markets",
                "Global Markets",
                "Domestic Only",
                "International Only",
                "Regional Focus",
            ],
        },
        {
            key: "Trading Frequency",
            options: [
                "Daily Trading",
                "Weekly Trading",
                "Monthly Trading",
                "Quarterly Rebalancing",
                "Annual Review",
                "Buy and Hold",
            ],
        },
        {
            key: "Risk Tolerance",
            options: [
                "Very Conservative",
                "Conservative",
                "Moderate",
                "Aggressive",
                "Very Aggressive",
                "Risk Arbitrage",
            ],
        },
        {
            key: "Time Availability",
            options: [
                "Full-time Trader",
                "Part-time Active",
                "Evening Researcher",
                "Weekend Analyst",
                "Periodic Review",
                "Passive Observer",
            ],
        },
    ],

    "Corporate Finance News": [
        {
            key: "Industry Focus",
            options: [
                "Banking & Financial Services",
                "Technology & Software",
                "Healthcare & Pharmaceuticals",
                "Manufacturing & Industrial",
                "Consumer Goods & Retail",
                "Energy & Utilities",
                "Real Estate & Construction",
                "Transportation & Logistics",
                "Media & Entertainment",
                "Telecommunications",
            ],
        },
        {
            key: "Reader Role",
            options: [
                "C-Suite Executive",
                "Financial Analyst",
                "Investment Banker",
                "Corporate Finance Manager",
                "Business Development Manager",
                "Risk Manager",
                "Treasury Professional",
                "Management Consultant",
                "Strategy Director",
                "Institutional Investor",
            ],
        },
        {
            key: "Company Size",
            options: [
                "Startup/Early Stage",
                "Small Cap ($300M-$2B)",
                "Mid Cap ($2B-$10B)",
                "Large Cap ($10B-$200B)",
                "Mega Cap ($200B+)",
                "Private Companies",
                "Pre-IPO Companies",
                "Public Companies",
                "Multinational Corporations",
                "Small & Medium Enterprises",
            ],
        },
        {
            key: "Professional Expertise",
            options: [
                "Entry Level (0-2 years)",
                "Junior (2-5 years)",
                "Mid-Level (5-10 years)",
                "Senior (10-15 years)",
                "Executive (15+ years)",
                "Subject Matter Expert",
                "Generalist",
                "Specialist",
                "Academic/Research",
                "Advisory",
            ],
        },
        {
            key: "Business Interest",
            options: [
                "Mergers & Acquisitions",
                "Capital Markets",
                "Private Equity",
                "Venture Capital",
                "Investment Strategy",
                "Risk Management",
                "Corporate Strategy",
                "Market Analysis",
                "Financial Operations",
                "Regulatory Compliance",
            ],
        },
        {
            key: "Decision-Making Level",
            options: [
                "Strategic Planning",
                "Investment Decisions",
                "Operational Decisions",
                "Risk Assessment",
                "Policy Making",
                "Advisory Role",
                "Research & Analysis",
                "Implementation",
                "Monitoring & Control",
                "Performance Evaluation",
            ],
        },
        {
            key: "Geographic Interest",
            options: [
                "Domestic Markets",
                "International Markets",
                "Emerging Markets",
                "Developed Markets",
                "Regional Focus",
                "Global Operations",
                "Cross-border Transactions",
                "Market Entry",
                "Geographic Expansion",
                "Local Markets",
            ],
        },
        {
            key: "Business Objective",
            options: [
                "Growth & Expansion",
                "Cost Optimization",
                "Market Entry",
                "Risk Mitigation",
                "Performance Improvement",
                "Investment Opportunities",
                "Competitive Analysis",
                "Regulatory Understanding",
                "Strategic Partnerships",
                "Innovation & Technology",
            ],
        },
    ],
};