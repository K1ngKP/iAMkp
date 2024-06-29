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
    company: "NIT Patna",
    position: "Research Project",
    description: 
      " I designed and simulated an advanced tunable absorber utilizing graphene and VO₂ materials. This innovative absorber leverages the phase transition properties of VO₂ to modulate absorption across various frequencies, specifically within the Terahertz frequency band for absorptance. The design includes 7 narrowbands and 3 widebands, achieving an operational frequency range of 0.1 - 10 THz.",
    logo: "NITP_Logo2.png",
  },
];

export default experienceData;
