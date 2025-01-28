"use client";

import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";
import { motion } from "framer-motion";

const WorkExp = () => {
  return (
    <section className="shadow-md rounded-xl p-6 bg-card/5">
      <motion.div variants={textVariant({ delay: 0 })}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <motion.div>
        <p className="text-center text-white mb-8">
          Nothing to show here... yet!
        </p>

        {/* Education */}
      </motion.div>
    </section>
  );
};

export default SectionWrapper({ Component: WorkExp, idName: "work-exp" });
