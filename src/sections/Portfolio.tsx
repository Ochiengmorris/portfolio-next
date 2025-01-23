"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "UmojaTickets - Ticket Marketplace",
    description:
      "A cutting-edge event ticketing platform featuring advanced ticket search, filtering, and secure payments with Mpesa. Designed to connect event organizers and attendees seamlessly.",
    image: "/image1.png",
    link: "https://mj-ticketr.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "Convex"],
  },
  {
    id: 2,
    title: "LukuHub - Admin Dashboard",
    description:
      "An admin dashboard for managing the LukuHub e-commerce platform. Features include product management, order tracking, and insightful analytics, all wrapped in a sleek, user-friendly interface.",
    image: "/luku-dash.png",
    link: "/ecommerce-demo",
    techStack: ["NextJS", "Tailwind CSS", "Supabase"],
  },
  {
    id: 3,
    title: "Pesapp - Mobile Money App",
    description:
      "A feature-rich mobile money application enabling seamless real-time transactions. Includes secure user authentication, transaction history tracking, and detailed balance management. Built with a modern interface to provide a smooth and intuitive user experience.",
    image: "/image2.png",
    link: "/pesapp-demo",
    techStack: ["React Native", "Node.js", "Expo"],
  },
  {
    id: 4,
    title: "LukuHub - Shopping App",
    description:
      "An intuitive shopping app where users can browse products, add items to their cart, and checkout securely Mpesa. Built for a seamless e-commerce experience. Also has an Admin page for event owners to add, modify, and delete products. Built for a seamless e-commerce experience.",
    image: "/image2.png",
    link: "/chat-app-demo",
    techStack: ["React Native", "Nativewind", "Expo"],
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
