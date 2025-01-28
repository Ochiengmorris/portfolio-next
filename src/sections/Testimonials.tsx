"use client";

import { testimonials } from "@/constants/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";
import { motion } from "framer-motion";
import Image from "next/image";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}) => (
  <motion.div
    variants={fadeIn({
      direction: "left",
      type: "spring",
      delay: index * 0.5,
      duration: 0.75,
    })}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">&quot;</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} at {company}
          </p>
        </div>

        <Image
          src={image}
          alt={`feedback_by-${name}`}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="py-4 bg-transparent rounded-xl px-6">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant({ delay: 0 })}>
          <p className="sm:text-[18px] text-white text-[14px] uppercase tracking-wider">
            What others say
          </p>
          <h2 className="md:text-[60px] text-white sm:text-[50px] xs:text-[40px] text-[30px] mb-8 font-black">
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper({
  Component: Testimonials,
  idName: "testimonials",
});
