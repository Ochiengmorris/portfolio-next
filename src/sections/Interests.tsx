"use client";

import { motion } from "framer-motion";

import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";
import { BookAudio, Coffee, Goal, Medal, Music4, Palmtree } from "lucide-react";

const Interests = () => {
  return (
    <section className="p-6 mb-2 shadow-md bg-card rounded-xl">
      <motion.div variants={textVariant({ delay: 0 })}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>INTERESTS.</h2>
      </motion.div>

      <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center gap-1  justify-center">
          <Goal size={28} className="text-[#76c7c0]" />
          <p className="font-semibold text-gray-400">Sports</p>
        </div>
        <div className="flex flex-col items-center gap-1  justify-center">
          <Music4 size={28} className="text-[#76c7c0]" />
          <p className="font-semibold text-gray-400">Music</p>
        </div>
        <div className="flex flex-col items-center gap-1  justify-center">
          <Palmtree size={28} className="text-[#76c7c0]" />
          <p className="font-semibold text-gray-400">Travel</p>
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <BookAudio size={28} className="text-[#76c7c0]" />
          <p className="font-semibold text-gray-400">Learn</p>
        </div>
        <div className="flex flex-col gap-1  justify-center">
          <Coffee size={28} className="text-[#76c7c0]" />
          <p className="font-semibold text-gray-400">Coffee</p>
        </div>
        <div className="flex flex-col gap-1  justify-center">
          <Medal size={28} className="text-[#76c7c0]" />
          <p className="font-semibold text-gray-400">Work-Out</p>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper({ Component: Interests, idName: "interests" });
