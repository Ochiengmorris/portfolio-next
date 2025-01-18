"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WorkExp = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section
      ref={ref}
      id="work-exp"
      className="py-4 mb-2 shadow-md px-6 mt-2 rounded-xl bg-card"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="lg:text-4xl text-2xl font-semibold mb-8" id="work">
          Work Experience
        </h2>

        <p className="text-center mb-8">Nothing to show here... yet!</p>

        {/* Education */}
        <h2 className="lg:text-4xl text-2xl font-semibold mb-8" id="education">
          Education
        </h2>
      </motion.div>
    </section>
  );
};

export default WorkExp;
