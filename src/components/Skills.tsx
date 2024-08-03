import SkillBadge from "./SkillBadge";
import skillData from "../data/skills";
import Cube from "./Cube"

const Skills = () => {
  return (
    <div id="skills-section" className="w-4/5 my-32 mx-auto">
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl inline text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600">
        Skills
      </h2>
      <div className="temp flex flex-col ">
        <div className="pt-10 flex gap-4 lg:gap-6 flex-wrap justify-center items-center">
          {skillData.map((skill) => (
            <SkillBadge key={skill} title={skill} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Cube />
        </div>
      </div>
    </div>
  );
};

export default Skills;

