export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS (Lambda, EC2, S3, CloudFormation, API Gateway)",
      "Azure (DevOps, Functions, App Service)",
      "Serverless",
      "Docker",
      "CI/CD",
    ],
  },
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Node.js", "Express.js", "Nest.js", "Next.js"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "Firestore", "PostgreSQL"],
  },
  {
    category: "API Development",
    items: ["REST API", "GraphQL", "API Gateway", "Swagger/OpenAPI"],
  },
  {
    category: "Development Tools",
    items: ["Git", "GitHub", "Azure DevOps", "Jira", "Postman"],
  },
  {
    category: "ORM/ODM",
    items: ["TypeORM", "Sequelize", "Mongoose", "Knex", "Prisma", "Drizzle"],
  },
  {
    category: "Testing",
    items: ["Jest"],
  },
];