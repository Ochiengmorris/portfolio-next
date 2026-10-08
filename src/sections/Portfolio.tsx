"use client";

import { NeuCard, SectionHeading, neuButton } from "./Neumo";
import { projects } from "@/constants/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];

  image: string;
  source_code_link: string;
}) => {
  return (
    <motion.div
      variants={fadeIn({
        direction: "up",
        type: "spring",
        delay: index * 0.5,
        duration: 0.75,
      })}
    >
      {/* Tilt owns the element transform, so the card's own hover lift lives on the inner NeuCard */}
      <Tilt
        scale={1}
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        transitionSpeed={450}
        className="h-full w-full"
      >
        <NeuCard as="article" hoverable className="flex h-full flex-col p-6">
          {/* Image frame: pressed into the card */}
          <div className="rounded-2xl p-2 shadow-neu-inset-deep">
            <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
              <Image
                src={image}
                alt={`${name} screenshot`}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-6 flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl font-bold tracking-tight text-neu-fg">
              {name}
            </h3>
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} source code on GitHub`}
              className={`${neuButton("icon")} shrink-0`}
            >
              <FaGithub aria-hidden className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-neu-muted">
            {description}
          </p>

          <ul className="mt-auto flex flex-wrap gap-3 pt-6">
            {tags.map((tag) => (
              <li
                key={`${name}-${tag.name}`}
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-neu-muted shadow-neu-inset-sm"
              >
                {/* tag.color keeps your per-tag colour as a small dot, so text stays AA-contrast */}
                <span
                  aria-hidden
                  className={`h-2 w-2 rounded-full bg-current ${tag.color}`}
                />
                {tag.name}
              </li>
            ))}
          </ul>
        </NeuCard>
      </Tilt>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <NeuCard as="section" className="p-8 md:p-12">
      <SectionHeading eyebrow="My work" title="PROJECTS." />

      <motion.p
        variants={fadeIn({
          direction: "right",
          type: "spring",
          delay: 0.1,
          duration: 1,
        })}
        className="mt-4 max-w-3xl text-base leading-8 text-neu-muted"
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </NeuCard>
  );
};

export default SectionWrapper({ Component: Portfolio, idName: "portfolio" });
