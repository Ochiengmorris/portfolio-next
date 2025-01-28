"use client";

import ImageHolder from "@/components/ImageHolder";
import { SectionWrapper } from "@/hoc";

const Hero = () => {
  return (
    <section className="bg-transparent shadow-md text-card rounded-xl p-6">
      <div className="lg:hidden mb-12">
        <ImageHolder imageClassses={"w-[200px] h-[200px]"} />
      </div>

      <h1
        className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px]
      lg:leading-[98px] mb-6"
      >
        HI, I&apos;M <span className="text-teal-500">JOHN</span>
      </h1>
      <p className="text-sm md:text-lg text-card/50 lg:text-xl">
        {" "}
        A <b>Full-Stack Web Developer</b> and <b>Statistician</b> with{" "}
        <b>2+ years</b> of experience in crafting scalable, user-centric
        solutions. Skilled in <b>Python, JavaScript (React & Node.js)</b>, and{" "}
        <b>React Native</b>, I combine software development expertise with
        statistical analysis to create data-driven, functional, and engaging
        digital experiences.{" "}
      </p>
    </section>
  );
};

export default SectionWrapper({ Component: Hero, idName: "hero" });
