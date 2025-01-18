"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section ref={ref} id="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-4 mb-2 shadow-md px-6 bg-card"
      >
        <h2 className="lg:text-4xl text-2xl font-semibold mb-8">PORTFOLIO</h2>

        <div>
          <p className="text-center">Nothing to show here... yet!</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
