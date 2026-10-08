"use client";

// import { NeuCard, SectionHeading } from "@/components/ui/neu";
import { testimonials } from "@/constants/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { NeuCard, SectionHeading } from "./Neumo";

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
    className="h-full"
  >
    <NeuCard as="figure" hoverable className="flex h-full flex-col p-8">
      {/* Icon well: drilled into the card */}
      <div
        aria-hidden
        className="grid h-14 w-14 place-items-center rounded-2xl bg-neu-bg font-display text-4xl font-extrabold leading-none text-neu-accent shadow-neu-inset-deep"
      >
        <span className="translate-y-1">&quot;</span>
      </div>

      <blockquote className="mt-6 text-base leading-relaxed text-neu-fg">
        {testimonial}
      </blockquote>

      <figcaption className="mt-auto flex items-center justify-between gap-4 pt-8">
        <div className="min-w-0">
          <p className="font-display font-bold tracking-tight text-neu-fg">
            <span className="text-neu-accent">@</span> {name}
          </p>
          <p className="mt-1 text-xs text-neu-muted">
            {designation} at {company}
          </p>
        </div>

        <div className="shrink-0 rounded-full p-1 shadow-neu-inset-sm">
          <Image
            src={image}
            alt={`${name}, who left this feedback`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </figcaption>
    </NeuCard>
  </motion.div>
);

const Testimonials = () => {
  return (
    <NeuCard as="section" className="p-8 md:p-12">
      <SectionHeading eyebrow="What others say" title="Testimonials." />

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </NeuCard>
  );
};

export default SectionWrapper({
  Component: Testimonials,
  idName: "testimonials",
});
