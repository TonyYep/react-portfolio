// Single source of truth: keep this file aligned with the resume.
// If anything here drifts from the public resume, fix this file first.

export const profile = {
  name: "Tony Chan",
  title: "Data Analyst",
  company: "Stackline",
  location: "Bay Area / Seattle",
  tagline:
    "Data analyst at Stackline building forecasting, pipelines, and clustering systems. UC Berkeley Data Science, May 2025.",
  email: "tonychan0313@berkeley.edu",
  interestedRoles: [
    "Data Analyst",
    "Data Engineer",
    "Data Scientist",
    "ML Engineer",
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/tonyyep/",
    github: "https://github.com/TonyYep",
  },
} as const;

export const education = [
  {
    school: "University of California, Berkeley",
    degree: "B.A. Data Science",
    dates: "Aug 2023 – May 2025",
    emphasis:
      "Domain emphasis in Business and Industrial Analytics. Certificate in Entrepreneurship & Technology (SCET).",
    activities: [
      "Cal Lion Dance (Music Coordinator)",
      "Data Scholars",
      "Data Science Discovery Research",
      "Sushi Hackathon",
    ],
    coursework: [
      "Data Engineering",
      "Time Series",
      "Experimental Design",
      "Deep Neural Networks",
      "Linear Programming & Network Flows",
      "Machine Learning",
      "Experimental Design for Machine Learning",
      "LLM Agents",
    ],
  },
  {
    school: "University of California, Santa Barbara",
    degree: "Financial Mathematics and Statistics — Honors",
    dates: "Previous coursework",
    emphasis:
      "Earlier coursework before transferring to Berkeley.",
    activities: [],
    coursework: [
      "Hypothesis Testing",
      "Regression Analysis",
      "Probability & Statistics",
      "Stochastic Processes",
      "Real Analysis",
    ],
  },
] as const;

export const experience = [
  {
    slug: "stackline",
    company: "Stackline",
    role: "Data Analyst",
    dates: "Jul 2025 – May 2026",
    bullets: [
      "Developed forecast models, compute/publish pipelines, backfill processes, and audit processes.",
      "Overhauled old DAGs from Airflow 1.10.X to Airflow 2.10.X (AWS MWAA), saving 700+ hours in weekly runtime.",
      "Developed product clustering pipeline using embeddings and community detection (Leiden / Louvain).",
    ],
    stack: [
      "Python",
      "Scala",
      "Spark",
      "SQL",
      "Elasticsearch",
      "AWS",
      "Airflow",
      "Forecasting",
      "Graph algorithms",
    ],
    headline: "700+ hours/wk runtime saved",
  },
  {
    slug: "contextqa",
    company: "ContextQA",
    role: "Machine Learning Intern",
    dates: "May 2024 – Aug 2024",
    bullets: [
      "Developed a graph-based system for web QA test-case storage, visualization, and impact analysis.",
      "Automated end-to-end test-case generation via graph with the ChatGPT API to optimize QA testing.",
      "Developed an auto-healing feature to preserve test-case integrity when handling site updates/upgrades.",
    ],
    stack: ["Python", "OpenAI API", "Graphs", "QA Automation"],
    headline: "Graph-based test-case automation",
  },
  {
    slug: "breakinghits",
    company: "BreakingHits",
    role: "Machine Learning Consultant Intern",
    dates: "Nov 2023 – May 2024",
    bullets: [
      "Built auto-classifier models on a public dataset using CNN, Hugging Face Transformers, and LSTM.",
      "Utilized Wav2Vec 2.0, HuBERT, and DistilHuBERT for feature extraction, tokenization, and classification.",
      "Performed exploratory data analysis and visualization on multiple public audio datasets on GitHub.",
    ],
    stack: ["PyTorch", "Hugging Face", "CNN/LSTM", "Audio ML"],
    headline: "Audio classification with transformer models",
  },
] as const;

// Each project carries any number of external artifact links (papers, slides,
// award pages, repos). Cards adapt to whatever is present.
type ProjectLink = { label: string; url: string };

export const projects = [
  {
    slug: "grape-data",
    title: "Grape Data",
    subtitle: "Data Science Discovery — Researcher",
    award: "Cloud Computing Application Award · 2024 Spring Symposium",
    stack: ["Python", "OpenAI API", "GCP", "Sentiment Analysis"],
    summary:
      "Built a data pipeline for surveys with 10,000+ responses — cleaning, visualization, analysis, sentiment analysis, and statistical insight generation via fine-tuned GPT models.",
    metric: { value: "10,000+", label: "survey responses processed" },
    links: [
      {
        label: "Award",
        url: "https://cdss.berkeley.edu/data-impact-data-science-discovery-celebrates-nine-years-groundbreaking-student-research",
      },
      {
        label: "View Poster",
        url: "https://docs.google.com/drawings/d/1-unroiBIy_L-CYMvGBMykxe0VqDzpLXoAKum7QDUVMA/edit?usp=drive_link",
      },
    ] satisfies ProjectLink[],
  },
  {
    slug: "llm-agents",
    title: "LLM Agents MOOC Hackathon",
    subtitle: "Multimodal Augmentation Pipeline",
    award: null,
    stack: ["OpenAI", "Multimodal LLMs", "Image inpainting", "COCO"],
    summary:
      "Built a pipeline to augment the COCO visual dataset using multimodal LLM agents — semantic image patches, image inpainting, descriptive prompts, and editing boxes.",
    metric: { value: "Multimodal", label: "agent benchmark pipeline" },
    links: [] satisfies ProjectLink[],
  },
  {
    slug: "election-polls",
    title: "Election Poll Analytics, 2016–2020",
    subtitle: "Statistical Inference Report",
    award: null,
    stack: ["R", "R-Markdown", "dplyr", "Linear Regression"],
    summary:
      "Applied statistical inference — linear modeling, hypothesis testing, and visual analysis — to state-level poll results, producing predictions and demographic insights with statistically significant conclusions.",
    metric: { value: "2 cycles", label: "of US election poll data" },
    links: [
      {
        label: "Read the report",
        url: "https://drive.google.com/file/d/1SAVsurA9IcZNFt8UIwW3OXuziHLR9T9j/view?usp=sharing",
      },
    ] satisfies ProjectLink[],
  },
  {
    slug: "ebay-ner",
    title: "eBay 2023 ML Competition — German NER",
    subtitle: "Named-Entity Recognition for Listing Titles",
    award: null,
    stack: ["Keras", "BiRNNs", "Hugging Face", "NLP"],
    summary:
      "Built a Named Entity Recognition model to label German eBay shoe-listing titles. Bidirectional RNN architecture with transformer-based tokenization.",
    metric: { value: "72%", label: "token-level accuracy" },
    links: [] satisfies ProjectLink[],
  },
  {
    slug: "summative-research",
    title: "Summative Research Paper",
    subtitle: "Cox Proportional-Hazard Models · Biometrika / Biostatistics",
    award: null,
    stack: ["LaTeX", "Statistical Inference", "Cox Hazard", "Survival Analysis"],
    summary:
      "Summative paper covering approximated-partial / surrogate likelihood, score functions, asymptotic analysis, and (un)stratified models — using summary-level statistics to address heterogeneity across medical data centers.",
    metric: { value: "Cox PH", label: "stratified survival models" },
    links: [
      {
        label: "Read the paper",
        url: "https://drive.google.com/file/d/1deZqaOPoZb9gquRK_kiS88A1J6g6mgVp/view?usp=sharing",
      },
    ] satisfies ProjectLink[],
  },
] as const;

export const skills = {
  languages: ["Python", "Scala", "SQL", "R", "C++"],
  mlData: [
    "PyTorch",
    "Keras",
    "Hugging Face",
    "Pandas",
    "NumPy",
    "SK-Learn",
    "OpenAI API",
    "Seaborn",
  ],
  cloudInfra: [
    "AWS (MWAA, Redshift, EMR, Batch, S3)",
    "Airflow",
    "Spark",
    "Elasticsearch",
    "BigQuery",
    "PostgreSQL",
    "MongoDB",
    "Doris",
    "SQS",
  ],
  methods: [
    "Forecasting",
    "Time Series",
    "Regression",
    "Statistical Inference",
    "Hypothesis Testing",
    "A/B Testing",
    "Experimental Design",
    "Bootstrapping",
    "PCA",
    "Computer Vision",
    "NLP",
    "Community Detection",
    "Graphs",
    "Linear Programming",
    "Data Engineering / Pipelines",
  ],
} as const;

// Skills mapped to the 6 cube faces — chosen for visual diversity
export const cubeSkills = [
  {
    key: "python",
    label: "Python",
    icon: "code",
    color: "#ffd700",
    detail:
      "Daily driver for data pipelines, ML work, and CLI tooling. Pandas and Polars for dataframes, Pydantic for schema validation, PyArrow for columnar IO, and a strong bias toward typed, testable code (mypy + pytest).",
  },
  {
    key: "sql",
    label: "SQL",
    icon: "database",
    color: "#ffd700",
    detail:
      "Comfortable across Redshift, PostgreSQL, and BigQuery. Window functions, recursive CTEs, distribution-key tuning on columnar warehouses, and full-outer-join audit patterns for tracing data lineage between pipeline runs.",
  },
  {
    key: "aws",
    label: "AWS",
    icon: "cloud",
    color: "#ffd700",
    detail:
      "MWAA for Airflow orchestration, EMR + Spark for distributed compute, Batch for embarrassingly parallel ML (think 10k+ jobs per run), Redshift for warehouse, S3 for raw data, CloudWatch for observability when something inevitably breaks at 3am.",
  },
  {
    key: "spark",
    label: "Spark / Scala",
    icon: "flame",
    color: "#ffd700",
    detail:
      "Scala 2.11 / Spark 2.4 for distributed forecasting and TB-scale ETL. Catalyst-optimized DataFrames, broadcast joins for star schemas, partition-aware time series modeling, and the occasional fight with JVM heap sizing.",
  },
  {
    key: "ml",
    label: "ML / Deep Learning",
    icon: "brain",
    color: "#ffd700",
    detail:
      "PyTorch for custom models, Hugging Face transformers for NLP backbones, CNN/BiLSTM for sequence labeling like NER, and graph-based clustering (Leiden/Louvain) on text embeddings. Big fan of when a pretrained model and a clever embedding space replaces 500 lines of rules.",
  },
  {
    key: "stats",
    label: "Statistics",
    icon: "chart-line",
    color: "#ffd700",
    detail:
      "Regression, hypothesis testing, A/B test power analysis, Cox proportional-hazards for survival modeling, bootstrap confidence intervals, and experimental design. Foundation from UCSB Honors Stats — the kind that makes you question every p-value you read.",
  },
] as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
] as const;

// Outside-work hobbies displayed on the About page. Drop image files into
// /public/images/hobbies/ matching the `src` paths below.
// Edit / reorder / extend this array freely — the About page renders whatever's here.
export const hobbies = [
  { name: "Golf",         src: "/images/hobbies/golf.png" },
  { name: "Pickleball",   src: "/images/hobbies/pickleball.png" },
  { name: "Climbing",     src: "/images/hobbies/climbing.png" },
  { name: "Lion Dance",   src: "/images/hobbies/lion-dance.png" },
  { name: "Dragon Boat",  src: "/images/hobbies/dragon-boat.png" },
] as const;
