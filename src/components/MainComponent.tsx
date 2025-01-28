import ContactMe from "@/sections/ContactMe";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import MapComponent from "@/sections/MapComponent";
import Portfolio from "@/sections/Portfolio";
import Skills from "@/sections/Skills";
import Testimonials from "@/sections/Testimonials";
import WorkExp from "@/sections/WorkExp";
import HeaderLinks from "./HeaderLinks";

const MainComponent = () => {
  return (
    <div
      className="overflow-y-auto mr-1 relative tracking-wider"
      style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
      id="scroll-container"
    >
      <div className="sticky top-0 z-20">
        <Header />
      </div>

      <div className="px-1">
        <div className="xl:hidden mt-1">
          <HeaderLinks mediaClasses="flex bg-muted" />
        </div>

        <Hero />

        <Skills />

        <WorkExp />

        <Portfolio />

        <Testimonials />

        <ContactMe />

        <MapComponent />
      </div>
    </div>
  );
};

export default MainComponent;
