"use client";

import { motion } from "framer-motion";

import LanguageProficiency from "@/components/LanguageProficiency";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";

const Skills = () => {
  return (
    <section className="bg-card/5 rounded-xl shadow-md p-6 ">
      <motion.div variants={textVariant({ delay: 0 })}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OVERVIEW.</h2>
      </motion.div>
      <motion.div className="grid text-card/50 grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-card/50">
          <h2 className="text-xl mb-4">Personal Information</h2>
          <motion.div className="grid grid-cols-3 text-sm">
            <ul className="font-bold space-y-3">
              <li>FULL NAME</li>
              <li>D.O.B</li>
              <li>ADDRESS</li>
              <li>E-MAIL</li>
              <li>PHONE</li>
            </ul>
            <ul className="space-y-3 col-span-2">
              <li>John Oduya</li>
              <li>April 2003</li>
              <li>Nairobi, Kenya</li>
              <li>oduyajohn66@gmail.com</li>
              <li>+254 742 642356</li>
            </ul>
          </motion.div>
        </div>

        <motion.div>
          <h2 className="text-xl md:mt-0 mb-4">Languages</h2>
          <ul>
            <LanguageProficiency
              language="English"
              dotsFilled={9}
              totalDots={10}
              proficiency="fluent"
            />
            <LanguageProficiency
              language="Swahili"
              dotsFilled={9}
              totalDots={10}
              proficiency="native"
            />
            <LanguageProficiency
              language="Duruma"
              dotsFilled={6}
              totalDots={10}
              proficiency="native"
            />
          </ul>
        </motion.div>
        {/* 
        <div>
          <h2 className="text-xl mb-4">Professional Skills</h2>
          <ul>
            <SkillProgressBar skill="React" percentage={79} />
            <SkillProgressBar skill="React-Native" percentage={40} />
            <SkillProgressBar skill="Python" percentage={60} />
            <SkillProgressBar skill="NodeJS" percentage={60} />
          </ul>
        </div> */}

        {/* <div>
          <h2 className="text-xl md:mt-0 mb-4">Other Professional Skills</h2>
          <ul className="grid grid-cols-2">
            <li className="flex flex-col justify-center items-center">
              <CircleProgressBar progress={75} size={100} />
              <h3>HTML</h3>
            </li>
            <li className="flex flex-col justify-center items-center">
              <CircleProgressBar progress={80} size={100} />
              <h3>CSS</h3>
            </li>
            <li className="flex flex-col justify-center items-center">
              <CircleProgressBar progress={66} size={100} />
              <h3>R</h3>
            </li>
            <li className="flex flex-col justify-center items-center">
              <CircleProgressBar progress={20} size={100} />
              <h3>C</h3>
            </li>
          </ul>
        </div> */}

        {/* <div>
          <h2 className="text-xl md:mt-0 mb-4">Few Things</h2>
          <ul className="">
            <li className="flex items-center gap-6 font-semibold">
              <CheckCircle className="w-5 h-5" />
              <p>Open-Minded</p>
            </li>
            <li className="flex items-center gap-6 font-semibold">
              <CheckCircle className="w-5 h-5" />
              <p>Rapid Development</p>
            </li>
            <li className="flex items-center gap-6 font-semibold">
              <CheckCircle className="w-5 h-5" />
              <p>Team-Player</p>
            </li>
            <li className="flex items-center gap-6 font-semibold">
              <CheckCircle className="w-5 h-5" />
              <p>Adaption</p>
            </li>
            <li className="flex items-center gap-6 font-semibold">
              <CheckCircle className="w-5 h-5" />
              <p>Strictly Following Rules</p>
            </li>
          </ul>
        </div> */}

        {/* <div>
          <h2 className="text-xl md:mt-0 mb-4">Understanding Client</h2>
          <p>
            Understanding the client need and Business is the key. Every Project
            is new in a way and every project is different and every client is
            unique.
          </p>
        </div> */}
      </motion.div>
    </section>
  );
};

export default SectionWrapper({ Component: Skills, idName: "skills" });
