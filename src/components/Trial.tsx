"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with features like product search, filtering, and secure payments.",
    image: "/image1.png", // Replace with your image path
    link: "/ecommerce-demo",
    techStack: ["React", "Tailwind CSS", "Node.js"],
  },
  {
    id: 2,
    title: "Chat Application",
    description:
      "A real-time chat app with group messaging and typing indicators.",
    image: "/image2.png", // Replace with your image path
    link: "/chat-app-demo",
    techStack: ["React", "Firebase"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
