"use client";

import ImageHolder from "@/components/ImageHolder";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section
      ref={ref}
      id="home"
      className="bg-card mt-2 text-card-foreground shadow-md p-6"
    >
      <div className="lg:hidden mb-12">
        <ImageHolder imageClassses={"w-[200px] h-[200px]"} />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-2xl lg:text-4xl font-bold mb-6 text-gray-800"
      >
        HI, I&apos;M JOHN
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm md:text-lg lg:text-xl text-gray-600"
      >
        {" "}
        A <b>Full-Stack Web Developer</b> and <b>Statistician</b> with{" "}
        <b>2+ years</b> of experience in crafting scalable, user-centric
        solutions. Skilled in <b>Python, JavaScript (React & Node.js)</b>,{" "}
        <b>React Native</b>, and <b>R</b>, I combine software development
        expertise with statistical analysis to create data-driven, functional,
        and engaging digital experiences.{" "}
      </motion.p>
    </section>
  );
};

export default Hero;
