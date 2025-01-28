"use client";

import { projects } from "@/constants/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";
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
      <Tilt
        scale={1}
        transitionSpeed={450}
        className="bg-[#050816] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project_image"
            fill
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              {/* <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              /> */}
              <FaGithub className="w-1/2 h-1/2 object-contain" color="white" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-card/50 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section className="shadow-md p-6 bg-card/5 rounded-xl">
      <motion.div variants={textVariant({ delay: 0 })}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>PROJECTS.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn({
            direction: "right",
            type: "spring",
            delay: 0.1,
            duration: 1,
          })}
          className="mt-3 text-[17px] max-w-3xl text-card/50 leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper({ Component: Portfolio, idName: "portfolio" });
