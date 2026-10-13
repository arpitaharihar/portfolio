export const personalInfo = {
  name: "Arpita Harihar",
  role: "Data Analytics · Power BI · SQL · Python · Tableau",
  ledeHeadline: "I turn raw business data into ",
  ledeHighlight: "dashboards and insights",
  ledeSuffix: " that help teams decide what to stock, sell and fix next.",
  email: "arpitaharihar@gmail.com",
  linkedin: "https://linkedin.com/in/arpita-harihar",
  github: "https://github.com/arpitaharihar",
  resumeFileName: "Arpita_Harihar_Resume.pdf"
};

export const heroKpis = {
  fileName: "FNP_Sales_Dashboard.xlsx",
  items: [
    { value: "₹95,468", label: "Total revenue" },
    { value: "34", label: "Customer orders" },
    { value: "₹2,807.88", label: "Average spend" },
    { value: "5.47 hrs", label: "Avg delivery time" }
  ],
  note: "Figures from my FNP Sales Analysis dashboard in Excel."
};

export const aboutData = {
  heading: "I like the business question as much as the query.",
  paragraphs: [
    "I'm Arpita Harihar, a B.Tech Computer Engineering student at Savitribai Phule Pune University with a strong interest in data analytics, data modeling, and business intelligence.",
    "I clean messy datasets, design ETL/ELT pipelines, write advanced SQL (CTEs, Window Functions, Joins), and build interactive dashboards in Power BI, Tableau, and Excel (Power Query, XLOOKUP) so that managers can filter, compare, and act without waiting for a report.",
    "My projects cover e-commerce sales, customer shopping behavior, retail gift distribution, entertainment streaming metrics, and NGO volunteer tracking. In each one I started from a decision someone needed to make, then worked back to the data."
  ],
  facts: [
    {
      title: "Education",
      desc: "B.Tech, Computer Engineering",
      sub: "Savitribai Phule Pune University · CGPA 7.78"
    },
    {
      title: "Experience",
      desc: "Power BI Intern",
      sub: "Microsoft Elevate × AICTE · Feb – Mar 2026"
    },
    {
      title: "Recognition",
      desc: "2nd Prize, Power BI Workshop",
      sub: "GDG · 2025"
    },
    {
      title: "Languages",
      chips: ["English", "Hindi", "Marathi"]
    }
  ]
};

export const projects = [
  {
    id: "ecommerce-sales-analysis",
    category: "Sales & revenue",
    year: "2026",
    title: "Ecommerce Sales Analysis",
    shortDescription: "Evaluated customer purchasing habits, product tiering, and monthly revenue trends using MySQL and Power BI.",
    description: "Analyzed e-commerce sales data using MySQL and Power BI to evaluate revenue trends, customer purchasing habits, and product performance. Wrote structured SQL queries (Joins, CTEs, Aggregations) to clean data, identify high-value customer cohorts, and model sales relationships. Built an interactive Power BI dashboard with dynamic filters and DAX measures.",
    highlights: [
      "Designed dynamic DAX measures for monthly revenue growth and sales-to-quantity velocity",
      "Wrote complex SQL queries with CTEs and Joins to segment high-value customer cohorts",
      "Created regional filters and product category performance matrices"
    ],
    chips: ["MySQL", "Power BI", "DAX", "Data Modeling", "KPI Reporting"],
    outcome: "Tracks monthly sales, regional revenue, and sales-to-quantity trends to support inventory management and marketing decisions.",
    githubUrl: "https://github.com/arpitaharihar/Ecommerce-Sales-Analysis"
  },
  {
    id: "customer-behavior-analysis",
    category: "Customer analytics",
    year: "2026",
    title: "Customer Behavior Analysis",
    shortDescription: "End-to-end customer shopping behavior and retention analysis using Python, Jupyter, MySQL, and Power BI.",
    description: "An end-to-end data analytics and customer segmentation project studying shopping patterns, demographic trends, and retention rates. Cleaned raw data in Jupyter Notebook using Python (Pandas, NumPy), removed duplicates, performed data validation, and aggregated metrics in MySQL with structured SQL queries.",
    highlights: [
      "Conducted extensive data cleaning and outlier handling in Jupyter with Pandas and NumPy",
      "Created cohort retention analysis and demographic distribution queries in MySQL",
      "Visualized customer lifetime value and churn risk factors in an interactive Power BI dashboard"
    ],
    chips: ["Python", "Pandas", "NumPy", "MySQL", "Power BI", "Data Validation"],
    outcome: "Delivered a Power BI dashboard with KPI cards and trend charts that turns customer behavior patterns into clear, actionable next steps.",
    githubUrl: "https://github.com/arpitaharihar/Customer-Behavior-Analysis"
  },
  {
    id: "netflix-movie-data-analysis",
    category: "Entertainment & Streaming Analytics",
    year: "2026",
    title: "Netflix Movie Data Analysis",
    shortDescription: "Exploratory data analysis of Netflix movies and TV shows catalog uncovering release trends, ratings, and genre shares.",
    description: "Comprehensive exploratory data analysis (EDA) of Netflix's catalog of movies and TV shows. Cleaned messy metadata, parsed release dates, handled missing casts and directors with Python (Pandas), and visualized content growth, rating distributions, and top content-producing countries using Matplotlib and Seaborn.",
    highlights: [
      "Handled null values, parsed dates, and extracted duration metrics with Python Pandas",
      "Analyzed movie vs. TV show ratio and release velocity over the past two decades",
      "Visualized rating classifications, top content-producing nations, and seasonal addition trends"
    ],
    chips: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook", "EDA"],
    outcome: "Generated visual insights on movie vs. TV show splits, optimal launch months, runtime patterns, and global production share.",
    githubUrl: "https://github.com/arpitaharihar/Netflix-Movie-Data-Analysis"
  },
  {
    id: "fnp-sales-analysis",
    category: "Retail dashboard",
    year: "2026",
    title: "FNP Sales Analysis",
    shortDescription: "Interactive Excel sales dashboard for Ferns N Petals analyzing ₹95,468 in revenue across 34 orders with custom slicers.",
    description: "An interactive Microsoft Excel sales dashboard for Ferns N Petals (FNP) covering ₹95,468 in revenue across 34 customer orders. Built with Power Query, Pivot Tables, Pivot Charts, and custom formulas (XLOOKUP / VLOOKUP), with interactive slicers to analyze sales peaks, peak ordering hours, and regional performance.",
    highlights: [
      "Calculated key retail metrics: ₹2,807.88 average customer spend and 5.47-hour delivery window",
      "Modeled order data using Excel Power Query, Pivot Tables, and dynamic XLOOKUP formulas",
      "Implemented interactive date and city slicers to uncover peak ordering hours and top-selling gifts"
    ],
    chips: ["Excel", "Pivot Tables", "Power Query", "XLOOKUP / VLOOKUP", "Slicers"],
    outcome: "Highlights sales peaks in February and August, peak ordering hours, top-selling gifts, and top revenue cities to guide sales and inventory planning.",
    githubUrl: "https://github.com/arpitaharihar/FNP-Sales-Analysis"
  },
  {
    id: "ngo-volunteer-dashboard",
    category: "Social impact",
    year: "2025",
    title: "NGO Volunteer Analytics Dashboard",
    shortDescription: "Power BI management dashboard tracking volunteer skill distribution, training completion, and availability across districts.",
    description: "A Power BI dashboard for NGO managers to track volunteer participation, skill distribution, and district locations. Cleaned and formatted Excel/CSV datasets to evaluate volunteer training completion rates, availability schedules, and satisfaction ratings across experience levels.",
    highlights: [
      "Engineered district-level map visualizers and gender/skill cross-filtering slicers",
      "Processed multi-source Excel/CSV datasets with data validation checks",
      "Built availability schedules and training completion KPI monitors for field coordinators"
    ],
    chips: ["Power BI", "Excel", "CSV", "DAX", "Dashboard Development"],
    outcome: "District map visuals, data tables, and interactive gender/name slicers help administrators assign tasks effectively, balance workloads, and improve team management.",
    githubUrl: "https://github.com/arpitaharihar/NGO-Volunteer-Dashboard"
  }
];

export const techStack = [
  {
    title: "Programming & Analysis",
    subtitle: "Core code & query engines",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SQL (Joins, CTEs, Window Functions, Aggregations)",
      "C++",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "Databases & Warehousing",
    subtitle: "Data persistence & cloud storage",
    items: [
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "Relational Modeling",
      "Query Optimization"
    ]
  },
  {
    title: "Analytics & Visualization",
    subtitle: "BI dashboards & business reporting",
    items: [
      "Power BI",
      "Tableau",
      "Excel (Pivot Tables, VLOOKUP/XLOOKUP, Power Query)",
      "DAX",
      "Matplotlib",
      "Seaborn"
    ]
  },
  {
    title: "Data Processes",
    subtitle: "Pipeline lifecycle & data governance",
    items: [
      "ETL/ELT",
      "Data Cleaning",
      "Data Modeling",
      "KPI Reporting",
      "Dashboard Development",
      "Data Validation"
    ]
  },
  {
    title: "Tools & Workflow",
    subtitle: "Development environments & version control",
    items: [
      "Jupyter Notebook",
      "Git",
      "GitHub",
      "VS Code",
      "PyCharm",
      "IntelliJ IDEA",
      "Apache NetBeans"
    ]
  }
];

export const focusAreas = [
  {
    title: "Data cleaning",
    desc: "Removing duplicates, handling missing values and reshaping Excel, CSV and database data so the analysis is reliable.",
    chips: ["Python", "Pandas", "Excel"]
  },
  {
    title: "SQL analysis",
    desc: "Structured queries that calculate business metrics, rank product categories and surface high-value customers.",
    chips: ["MySQL", "Aggregation"]
  },
  {
    title: "Dashboards & reporting",
    desc: "Interactive dashboards with KPI cards, DAX measures, slicers and maps that managers can explore on their own.",
    chips: []
  }
];

export const workflowSteps = [
  {
    step: 1,
    title: "Clean",
    desc: "Remove duplicates and handle missing values in the raw data.",
    tools: "Pandas · NumPy"
  },
  {
    step: 2,
    title: "Aggregate",
    desc: "Calculate key performance metrics with structured SQL.",
    tools: "MySQL"
  },
  {
    step: 3,
    title: "Visualize",
    desc: "Build KPI cards, trend charts and filters people can use.",
    tools: "Power BI · DAX"
  },
  {
    step: 4,
    title: "Recommend",
    desc: "Turn what the dashboard shows into actions for inventory, marketing and retention.",
    tools: "Insights"
  }
];

export const journeyTimeline = [
  {
    when: "Feb 2026 – Mar 2026",
    role: "Power BI Intern",
    where: "Microsoft Elevate × AICTE",
    body: "Completed a 4-week internship on Power BI for business applications: cleaning, modeling and visualizing data for strategic decision-making."
  },
  {
    when: "2023 – Present",
    role: "B.Tech in Computer Engineering",
    where: "Savitribai Phule Pune University · CGPA 7.78",
    body: "Building a computer engineering foundation while focusing on data analytics, databases, and visualization through hands-on projects, workshops, and industry certifications."
  },
  {
    when: "2023",
    role: "Higher Secondary (HSC)",
    where: "Maharashtra State Board · 66.67%",
    body: "Completed higher secondary education with a science and mathematics focus."
  },
  {
    when: "2021",
    role: "Secondary School (SSC)",
    where: "Maharashtra State Board · 87.60%",
    body: "Graduated with distinction across foundational academic subjects."
  }
];

export const certifications = [
  { title: "Power BI Workshop, 2nd Prize", issuer: "GDG 2025", win: true },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte", win: false },
  { title: "SQL", issuer: "Simplilearn", win: false },
  { title: "Data Visualization", issuer: "TATA · Forage", win: false },
  { title: "Excel", issuer: "Oneroadmap", win: false },
  { title: "Data Fundamentals", issuer: "IBM", win: false }
];
