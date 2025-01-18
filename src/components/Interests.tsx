"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { BookAudio, Coffee, Goal, Medal, Music4, Palmtree } from "lucide-react";

const Interests = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-6"
      >
        <div className="flex flex-col gap-1  justify-center">
          <Goal size={28} className="text-[#76c7c0]" />
          <p className="font-semibold text-gray-400">Sports</p>
        </div>
        <div className="flex flex-col gap-1  justify-center">
          <Music4 size={28} className="text-[#76c7c0]" />
          <p className="font-semibold text-gray-400">Music</p>
        </div>
        <div className="flex flex-col gap-1  justify-center">
          <Palmtree size={28} className="text-[#76c7c0]" />
          <p className="font-semibold text-gray-400">Travel</p>
        </div>
        <div className="flex flex-col gap-1  justify-center">
          <BookAudio size={28} className="text-[#76c7c0]" />
          <p className="font-semibold text-gray-400">Learn</p>
        </div>
        <div className="flex flex-col gap-1  justify-center">
          <Coffee size={28} className="text-[#76c7c0]" />
          <p className="font-semibold text-gray-400">Coffee</p>
        </div>
        <div className="flex flex-col gap-1  justify-center">
          <Medal size={28} className="text-[#76c7c0]" />
          <p className="font-semibold text-gray-400">Work-Out</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Interests;
