import gameFinder from "../assets/images/game-finder.png";
import portfolio from "../assets/images/portfolio.png";
import sorting from "../assets/images/myTechNotesLogo.png";
import jchess from "../assets/images/jchess-logo.png"
import mathemagics from "../assets/images/main-screen.png"
interface Project {
  index: string;
  name: string;
  description: string;
  image?: string;
  repository?: string;
  website?: string;
}

const projectsData: Project[] = [
  {
    index: "01",
    name: "Personal Portfolio",
    description:
      "Crafted a dazzling personal portfolio that showcases my web development capablities. Designed the portfolio using React and Typescript for seamless functionality, adorned it with stylish aesthetics using Tailwind CSS, and finally bootstrapped the development environment with Vite.",
    image: portfolio,
    repository: "https://github.com/K1ngKP/iAMkp",
  },
  {
    index: "02",
    name: "Chess Engine",
    description:
      " Elevate your chess game with my JavaScript-based engine, evaluating up to 700,000 positions per second and reaching a depth of 10. It offers up to 8 plies of analysis, providing precise insights to enhance your skills and strategic understanding. Perfect for players at any level looking to master the complexities of chess.",
    image: jchess,
    repository: "https://github.com/K1ngKP/Jchess",
    website: "https://k1ngkp.github.io/Jchess/",

  },
  {
    index: "03",
    name: "Game Finder",
    description:
      "Unveiled an impressive game-finding application utilizing React, Typescript, Rawg API, and Chakra-UI. Elevating user experience with convenient sorting and filtering options, this project reflects my commitment to creating applications that are both functional and user-friendly.",
    image: gameFinder,
    repository: "https://game-finder-ecru.vercel.app/",
    website: "https://game-finder-ecru.vercel.app/",
  },
  {
    index: "04",
    name: "My Tech Notes",
    description:
      "An intuitive and powerful word editor that facilitates real-time collaboration. 100+ users can edit documents simultaneously with live updates suitable for dev discussions across a project. Create, share, comment and pen down all the important topics using this interactive web application.",
    image: sorting,
    repository: "https://github.com/K1ngKP/my-technotes",
    website: "https://my-technotes.vercel.app/",
  },
  {
    index: "05",
    name: "Mathe Magics",
    description:
      "The world of Mathematics is always fascinating and with a great passion for maths, here is a website for solving few mathematical problems. Consists of a scientific calculator, equation solver and a sudoku solver designed using efficient algorithms. Still a few tweaks left.",
    image: mathemagics,
    repository: "https://github.com/K1ngKP/scientific-calculator",
  },
];

export default projectsData;
