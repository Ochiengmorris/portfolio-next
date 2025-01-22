"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Ticket marketplace - Umoja",
    description:
      "A modern event ticketing platform with features like ticket search, filtering, and secure payments with Mpesa.",
    image: "/image1.png",
    link: "https://mj-ticketr.vercel.app/",
    techStack: ["NextJS", "Tailwind", "Convex"],
  },
  {
    id: 2,
    title: "Ecommerce Mobile App",
    description:
      "A Shopping app where customers can search for products, add to their cart, and checkout securely with stripe and mpesa.",
    image: "/image2.png",
    link: "/chat-app-demo",
    techStack: ["React Native", "Supabase", "NextJS"],
  },
];

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
        <h2 className="lg:text-3xl lg:text-center text-2xl font-semibold mb-8">
          PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden"
              key={project.id}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-sm md:text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 text-xs md:text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs md:text-sm bg-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-4 text-[#00a184] hover:underline text-xs md:text-sm "
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
