"use client";

import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Header = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <section className="border-b border-gray-700/20">
      <nav className="py-6 px-5 flex justify-between items-center">
        <h2 className="font-pacifico text-xl lg:text-3xl">mjonline.co.ke</h2>

        <div>
          <ul className="list-none gap-2 font-semibold items-center justify-center lg:text-lg text-base hidden md:flex">
            <Link href="/" className="hover:underline cursor-pointer">
              HOME
            </Link>
            <Link href="/about" className="hover:underline cursor-pointer">
              ABOUT
            </Link>
            <Link href="/contact" className="hover:underline cursor-pointer">
              CONTACT
            </Link>
          </ul>

          <button className="md:hidden" onClick={() => setShowSidebar(true)}>
            <Menu />
          </button>
        </div>
      </nav>

      <Sheet open={showSidebar} onOpenChange={() => setShowSidebar(false)}>
        <SheetContent>
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
          </ul>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Header;
