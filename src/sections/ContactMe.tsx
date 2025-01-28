"use client";

import { ContactForm } from "@/components/Form";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";
import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  TwitterIcon,
} from "lucide-react";

const ContactMe = () => {
  return (
    <section>
      <motion.div className="mb-2 shadow-md p-6 border border-gray-400/50 rounded-xl">
        <motion.div variants={textVariant({ delay: 0 })}>
          <p className={styles.sectionSubText}>Get in Touch</p>
          <h2 className={styles.sectionHeadText}>CONTACT.</h2>
        </motion.div>

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
              <a href="https://linkedin.com/in/johnochieng">
                <Linkedin size={24} />
              </a>
            </li>
            <li>
              <a href="https://x.com/oduyajohn66">
                <TwitterIcon size={24} />
              </a>
            </li>
            <li>
              <a href="https://github.com/Ochiengmorris">
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

export default SectionWrapper({ Component: ContactMe, idName: "contactme" });
