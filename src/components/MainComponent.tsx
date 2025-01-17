import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import WorkExp from "@/sections/WorkExp";
import React from "react";
import Interests from "./Interests";
import Portfolio from "@/sections/Portfolio";
import ContactMe from "@/sections/ContactMe";
import MapComponent from "@/sections/MapComponent";
import HeaderLinks from "./HeaderLinks";

const MainComponent = () => {
  return (
    <div
      className="overflow-y-auto px-1 tracking-wider"
      style={{ scrollbarWidth: "none" }}
    >
      <Header />

      <div className="xl:hidden">
        <HeaderLinks mediaClasses="flex bg-muted" />
      </div>

      <Hero />

      <Skills />

      <WorkExp />

      <div className="px-6 py-4 mb-2 shadow-md bg-card">
        <h2 className="lg:text-4xl text-2xl font-semibold mb-8">INTERESTS</h2>

        <Interests />
      </div>

      <Portfolio />

      <ContactMe />

      <MapComponent />
    </div>
  );
};

export default MainComponent;
