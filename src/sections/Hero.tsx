"use client";

import ImageHolder from "@/components/ImageHolder";
import { NeuCard, neuButton } from "./Neumo";
import { SectionWrapper } from "@/hoc";
import Link from "next/link";

const Hero = () => {
  return (
    <NeuCard as="section" className="relative overflow-hidden p-8 md:p-16">
      {/* Decorative concentric circles: extruded -> inset -> extruded */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-28 hidden md:block"
      >
        <div className="grid h-80 w-80 place-items-center rounded-full shadow-neu-extruded motion-safe:animate-float">
          <div className="grid h-56 w-56 place-items-center rounded-full shadow-neu-inset-deep">
            <div className="h-28 w-28 rounded-full shadow-neu-extruded" />
          </div>
        </div>
      </div>

      {/* ImageHolder renders the nested-depth portrait, name and socials */}
      <div className="mb-8 lg:hidden">
        <ImageHolder imageClassses={"w-[200px] h-[200px]"} />
      </div>

      <h1 className="relative font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-neu-fg sm:text-6xl lg:text-7xl">
        HI, I&apos;M <span className="text-neu-accent">JOHN</span>
      </h1>

      <p className="relative mt-6 max-w-2xl text-base leading-relaxed text-neu-muted md:text-lg lg:text-xl">
        A{" "}
        <strong className="font-semibold text-neu-fg">
          Full-Stack Web Developer
        </strong>{" "}
        and <strong className="font-semibold text-neu-fg">Statistician</strong>{" "}
        with <strong className="font-semibold text-neu-fg">3+ years</strong> of
        experience in crafting scalable, user-centric solutions. Skilled in{" "}
        <strong className="font-semibold text-neu-fg">
          Python, JavaScript (React &amp; Node.js)
        </strong>
        , and{" "}
        <strong className="font-semibold text-neu-fg">React Native</strong>, I
        combine software development expertise with statistical analysis to
        create data-driven, functional, and engaging digital experiences.
      </p>

      <div className="relative mt-10 flex flex-wrap gap-6">
        <Link href="/#portfolio" className={neuButton("primary")}>
          View my work
        </Link>
        <Link href="/#contactme" className={neuButton("secondary")}>
          Reach out
        </Link>
      </div>
    </NeuCard>
  );
};

export default SectionWrapper({ Component: Hero, idName: "hero" });
