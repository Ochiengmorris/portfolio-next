import ImageHolder from "@/components/ImageHolder";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-card mt-2 text-card-foreground shadow-md p-6">
      <div className="lg:hidden mb-12">
        <ImageHolder imageClassses={"w-[200px] h-[200px]"} />
      </div>

      <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-gray-800">
        HI, I&apos;M JOHN
      </h1>
      <p className="text-sm md:text-lg lg:text-xl text-gray-600">
        {" "}
        I&apos;m John Ochieng&apos; Oduya, a <b>
          Full-Stack Developer
        </b> and <b>Statistician</b> with <b>2+ years</b> of experience in
        crafting scalable, user-centric solutions. Skilled in{" "}
        <b>Python, JavaScript (React & Node.js)</b>, <b>React Native</b>, and{" "}
        <b>Flutter</b>, I combine software development expertise with
        statistical analysis to create data-driven, functional, and engaging
        digital experiences.{" "}
      </p>
    </div>
  );
};

export default Hero;
