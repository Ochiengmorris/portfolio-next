"use client";

import { cn } from "@/lib/utils";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType } from "react";

/* -------------------------------------------------------------------------- */
/*  Buttons: a class helper so it works on <button>, <a> and next/link alike   */
/* -------------------------------------------------------------------------- */

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-6 font-semibold " +
  "transition-all duration-300 ease-out outline-none " +
  "focus-visible:ring-2 focus-visible:ring-neu-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neu-bg";

const buttonVariants = {
  secondary:
    "bg-neu-bg text-neu-fg shadow-neu-extruded hover:-translate-y-px hover:shadow-neu-extruded-hover " +
    "active:translate-y-[0.5px] active:shadow-neu-inset-sm",
  primary:
    "bg-neu-accent text-white shadow-neu-extruded hover:-translate-y-px hover:bg-neu-accent-light hover:shadow-neu-extruded-hover " +
    "active:translate-y-[0.5px] active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2),inset_-3px_-3px_6px_rgba(255,255,255,0.15)]",
  // Square 48px target for icon-only buttons (hamburger, GitHub link…)
  icon:
    "h-12 w-12 bg-neu-bg px-0 text-neu-fg shadow-neu-extruded-sm hover:-translate-y-px hover:shadow-neu-extruded " +
    "active:translate-y-[0.5px] active:shadow-neu-inset-sm",
} as const;

export const neuButton = (variant: keyof typeof buttonVariants = "secondary") =>
  cn(buttonBase, buttonVariants[variant]);

/* -------------------------------------------------------------------------- */
/*  Surfaces                                                                   */
/* -------------------------------------------------------------------------- */

type NeuCardProps<T extends ElementType> = {
  as?: T;
  hoverable?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/** Raised surface, molded from the same material as the page. */
export const NeuCard = <T extends ElementType = "div">({
  as,
  hoverable = false,
  className,
  ...props
}: NeuCardProps<T>) => {
  const Tag: ElementType = as ?? "div";
  return (
    <Tag
      className={cn(
        "rounded-[32px] bg-neu-bg shadow-neu-extruded transition-all duration-300 ease-out",
        hoverable && "hover:-translate-y-1 hover:shadow-neu-extruded-hover",
        className,
      )}
      {...props}
    />
  );
};

const wellVariants = {
  deep: "shadow-neu-inset-deep",
  base: "shadow-neu-inset",
  sm: "shadow-neu-inset-sm",
} as const;

/** Pressed-in surface: inputs, icon wells, image frames, info panels. */
export const NeuWell = <T extends ElementType = "div">({
  as,
  variant = "base",
  className,
  ...props
}: { as?: T; variant?: keyof typeof wellVariants } & Omit<
  ComponentPropsWithoutRef<T>,
  "as"
>) => {
  const Tag: ElementType = as ?? "div";
  return (
    <Tag
      className={cn("rounded-2xl bg-neu-bg", wellVariants[variant], className)}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*  Section heading (replaces styles.sectionSubText / sectionHeadText)         */
/* -------------------------------------------------------------------------- */

export const SectionHeading = ({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) => (
  <motion.div variants={textVariant({ delay: 0 })}>
    <p className="text-sm font-medium text-neu-muted">{eyebrow}</p>
    <h2 className="mt-1 font-display text-4xl font-extrabold tracking-tight text-neu-fg md:text-6xl">
      {title}
    </h2>
  </motion.div>
);
