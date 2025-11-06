import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import IoTRoadblocks from "@/components/IoTRoadblocks";
import NetworkCoverage from "@/components/NetworkCoverage";
import Capabilities from "@/components/Capabilities";
import IndustrySolutions from "@/components/IndustrySolutions";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <section id="about">
        <About />
      </section>
      <IoTRoadblocks />
      <NetworkCoverage />
      <section id="capabilities">
        <Capabilities />
      </section>
      <section id="industries">
        <IndustrySolutions />
      </section>
      <Highlights />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
