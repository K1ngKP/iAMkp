import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../data/experience";

const Experience = () => {

  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-4/5 mx-auto my-32">

      <h3 className="moving-gradient text-6xl md:text-7xl lg:text-8xl xl:text-7xl inline">
        Experiences
      </h3>

      <div className="mt-10 flex flex-col gap-8">

        {experienceData.map((exp) => {

          const isActive = active === exp.index;

          return (
            <div
              key={exp.index}
              onClick={() => setActive(isActive ? null : exp.index)}
              className={`transition-all duration-300 ${
                active && !isActive
                  ? "opacity-40 scale-[0.98]"
                  : "opacity-100 scale-100"
              }`}
            >
              <ExperienceCard {...exp} />
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Experience;