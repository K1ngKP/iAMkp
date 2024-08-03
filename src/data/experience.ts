import nitpLogo from "../assets/logos/NITP_Logo2.png";
import unifyappsLogo from "../assets/logos/UnifyApps_logo.jpeg";

export interface ExperienceContent {
  index: string;
  company: string;
  position: string;
  description: string;
  logo: string;
}

const experienceData: ExperienceContent[] = [
  {
    index: "01",
    company: "UnifyApps",
    position: "Product Analyst",
    description: 
      " As a Product Analyst at UnifyApps, I specialize in analyzing user data and market trends to inform product development and optimization. My role involves identifying key insights, driving data-driven decisions, and collaborating with cross-functional teams to enhance user experience and achieve business objectives.",
    logo: unifyappsLogo,
  },
  {
    index: "02",
    company: "NIT Patna",
    position: "Research Project",
    description: 
      " I designed and simulated an advanced tunable absorber utilizing graphene and VO₂ materials. This innovative absorber leverages the phase transition properties of VO₂ to modulate absorption across various frequencies, specifically within the Terahertz frequency band for absorptance. The design includes 7 narrowbands and 3 widebands, achieving an operational frequency range of 0.1 - 10 THz.",
    logo: nitpLogo,
  },
  
];

export default experienceData;
