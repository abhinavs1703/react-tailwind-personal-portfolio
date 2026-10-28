export const profile = {
  name: "Abhinav Srivastava",
  role: "Software · AI and machine learning · Analytics · Automation · Cloud",
  location: "Gurugram, India",
  email: "abhisritannu@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhinavsrivastava1703/",
  github: "https://github.com/abhinavs1703",
};

export const capabilities = [
  { number: "01", title: "Make data dependable", description: "Clean, validate, transform, and model data so analysis starts from something trustworthy—not a spreadsheet full of assumptions.", tools: "Python · SQL · Pandas · NumPy · Power Query" },
  { number: "02", title: "Turn analysis into decisions", description: "Build KPI definitions, anomaly checks, and reporting views that help people understand what changed and where to investigate next.", tools: "CTEs · Window functions · DAX · Power BI · Excel" },
  { number: "03", title: "Connect the repetitive steps", description: "Link data, files, AI-assisted drafting, reporting, and delivery into workflows that are easier to run, audit, and maintain.", tools: "Python · APIs · Make.com · Puppeteer · GitHub Actions" },
  { number: "04", title: "Put models to practical use", description: "Build and evaluate machine-learning workflows, then connect the selected model to a usable application or deployment path.", tools: "Scikit-learn · LightGBM · NLP · AWS SageMaker · OpenCV" }
];

export const projects = [
  {
    id: "kpi-monitoring", number: "01", title: "Operational KPI Monitoring & Anomaly Detection", category: "Data & BI", year: "2025",
    summary: "A repeatable monitoring workflow for industrial time-series data, designed to make operational changes easier to detect and investigate.",
    challenge: "Operational records need more than a dashboard. Data must be prepared consistently, metrics must be comparable, and unusual values need to be visible to the people reviewing performance.",
    approach: "Built SQL transformations with CTEs, joins, aggregations, window functions, and LAG/LEAD. Applied Z-score and IQR methods to flag unusual values, then presented results in a five-page Power BI dashboard.",
    outcomes: [{ value: "10K+", label: "daily time-series records" }, { value: "6", label: "operational dimensions" }, { value: "12+", label: "defined KPIs" }, { value: "35%", label: "less manual monitoring effort" }],
    stack: ["SQL", "Python", "Pandas", "NumPy", "Power BI", "DAX"], image: "/projects/project2.png", imageAlt: "Project visual for operational KPI monitoring", visualType: "image", link: null, linkLabel: null
  },
  {
    id: "executive-reporting", number: "02", title: "Automated Executive PDF Reporting System", category: "Automation", year: "2026",
    summary: "A reporting pipeline that takes weekly SQL metrics through charting and template rendering to a generated PDF delivered by email.",
    challenge: "Recurring reports can involve manual hand-offs between metric extraction, formatting, chart creation, PDF export, and distribution.",
    approach: "Aggregated metrics with SQL, passed results as JSON into Handlebars templates, rendered Chart.js visualisations, used Puppeteer to generate a PDF, and attached it to a SendGrid email. Each stage stayed separate for easier debugging and extension.",
    outcomes: [{ value: "SQL", label: "metric aggregation" }, { value: "HTML", label: "templated report" }, { value: "PDF", label: "automated output" }, { value: "Email", label: "delivery stage" }],
    stack: ["SQL", "JavaScript", "Handlebars", "Chart.js", "Puppeteer", "SendGrid"], visualType: "pipeline", flow: ["SQL metrics", "JSON", "HTML + charts", "PDF", "Email"], link: "https://github.com/abhinavs1703/Automated-Executive-PDF-Reporting-System", linkLabel: "Open repository"
  },
  {
    id: "car-sales", number: "03", title: "Automotive Car Sales Analytics Platform", category: "Data & BI", year: "2024",
    summary: "A business-intelligence workflow for exploring automotive sales across regions, tracking performance, and reducing recurring reporting effort.",
    challenge: "Sales reporting needs a stable data model and clearly defined measures before year-on-year growth, market share, and sales movement can be compared.",
    approach: "Prepared datasets from automotive sales records using SQL joins and aggregations, Power Query transformations, and data modelling. Created DAX measures for year-on-year growth, market share, sales velocity, and forecast deviation.",
    outcomes: [{ value: "50K+", label: "sales records" }, { value: "12", label: "regional markets" }, { value: "15+", label: "DAX measures" }, { value: "40%", label: "less manual reporting effort" }],
    stack: ["SQL", "Power Query", "Power BI", "DAX", "Data modelling"], image: "/projects/project3.png", imageAlt: "Project visual for automotive sales analytics", visualType: "image", link: "https://github.com/abhinavs1703/car-sales-dashboard-powerbi", linkLabel: "Open repository"
  },
  {
    id: "recruitment-automation", number: "04", title: "AI-Assisted Recruitment Outreach Automation", category: "Automation", year: "2026",
    summary: "A connected workflow for matching lead records to stored résumés, drafting tailored outreach, sending messages, and recording status.",
    challenge: "Personalised outreach involves switching between lead sheets, stored files, message drafting, email delivery, and status tracking.",
    approach: "Connected Google Sheets lead records with matching résumés in Google Drive, sent relevant context to Grok for a draft, delivered messages through the connected email account, and wrote the send status back to the source lead row.",
    outcomes: [{ value: "01", label: "lead intake" }, { value: "02", label: "résumé retrieval" }, { value: "03", label: "AI-assisted draft" }, { value: "04", label: "send + status" }],
    stack: ["Make.com", "Grok", "Google Sheets", "Google Drive", "Email automation"], visualType: "pipeline", flow: ["Lead row", "Résumé match", "Draft", "Send", "Status update"], link: null, linkLabel: null
  },
  {
    id: "cicd-pipeline", number: "05", title: "CI/CD Testing & Deployment Pipeline", category: "Engineering", year: "2026",
    summary: "A gated release process that stops on test failure and proceeds to image publishing and server restart only after checks pass.",
    challenge: "A deployment workflow should not ship an image or restart a service when its preceding validation stage has failed.",
    approach: "Automated checkout, dependency installation, and tests with GitHub Actions. On success, the workflow authenticates to a Docker registry, builds and pushes an image, and sends a webhook to restart the server. Failure handling and team notification were included.",
    outcomes: [{ value: "Test", label: "before release" }, { value: "Build", label: "Docker image" }, { value: "Push", label: "registry" }, { value: "Deploy", label: "webhook restart" }],
    stack: ["GitHub Actions", "Docker", "Git", "Webhooks", "CI/CD"], visualType: "pipeline", flow: ["Checkout", "Install + test", "Build image", "Push image", "Deploy hook"], link: "https://github.com/abhinavs1703/ci-cd-testing-deployment-pipeline", linkLabel: "Open repository"
  },
  {
    id: "crop-recommendation", number: "06", title: "Crop Recommendation System", category: "AI & ML", year: "2024",
    summary: "A machine-learning workflow comparing classification models and serving crop recommendations from soil and environmental inputs.",
    challenge: "The workflow needs to compare candidate models against the same features and provide a practical path from measurements to a recommendation.",
    approach: "Compared Random Forest and LightGBM using nitrogen, phosphorus, potassium, pH, temperature, and moisture inputs. Connected the selected model to a web prediction workflow and deployed the ML system using AWS SageMaker, EC2, and S3.",
    outcomes: [{ value: "2", label: "models compared" }, { value: "6", label: "input features" }, { value: "AWS", label: "deployment services" }],
    stack: ["Python", "Random Forest", "LightGBM", "SageMaker", "EC2", "S3"], image: "/projects/project4.png", imageAlt: "Project visual for the crop recommendation system", visualType: "image", link: null, linkLabel: null
  },
  {
    id: "disaster-response", number: "07", title: "Disaster Response & Edge Computer Vision", category: "AI & ML", year: "2024–25",
    summary: "A coordinated response concept combining live operational status with on-device object detection for a disaster-management workflow.",
    challenge: "A response cycle has dependent stages: detection, dispatch, live updates, workforce coordination, extraction confirmation, and base acknowledgement.",
    approach: "Used React, Mapbox, Supabase Realtime, and Python to coordinate status between stages. Developed the computer-vision component using YOLOv8 and OpenCV, with edge inference on NVIDIA Jetson Xavier NX and visual, thermal, and LiDAR inputs.",
    outcomes: [{ value: "₹25L", label: "VIT institutional research grant" }, { value: "93.5%", label: "reported precision" }, { value: "94.2%", label: "reported recall" }, { value: "<50 ms", label: "reported inference time" }],
    stack: ["React", "Python", "Supabase Realtime", "YOLOv8", "OpenCV", "Jetson Xavier NX"], visualType: "pipeline", flow: ["Detect", "Dispatch", "Live status", "Coordinate", "Confirm"], link: null, linkLabel: null
  },
  {
    id: "fare-tracker", number: "08", title: "Live Fare Tracker — Product Concept", category: "Product", year: "2026",
    summary: "An interface concept that makes a ride price easier to understand by showing how the fare is composed, not just the final total.",
    challenge: "When a ride fare changes, a single total can leave people unclear about how distance, time, waiting, tolls, and surge conditions contributed.",
    approach: "Designed 12+ high-fidelity Android screens and an approximately 90-second After Effects demonstration to show fare components in the user journey and explain price changes in context.",
    outcomes: [{ value: "12+", label: "high-fidelity screens" }, { value: "~90 sec", label: "motion demonstration" }, { value: "5", label: "fare components explored" }],
    stack: ["Product requirements", "Figma", "Android UI", "After Effects"], image: "/projects/project1.png", imageAlt: "Visual from the live fare tracker concept", visualType: "image", link: "https://spruce-fade-73739059.figma.site/", linkLabel: "Explore prototype"
  }
];

export const experience = {
  role: "Engineering Intern", company: "Tata Cummins Ltd.", location: "Jamshedpur, Jharkhand, India", year: "2025",
  description: "Worked with industrial IoT telemetry and operational reporting, from reliable data preparation to anomaly investigation and communication of findings.",
  contributions: [
    "Built Python and SQL ETL workflows to clean, validate, and transform 10,000+ telemetry records, reducing manual data-preparation effort by 60%.",
    "Used SQL joins, aggregations, and window functions, with data-quality checks across six operational dimensions.",
    "Applied threshold- and pattern-based anomaly detection to flag unusual telemetry behaviour for investigation.",
    "Automated recurring KPI reports and communicated findings to engineering and management stakeholders."
  ]
};

export const education = {
  institution: "Vellore Institute of Technology",
  degree: "B.Tech, Electrical and Electronics Engineering",
  period: "September 2022 – June 2026",
  result: "CGPA 8.0 / 10.0"
};