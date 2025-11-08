export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  industry?: string;
  tech?: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Konga Online Limited",
    role: "Backend Developer",
    period: "July 2025 – Present",
    location: "Lagos, Nigeria",
    industry: "E-commerce | Online Store (Tech)",
    tech: [
      "Node.js",
      "NestJS",
      "Restify",
      "Microservices",
      "Kafka",
      "Python",
      "JavaScript",
      "Sequelize",
      "Docker",
      "Kubernetes",
      "SQL",
      "TypeScript",
    ],
    bullets: [
      "Resolved critical inter-service communication issues in product search, eliminating ~80% of timeout errors and restoring perfect search responses.",
      "Architected and deployed an in-house AI recommendation engine using Typesense + StarSpace, improving accuracy by ~35% and reducing monthly costs by $99.",
      "Built and maintained backend features for Konga Affiliate Admin Portal: automated commissions, analytics APIs, bulk onboarding, and reconciliation services.",
      "Actively contributed to agile processes (planning, standups, retrospectives) consistently delivering story points on schedule.",
    ],
  },
  {
    company: "SeamFlex Inc",
    role: "Backend Engineer (Lead)",
    period: "Jan 2025 – June 2025",
    location: "Alberta, Canada",
    industry: "Transportation & Mobility Tech",
    tech: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "PostGIS",
      "TypeORM",
      "REST APIs",
      "Docker",
      "Event-driven Architecture",
      "CI/CD",
      "Azure DevOps",
    ],
    bullets: [
      "Led 3 backend engineers building a scalable ride-sharing backend supporting thousands of concurrent users.",
      "Engineered real-time ride-matching using geospatial queries with PostGIS for precise location matching.",
      "Designed booking & payment infrastructure: instant/scheduled booking, dynamic pricing, wallets, service fees, and automated refunds.",
      "Implemented multi-channel notifications (push & in-app) and safety features (suspension, no-show detection, ratings/reviews).",
      "Integrated carbon footprint tracking per ride, enabling green incentives.",
      "Mentored developers, established SOLID-based standards, transactional workflows, and event-driven communication; maintained 99.9%+ uptime via monitoring & incident response.",
    ],
  },
  {
    company: "Agrandi Technologies",
    role: "Backend Developer",
    period: "Jan 2024 – Dec 2024",
    location: "Ibadan, Nigeria",
    industry: "Retail & Business (Tech)",
    tech: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "JavaScript",
      "MySQL",
      "MongoDB",
      "Serverless",
      "AWS Lambda",
      "Jest",
      "GitHub Actions",
    ],
    bullets: [
      "Engineered and maintained robust backend solutions in TypeScript/JavaScript following industry best practices.",
      "Implemented scalable REST APIs using Node.js, Express.js, and Serverless.",
      "Integrated MySQL and MongoDB, improving data processing speeds by ~28% and query performance by ~40%.",
      "Participated in 20+ sprints, stand-ups, and retrospectives, contributing to ~95% on-time delivery.",
      "Supported unit tests to validate backend functionalities.",
    ],
  },
  {
    company: "Centiiv",
    role: "Backend Developer",
    period: "Apr 2022 – Sept 2024",
    location: "Lagos, Nigeria",
    industry: "Fintech",
    tech: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "TypeORM",
      "Sequelize",
      "MongoDB",
      "MySQL",
      "Docker",
      "CI/CD",
      "Firebase",
      "AWS",
    ],
    bullets: [
      "Designed a scalable monolithic architecture handling ~300% increase in transaction volume without degradation.",
      "Integrated APIs with third-party services to enhance application functionality.",
      "Optimized queries and implemented caching reducing response time by ~40% and infrastructure costs by ~22%.",
      "Implemented input validation to reduce errors and curb fraudulent attacks.",
      "Enhanced performance and UX by adding logging across features and continuous monitoring.",
    ],
  },
];