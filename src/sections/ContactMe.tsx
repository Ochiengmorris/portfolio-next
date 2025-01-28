"use client";

import { ContactForm } from "@/components/Form";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/utils/motion";
import { styles } from "@/utils/styles";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <section className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn({
          direction: "left",
          type: "tween",
          delay: 0.2,
          duration: 1,
        })}
        className="flex-[0.5] bg-black-100 mb-2 p-8 rounded-xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h2 className={styles.sectionHeadText}>CONTACT.</h2>

        <ContactForm />
      </motion.div>
    </section>
  );
};

export default SectionWrapper({ Component: ContactMe, idName: "contactme" });
