import ExperienceCard from "./ExperienceCard";

import experienceData from "../data/experience";
const Experience = () => {
  return (
    <div id="experience-section" className="w-4/5 my-32 mx-auto">
      <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-71xl inline text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600">
        Experiences
      </h3>
      <div className="flex flex-col gap-10 xl:gap-24 pt-10">
        {experienceData.map((exp) => (
          <ExperienceCard
            index={exp.index}
            company={exp.company}
            description={exp.description}
            position={exp.position}
            logo={exp.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
