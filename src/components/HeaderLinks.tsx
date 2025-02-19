"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsChatLeftQuote, BsInfoSquare } from "react-icons/bs";
import { GiLeafSkeleton } from "react-icons/gi";
import { GoFileMedia } from "react-icons/go";
import { IoBriefcaseOutline, IoMailOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

const HeaderLinks = ({ mediaClasses }: { mediaClasses: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={`list-none ${mediaClasses} gap-4 md:gap-10 justify-center items-center p-5`}
    >
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Link href={"/#hero"}>
          <BsInfoSquare size={32} />
        </Link>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Link href={"/#skills"}>
          <GoFileMedia size={32} />
        </Link>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Link href={"/#work-exp"}>
          <IoBriefcaseOutline size={32} />
        </Link>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Link href={"/#portfolio"}>
          <BsChatLeftQuote size={32} />
        </Link>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Link href={"/#testimonials"}>
          <GiLeafSkeleton size={32} />
        </Link>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Link href={"/#contactme"}>
          <IoMailOutline size={32} />
        </Link>
      </motion.li>
    </div>
  );
};

export default HeaderLinks;
