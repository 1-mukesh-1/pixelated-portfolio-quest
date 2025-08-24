
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
      "Developed real-time and large-scale ETL pipelines processing 1TB+ data using Apache Spark and Kafka",
      "Enhanced Cloud parameters reducing pipeline runtime from 8 hours to 1 hour, cutting cloud costs",
      "Integrated 5+ Order Management components and migrated 50+ Data Models from IBM Sterling to GCP"
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
      "Accelerated system components by implementing DFS algorithm, reducing processing time by 99%"
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
