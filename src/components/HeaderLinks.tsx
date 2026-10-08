"use client";

// import { neuButton } from "./Neumo";
import { cn } from "@/lib/utils";
import { neuButton } from "@/sections/Neumo";
import { motion } from "framer-motion";
import Link from "next/link";
import type { IconType } from "react-icons";
import { BsChatLeftQuote, BsInfoSquare } from "react-icons/bs";
import { GiLeafSkeleton } from "react-icons/gi";
import { GoFileMedia } from "react-icons/go";
import { IoBriefcaseOutline, IoMailOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

// Single source of truth for nav items (the footer can reuse this shape).
const links: { href: string; label: string; icon: IconType }[] = [
  { href: "/#hero", label: "About", icon: BsInfoSquare },
  { href: "/#skills", label: "Skills", icon: GoFileMedia },
  { href: "/#work-exp", label: "Work experience", icon: IoBriefcaseOutline },
  { href: "/#portfolio", label: "Portfolio", icon: BsChatLeftQuote },
  { href: "/#testimonials", label: "Testimonials", icon: GiLeafSkeleton },
  { href: "/#contactme", label: "Contact me", icon: IoMailOutline },
];

const HeaderLinks = ({ mediaClasses }: { mediaClasses: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ul
      ref={ref}
      aria-label="Primary"
      className={cn(
        "list-none items-center justify-center gap-4 p-5 md:gap-6",
        mediaClasses,
      )}
    >
      {links.map(({ href, label, icon: Icon }, index) => (
        <motion.li
          key={href}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.07 }}
        >
          {/* Icon-only links need an accessible name */}
          <Link
            href={href}
            aria-label={label}
            title={label}
            className={neuButton("icon")}
          >
            <Icon size={22} aria-hidden="true" />
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default HeaderLinks;
