"use client";

import LanguageProficiency from "@/components/LanguageProficiency";
import { NeuCard, NeuWell, SectionHeading } from "./Neumo";
import { SectionWrapper } from "@/hoc";
import { Fragment } from "react";

const personalInfo = [
  { label: "FULL NAME", value: "John Oduya" },
  { label: "D.O.B", value: "April 2003" },
  { label: "ADDRESS", value: "Nairobi, Kenya" },
  {
    label: "E-MAIL",
    value: "oduyajohn66@gmail.com",
    href: "mailto:oduyajohn66@gmail.com",
  },
  { label: "PHONE", value: "+254 742 642356", href: "tel:+254742642356" },
];

const Skills = () => {
  return (
    <NeuCard as="section" className="p-8 md:p-12">
      <SectionHeading eyebrow="Introduction" title="OVERVIEW." />

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <NeuWell variant="deep" className="p-8">
          <h3 className="mb-6 font-display text-xl font-bold tracking-tight text-neu-fg">
            Personal Information
          </h3>
          <dl className="grid grid-cols-[6.5rem_1fr] gap-x-6 gap-y-4 text-sm">
            {personalInfo.map(({ label, value, href }) => (
              <Fragment key={label}>
                <dt className="font-bold text-neu-fg">{label}</dt>
                <dd className="break-words text-neu-muted">
                  {href ? (
                    <a
                      href={href}
                      className="rounded outline-none transition-colors duration-300 hover:text-neu-accent focus-visible:ring-2 focus-visible:ring-neu-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neu-bg"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </Fragment>
            ))}
          </dl>
        </NeuWell>

        <NeuWell variant="deep" className="p-8">
          <h3 className="mb-6 font-display text-xl font-bold tracking-tight text-neu-fg">
            Languages
          </h3>
          <ul className="space-y-5">
            <LanguageProficiency
              language="English"
              dotsFilled={9}
              totalDots={10}
              proficiency="fluent"
            />
            <LanguageProficiency
              language="Swahili"
              dotsFilled={9}
              totalDots={10}
              proficiency="native"
            />
            <LanguageProficiency
              language="Duruma"
              dotsFilled={6}
              totalDots={10}
              proficiency="native"
            />
          </ul>
        </NeuWell>
      </div>
    </NeuCard>
  );
};

export default SectionWrapper({ Component: Skills, idName: "skills" });
