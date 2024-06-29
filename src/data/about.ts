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
  content: `Hi! 👋 I am Kaushik. I am a Tech Enthusiast 👨🏻‍🔬, a creative web developer 🧑🏻‍💻 and a dedicated mentor from NIT Patna🎓.
  Solving problems has to be the favourite thing of mine, and Algorithms being my strength. Apart from this, 
   I am also proficient in several programming languages, profound interest 
  , Full-stack development and others. (Whew! 😮‍💨) Scroll below to see some of my academic and personal projects. ⬇️`,
  links: {
    linkedin: "https://linkedin.com/in/kaushik-pattnaik24/",
    github: "https://github.com/K1ngKP",
    leetcode: "https://leetcode.com/u/KingKP246/",
    twitter: "https://twitter.com/itskp246/"
  },
};

export default aboutData;
