"use client";

import { ContactForm } from "@/components/Form";
import { NeuCard, SectionHeading } from "./Neumo";
import { contactDetails } from "@/constants/constants";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const details = [
  {
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: contactDetails.phone,
    href: contactDetails.phoneHref,
    Icon: Phone,
  },
  { label: "Based in", value: contactDetails.location, Icon: MapPin },
];

const ContactMe = () => {
  return (
    <NeuCard as="section" className="relative overflow-hidden p-8 md:p-12">
      {/* Decorative concentric circles replace the particle canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 hidden xl:block"
      >
        <div className="grid h-96 w-96 place-items-center rounded-full shadow-neu-inset-deep">
          <div className="grid h-64 w-64 place-items-center rounded-full shadow-neu-extruded motion-safe:animate-float">
            <div className="h-32 w-32 rounded-full shadow-neu-inset-deep" />
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-12 xl:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Get in Touch" title="CONTACT." />

          <p className="mt-4 max-w-md leading-relaxed text-neu-muted">
            Have a project in mind or a question? Send a message and I&apos;ll
            reply as soon as I can.
          </p>

          <ul className="mt-10 space-y-6">
            {details.map(({ label, value, href, Icon }) => (
              <li key={label} className="flex items-center gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-neu-accent shadow-neu-inset-deep">
                  <Icon aria-hidden className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-neu-muted">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="break-words rounded font-semibold text-neu-fg outline-none transition-colors duration-300 hover:text-neu-accent focus-visible:ring-2 focus-visible:ring-neu-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neu-bg"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold text-neu-fg">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          variants={slideIn({
            direction: "left",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
        >
          <NeuCard className="p-8">
            {/* Style the fields with neuInput, see Form notes */}
            <ContactForm />
          </NeuCard>
        </motion.div>
      </div>
    </NeuCard>
  );
};

export default SectionWrapper({ Component: ContactMe, idName: "contactme" });
