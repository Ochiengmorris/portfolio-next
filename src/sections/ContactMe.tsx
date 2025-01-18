"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ContactForm } from "@/components/Form";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  TwitterIcon,
} from "lucide-react";
import React from "react";

const ContactMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section ref={ref} id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-4 mb-2 shadow-md px-6 bg-card"
      >
        <h2 className="lg:text-3xl lg:text-center text-2xl font-semibold mb-8">
          ContactMe
        </h2>

        <div className="lg:mx-12">
          <div className="flex list-none gap-8 mb-6">
            <li>
              <a href="">
                <Facebook size={24} />
              </a>
            </li>
            <li>
              <a href="">
                <Instagram size={24} />
              </a>
            </li>
            <li>
              <a href="">
                <Linkedin size={24} />
              </a>
            </li>
            <li>
              <a href="">
                <TwitterIcon size={24} />
              </a>
            </li>
            <li>
              <a href="">
                <Github size={24} />
              </a>
            </li>
          </div>

          <h2 className="text-base md:text-xl lg:text-2xl font-semibold text-gray-500">
            Feel free to contact me in case of any question
          </h2>

          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
