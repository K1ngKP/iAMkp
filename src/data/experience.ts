import nitpLogo from "../assets/logos/NITP_Logo2.png";
import unifyappsLogo from "../assets/logos/UnifyApps_logo.jpeg";
export interface ExperienceDetail {
  title: string;
  description?: string;
}

export interface ExperienceContent {
  index: string;
  company: string;
  position: string;
  description: string;
  logo: string;

  // NEW 👇
  projects?: ExperienceDetail[];
  clients?: string[];
  highlights?: string[];
}

const experienceData: ExperienceContent[] = [
  {
    index: "01",
    company: "UnifyApps",
    position: "Associate Product Manager",
    description:
      "As a Product Analyst at UnifyApps, I specialize in analyzing user data and market trends...",

    logo: unifyappsLogo,

    // 🔥 Rich content
    projects: [
      {
        title: "Workflow Engine Optimization",
        description: "Improved execution latency by 30% by redesigning backend flows"
      },
      {
        title: "Dashboard Revamp",
        description: "Built scalable analytics dashboards for enterprise clients"
      }
    ],

    clients: ["PolicyBazaar", "Logistics Enterprise", "Fintech Clients"],

    highlights: [
      "Worked closely with backend architecture",
      "Owned product analytics and decision-making",
      "Improved user experience via data insights"
    ]
  },

  {
    index: "02",
    company: "NIT Patna",
    position: "Research Project",
    description:
      "Designed and simulated an advanced tunable absorber using graphene and VO₂...",

    logo: nitpLogo,

    projects: [
      {
        title: "THz Frequency Absorber",
        description: "Covered 0.1–10 THz range with tunable absorption"
      }
    ],

    highlights: [
      "7 narrowbands + 3 widebands",
      "Used graphene + VO₂ phase transition",
      "Research-focused simulation work"
    ]
  }
];

export default experienceData;