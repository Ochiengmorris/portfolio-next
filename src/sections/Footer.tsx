"use client";

import { NeuCard, NeuWell, neuButton } from "@/sections/Neumo";
import Link from "next/link";
import { FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

// TODO: replace with your real details.
const NAME = "John Oduya";
const EMAIL = "oduyajohn66@gmail.com";
const SOCIALS = [
  { href: "https://github.com/your-handle", label: "GitHub", icon: FaGithub },
  {
    href: "https://linkedin.com/in/johnoduya",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
];

const NAV = [
  { href: "/#hero", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#work-exp", label: "Experience" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contactme", label: "Contact" },
];

const linkClass =
  "rounded-xl px-1 py-1 text-neu-muted transition-colors duration-300 ease-out " +
  "hover:text-neu-fg outline-none focus-visible:ring-2 focus-visible:ring-neu-accent " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-neu-bg";

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-12 pt-16 md:px-8">
      <NeuCard className="p-8 md:p-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl font-extrabold tracking-tight text-neu-fg">
              {NAME}
            </p>
            <p className="mt-3 max-w-xs text-neu-muted">
              Building thoughtful, tactile web experiences. Let&apos;s make
              something together.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="font-display text-sm font-bold uppercase tracking-widest text-neu-fg">
              Explore
            </p>
            <ul className="mt-4 grid list-none grid-cols-2 gap-x-6 gap-y-2">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-neu-fg">
              Connect
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email me"
                title="Email me"
                className={neuButton("icon")}
              >
                <IoMailOutline size={22} aria-hidden="true" />
              </a>
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className={neuButton("icon")}
                >
                  <Icon size={22} aria-hidden="true" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className={`${linkClass} mt-4 inline-block`}
            >
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Carved divider */}
        <NeuWell variant="sm" className="my-10 h-3 w-full rounded-full" />

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-neu-muted">
            © {new Date().getFullYear()} {NAME}. All rights reserved.
          </p>
          <Link
            href="/#hero"
            aria-label="Back to top"
            className={neuButton("secondary")}
          >
            <FiArrowUp aria-hidden="true" />
            Back to top
          </Link>
        </div>
      </NeuCard>
    </footer>
  );
};

export default Footer;
