"use client";

import SidebarImageHolder from "@/components/SidebarImageHolder";
// import { neuButton } from "@/components/ui/neu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { neuButton } from "./Neumo";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "BLOG", href: "#" },
  { label: "CONTACT ME", href: "/#contactme" },
];

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container");

    const handleScroll = () => {
      setIsScrolled((container?.scrollTop || 0) > 1);
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-neu-bg/80 backdrop-blur-md transition-shadow duration-300 ease-out",
        isScrolled ? "shadow-neu-extruded-sm" : "shadow-none",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"
      >
        <Link
          href="/"
          className="rounded-xl font-display text-xl font-extrabold tracking-tight text-neu-fg outline-none focus-visible:ring-2 focus-visible:ring-neu-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neu-bg lg:text-3xl"
        >
          mjonline.co.ke
        </Link>

        <Link
          href="/#contactme"
          className={cn(neuButton("secondary"), "hidden md:inline-flex")}
        >
          REACH OUT
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          className={cn(neuButton("icon"), "md:hidden")}
          onClick={() => setShowSidebar(true)}
        >
          <Menu aria-hidden className="h-5 w-5" />
        </button>
      </nav>

      <Sheet open={showSidebar} onOpenChange={setShowSidebar}>
        <SheetContent
          aria-describedby={undefined}
          className="rounded-l-[32px] border-0 bg-neu-bg shadow-neu-extruded"
        >
          <SheetHeader>
            <SheetTitle className="font-display text-xl font-extrabold tracking-tight text-neu-fg">
              My Portfolio
            </SheetTitle>
          </SheetHeader>

          <ul className="mt-6 flex list-none flex-col gap-4 px-2">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setShowSidebar(false)}
                  className={cn(neuButton("secondary"), "w-full justify-start")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 px-2">
            <SidebarImageHolder />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
