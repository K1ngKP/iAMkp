export interface AboutContent {
  content: string;
  links: {
    linkedin: string;
    github: string;
    leetcode: string;
    twitter: string;
  };
}

const aboutData: AboutContent = {
  content: `Hi! 👋 I’m Kaushik — a Tech Enthusiast 👨🏻‍🔬, building products to solve real problems 🧑🏻‍💻 and a dedicated mentor from NIT Patna🎓.
  I work as a Technical PM, turning complex systems into scalable, data-driven products. Apart from this, 
   I am also proficient in several programming languages, profound interest 
  in Full-stack development and others. (Whew! 😮‍💨) Scroll below to see some of my academic and personal projects. ⬇️`,
  links: {
    linkedin: "https://linkedin.com/in/kaushik-pattnaik24/",
    github: "https://github.com/K1ngKP",
    leetcode: "https://leetcode.com/u/KingKP246/",
    twitter: "https://twitter.com/itskp246/"
  },
};

export default aboutData;