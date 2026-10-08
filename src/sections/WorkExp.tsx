"use client";

import { NeuCard, SectionHeading } from "@/sections/Neumo";
import { experiences } from "@/constants/constants";
import { SectionWrapper } from "@/hoc";
import Image, { StaticImageData } from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

interface Experience {
  date: string;
  icon: StaticImageData;
  iconBg: string;
  company_name: string;
  title: string;
  points: string[];
}

// The timeline lib only accepts inline styles, so tokens are mirrored here.
// Keep these in sync with the neu-* values in your Tailwind config.
const NEU_BG = "#E0E5EC";
const SHADOW_EXTRUDED =
  "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)";
const SHADOW_INSET_DEEP =
  "inset 10px 10px 20px rgb(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6)";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: NEU_BG,
        color: "#3D4852",
        borderRadius: 32,
        boxShadow: SHADOW_EXTRUDED,
        padding: "2rem",
      }}
      contentArrowStyle={{ borderRight: `7px solid ${NEU_BG}` }}
      date={experience.date}
      dateClassName="!text-neu-muted font-medium"
      // Icon sits in a deep "drilled" well; iconBg is kept as the logo's tile.
      iconStyle={{
        background: NEU_BG,
        boxShadow: SHADOW_INSET_DEEP,
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="flex h-[70%] w-[70%] items-center justify-center rounded-full"
            style={{ background: experience.iconBg }}
          >
            <Image
              src={experience.icon}
              alt={experience.company_name}
              className="h-[60%] w-[60%] object-contain"
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className="font-display text-2xl font-bold tracking-tight text-neu-fg">
          {experience.title}
        </h3>
        <p
          className="text-base font-semibold text-neu-muted"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 ml-5 list-disc space-y-2 marker:text-neu-accent">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="pl-1 text-sm leading-relaxed tracking-wide text-neu-fg"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const WorkExp = () => {
  return (
    <NeuCard as="section" className="p-8 md:p-16">
      <div className="text-center">
        <SectionHeading
          eyebrow="What I have done so far"
          title="Work Experience."
        />
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="rgb(163,177,198,0.6)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </NeuCard>
  );
};

export default SectionWrapper({ Component: WorkExp, idName: "work-exp" });
