import gameFinder from "../assets/images/game-finder.png";
import pathFinder from "../assets/images/path-finder.png";
import portfolio from "../assets/images/portfolio.png";
import sorting from "../assets/images/sorting.png";
import jchess from "../assets/images/jchess-logo.png"
interface Project {
  index: string;
  name: string;
  description: string;
  image?: string;
  repository: string;
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
    name: "Chess Engine using",
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
    repository: "https://github.com/hatim-s/game-finder",
    website: "https://game-finder-ecru.vercel.app/",
  },
  {
    index: "04",
    name: "Sorting Algorithms Visualizer",
    description:
      "Channeling my passion for algorithms, I created a visualization tool offering insight into fundamental sorting algorithms. Employing React and Javascript for robust functionality, and vanilla CSS for an elegant design, this project reflects my dedication to making complex concepts accessible and engaging. ",
    image: sorting,
    repository: "https://github.com/hatim-s/Sorting-Algorithms-Visualizer",
    website: "https://sorting-algorithms-visualizer-self.vercel.app/",
  },
  {
    index: "05",
    name: "Path Finding Algorithms Visualizer",
    description:
      "Driven by a fascination for graph path-finding algorithms, I crafted a visually captivating tool to showcase their functionality. Utilizing React, Javascript, and vanilla CSS, this project serves as a testament to my commitment to creating projects that blend sophistication with user-friendly design.",
    image: pathFinder,
    repository: "https://github.com/hatim-s/Path-Finding-Algorithm-Visualizer",
    website: "https://path-finding-algorithm-visualizer-one.vercel.app/",
  },
];

export default projectsData;
