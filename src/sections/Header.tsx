"use client";

import SidebarImageHolder from "@/components/SidebarImageHolder";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Select the scrollable container by its ID
    const container = document.getElementById("scroll-container");

    const handleScroll = () => {
      const scrollTop = container?.scrollTop || 0; // Get scroll position from the container
      setIsScrolled(scrollTop > 1); // Update state based on scroll position
    };

    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, []);

  return (
    <section
      className={`border-b border-muted/50 w-full ${isScrolled ? "bg-[#050816] shadow" : "bg-transparent"}`}
    >
      <nav className="py-6 px-5 flex text-white/70 justify-between items-center">
        <h2 className="font-pacifico text-xl lg:text-3xl">mjonline.co.ke</h2>

        <div>
          <ul className="list-none gap-2 font-semibold items-center justify-center lg:text-lg text-base hidden md:flex">
            <Link href="/#contactme" className="hover:underline cursor-pointer">
              HIRE ME
            </Link>
          </ul>

          <button className="md:hidden" onClick={() => setShowSidebar(true)}>
            <Menu />
          </button>
        </div>
      </nav>

      <Sheet open={showSidebar} onOpenChange={() => setShowSidebar(false)}>
        <SheetContent aria-describedby="sidebar">
          <SheetHeader>
            <SheetTitle>My Portfolio</SheetTitle>
          </SheetHeader>

          <ul className="list-none lg:hidden px-2 gap-2 flex flex-col font-semibold">
            <li className="hover:bg-gray-200 rounded overflow-hidden">
              <Link
                href={""}
                className="block px-4 py-4 hover:underline cursor-pointer"
              >
                HOME
              </Link>
            </li>
            <li className="hover:bg-gray-200 rounded overflow-hidden">
              <a
                href="#"
                className="block px-4 py-4 hover:underline cursor-pointer"
              >
                BLOG
              </a>
            </li>
            <li className="hover:bg-gray-200 rounded overflow-hidden">
              <a
                href="#"
                className="block px-4 py-4 hover:underline cursor-pointer"
              >
                CONTACT ME
              </a>
            </li>

            <SidebarImageHolder />
          </ul>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Header;
