"use client";

import "./styles/ExperienceCard.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExperienceContent } from "../data/experience";

const ExperienceCard = ({
  index,
  company,
  description,
  position,
  logo,
  projects,
}: ExperienceContent) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div layout className="w-full">

      {/* 🔥 YOUR ORIGINAL CARD (UNCHANGED STYLE) */}
      <div
        onClick={() => setExpanded(!expanded)}
        className="experience-card relative w-full p-6 xl:p-10 flex flex-col lg:flex-row gap-6 xl:gap-10 rounded-2xl border border-fuchsia-200/20 cursor-pointer"
      >
        <img
          className="mx-auto lg:mx-0 w-16 h-16 xl:w-20 xl:h-20 object-contain"
          src={logo}
        />

        <div className="w-full space-y-3">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight"
                style={{ color: "#E45FFD" }}
              >
                {company}
              </h2>

              <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 font-medium">
                {position}
              </h3>
            </div>

            <h2
              className="text-5xl xl:text-7xl text-transparent absolute top-4 right-4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(124, 73, 252, 0.25) 0%, rgba(53, 30, 94, 0.00) 100%)",
                backgroundClip: "text",
              }}
            >
              {index}
            </h2>
          </div>

          <p
            className="pt-2 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-3xl"
            style={{ color: "#F5C2FF" }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* 🔥 EXPANDABLE PROJECT CARDS */}
      <AnimatePresence>
        {expanded && projects && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 pl-2 sm:pl-6 border-l border-fuchsia-500 space-y-4"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1a1625] p-4 rounded-xl border border-fuchsia-300/20 hover:border-fuchsia-400 transition-all"
              >
                <h4 className="text-lg font-semibold text-fuchsia-300">
                  {project.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-400 mt-1">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default ExperienceCard;