
export interface SkillType {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

export interface ProjectType {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
  githubLink?: string;
  highlights: string[];
}

export interface SocialLinkType {
  name: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Mukesh Cheemakurthi",
  title: "Software Engineer",
  location: "Boston, MA",
  email: "cheemakurthi.m@northeastern.edu",
  phone: "+1 (716) 418 9488",
  availability: "Available: May 2025 to Dec 2025",
  bio: "Master's student at Northeastern University's Khoury College of Computer Sciences, with experience in data engineering and AI. Passionate about building scalable systems and solving complex problems."
};

export const education = {
  institution: "Northeastern University | Khoury College of Computer Sciences",
  location: "Boston, MA, USA",
  degree: "Master of Science, Computer Science",
  period: "Sept 2024 – Present",
  gpa: "3.83",
  coursework: ["Foundations of AI", "Programming Design Paradigms", "Computer Vision", "Algorithms"]
};

export const workExperience = [
  {
    role: "Teaching Assistant",
    company: "Khoury College of Computer Science",
    location: "Boston, MA, USA",
    period: "Sept 2024 – Dec 2024",
    description: [
      "Teaching Assistant for \"Programming with Data (Python)\" course with 300+ students",
      "Conduct office hours, assisting 10+ students per session with Python programming & Data science"
    ]
  },
  {
    role: "Data Engineer 2",
    company: "Walmart Global Tech",
    location: "Bengaluru, KA, India",
    period: "July 2022 – Aug 2024",
    description: [
      "Developed real-time Object Oriented ETL pipelines processing 1TB+ data using Apache Spark and Kafka",
      "Built CI/CD pipelines with Jenkins, Docker and GitHub, automating pipeline deployment on Azure",
      "Configured Terraform and Kubernetes to set up infrastructure for scalable data pipeline execution",
      "Built a fault-tolerant metadata search tool using Apache Solr for operational analytics",
      "Integrated 5+ Order Management components and migrated 50+ tables from Oracle to DataLake",
      "Worked in an Agile environment, actively participating in sprint planning, daily stand-ups, and retrospectives",
      "Enhanced Cloud parameters reducing pipeline runtime from 8 hours to 1 hour, cutting cloud costs",
      "Worked with Ubuntu, networking tools, and cryptography to ensure secure and resilient deployments",
      "Implemented cloud security with IAM roles and AD Groups, ensuring secure access control in AWS/GCP",
      "Developed custom parsers using Scrapy to extract data from HTML, XML, JSON for analytics workflows"
    ]
  },
  {
    role: "Data Scientist (Internship)",
    company: "Walmart Global Tech",
    location: "Bengaluru, KA, India",
    period: "Jan 2022 – July 2022",
    description: [
      "Performed Time-Series analysis to forecast demand patterns, detect seasonality to improve pricing strategy",
      "Utilized XGBoost to predict elasticity coefficients and applied Linear Optimization for demand modelling",
      "Accelerated system components by implementing DFS algorithm, reducing processing time by 99%",
      "Worked extensively with unstructured data such as images, text and speech to extract insights",
      "Utilized NumPy and Pandas for data cleaning, transformation, and analysis during model building"
    ]
  }
];

export const skills: SkillType[] = [
  { name: "Python", level: 90, category: "Programming" },
  { name: "Java", level: 85, category: "Programming" },
  { name: "C++", level: 75, category: "Programming" },
  { name: "TypeScript", level: 80, category: "Programming" },
  { name: "JavaScript", level: 85, category: "Programming" },
  { name: "Node.js", level: 75, category: "Programming" },
  { name: "AWS", level: 85, category: "Cloud & DevOps" },
  { name: "GCP", level: 80, category: "Cloud & DevOps" },
  { name: "Azure", level: 75, category: "Cloud & DevOps" },
  { name: "Terraform", level: 70, category: "Cloud & DevOps" },
  { name: "Docker", level: 85, category: "Cloud & DevOps" },
  { name: "Kubernetes", level: 80, category: "Cloud & DevOps" },
  { name: "REST APIs", level: 90, category: "Backend" },
  { name: "Microservices", level: 85, category: "Backend" },
  { name: "MySQL", level: 85, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 80, category: "Backend" },
  { name: "Redis", level: 75, category: "Backend" },
  { name: "LLMs", level: 85, category: "AI/ML" },
  { name: "AI Agents", level: 80, category: "AI/ML" },
  { name: "BERT", level: 75, category: "AI/ML" },
  { name: "GANs", level: 70, category: "AI/ML" },
  { name: "Embeddings", level: 75, category: "AI/ML" },
  { name: "Time Series", level: 85, category: "AI/ML" }
];

export const projects: ProjectType[] = [
  {
    title: "Neuralis: Personalized Multi-Agent AI Ecosystem",
    description: "Designed multi-agent AI system managing workflows with specialized agents including calendar and emails.",
    technologies: ["Langchain", "React", "Stateful AI"],
    highlights: [
      "Designed multi-agent AI system managing workflows with 5+ specialized agents including calendar, emails",
      "Integrated 10+ APIs for effective communication, achieving 100% efficiency gains in daily tasks",
      "Developed stateful memory, improving user task completion rates by 30%",
      "Leveraged LLMs for context-aware note creation and knowledge extraction in document processing"
    ]
  },
  {
    title: "Warehouse SLIM Optimisation using Genetic Algorithm",
    description: "Developed evolutionary algorithm to optimize warehouse space layout, reducing storage costs.",
    technologies: ["Python", "Blender 3D"],
    githubLink: "https://github.com/1-mukesh-1/InventoryManagement",
    highlights: [
      "Developed evolutionary algorithm to optimize warehouse space layout, reducing storage costs",
      "Designed fitness function evaluating travel distance, picking time, Weight and space utilization metrics",
      "Achieved 40% improvement (WRT Baseline) in retrieval speed through optimized inventory placement",
      "Performed a comparative analysis with Markov Decision Process and Local Search"
    ]
  },
  {
    title: "T-shirt Size Estimator",
    description: "Built ML pipeline with 89% accuracy using deep learning to automate body measures of mono images.",
    technologies: ["CNN", "Depth Estimation", "Segmentation"],
    githubLink: "https://github.com/1-mukesh-1/Tshirt-Size-Estimator",
    highlights: [
      "Built ML pipeline with 89% accuracy using deep learning to automate body measures of mono images",
      "Incorporated geometric algorithms to improve accuracy from 33% to 80% versus baseline models",
      "Integrated MediaPipe pose detection and PyTorch CNN to enable real-time size recommendations"
    ]
  },
  {
    title: "Image Handler (Course Project - Design Paradigms)",
    description: "Built Image Processing App with 15+ operations (ex: Compression, colour conversion, etc) in Java",
    technologies: ["Java", "Intellij", "Junit"],
    githubLink: "https://github.com/1-mukesh-1/imageHandler",
    highlights: [
      "Built Image Processing App with 15+ operations (ex: Compression, colour conversion, etc) in Java",
      "Incorporated MVC, Command Design, Callbacks, Observer patterns to ensure security, maintainability",
      "Wrote 1000+ tests for MVC architecture validating cross-component integrity and data flow reliability"
    ]
  },
  {
    title: "Medical Chat-Bot (Hackathon Team Project)",
    description: "Orchestrated a scalable medical chatbot processing 5+ queries/sec, supporting 10+ concurrent users",
    technologies: ["React", "Flask", "Google BERT", "Elastic Search"],
    githubLink: "https://github.com/Akshith213/HackOffV3---Team-DrainBrain",
    highlights: [
      "Orchestrated a scalable medical chatbot processing 5+ queries/sec, supporting 10+ concurrent users",
      "Medical Data is scraped using scrapy and regex from Mayo Clinic Website following the terms-of-use"
    ]
  },
  {
    title: "Nested Avro Schema to HiveQL Schema Converter",
    description: "Designed a web app using the BFS algorithm to auto-generate HiveQL schema from Avro or JSON data using robust design paradigms such as MVC, Command Design Patterns to ensure maintainability",
    technologies: ["Graph Traversal", "Spark-SQL"],
    highlights: [
      "Designed a web app using the BFS algorithm to auto-generate HiveQL schema from Avro or JSON data using robust design paradigms such as MVC, Command Design Patterns to ensure maintainability",
      "Reduced manual schema creation time for complex schemas from over 1 hour to less than a Minute"
    ]
  },
  {
    title: "Custom UEFI BIOS Development for Enhanced Hardware Initialization",
    description: "Developed a custom UEFI BIOS to optimize hardware initialization and boot performance.",
    technologies: ["C", "x86"],
    highlights: [
      "Developed a custom UEFI BIOS to optimize hardware initialization and boot performance.",
      "Implemented low-level drivers for peripherals, ensuring seamless hardware-software integration",
      "Conducted in-depth debugging using hardware tools to resolve firmware-hardware interaction issues"
    ]
  },
  {
    title: "Active Noise Cancellation for Vehicles",
    description: "Designed an ANC system using MATLAB & Simulink for vehicle interiors",
    technologies: ["MATLAB", "Simulink", "Signal Processing"],
    highlights: [
      "Designed an ANC system using MATLAB & Simulink for vehicle interiors",
      "Implemented adaptive filtering (LMS algorithm) to reduce engine and road noise by 30%",
      "Simulated real-time audio signal processing and feedback control loops for noise suppression"
    ]
  },
  {
    title: "Real-Time Sensor Data Acquisition System",
    description: "Developed a real-time data acquisition system using ThreadX RTOS for precise sensor monitoring.",
    technologies: ["C", "RTOS", "Embedded Systems"],
    highlights: [
      "Developed a real-time data acquisition system using ThreadX RTOS for precise sensor monitoring.",
      "Integrated multiple sensors to collect environmental data, ensuring accurate and synchronized readings"
    ]
  },
  {
    title: "Microservices Test Automation Framework (Personal Project)",
    description: "Built test framework with unit, integration, and E2E tests using Git and Jenkins CI/CD pipelines",
    technologies: ["Java", "PostgreSQL", "gRPC"],
    highlights: [
      "Built test framework with unit, integration, and E2E tests using Git and Jenkins CI/CD pipelines",
      "Created observability dashboards with power BI for real-time monitoring of test execution health"
    ]
  }
];


export const socialLinks: SocialLinkType[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mukesh003/",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/1-mukesh-1",
    icon: "github"
  }
];
