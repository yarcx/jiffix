import React, { useEffect } from "react";
import GatewayNavbar from "../components/Molecules/GatewayNavbar/GatewayNavbar";
import Footer from "../components/Organisms/Gateway/Footer";
import HeroSection from "../components/Organisms/Pricing/HeroSection";
import {
  FifthSection,
  FourthSection,
  SixtSection,
  Thirdsection,
} from "../components/Organisms/Pricing/Midsection";
import SecondSection from "../components/Organisms/Pricing/SecondSection";
import SectionBeforeFooter from "../components/Organisms/Pricing/SectionBeforeFooter";
import Aos from "aos";

const Pricing = () => {
  useEffect(() => {
    Aos.init({
      startEvent: "DOMContentLoaded",
      // once: true,
    });
  }, []);
  return (
    <div className="overflow-hidden font-monts">
      <GatewayNavbar pricing={true} />
      <HeroSection />
      <SecondSection />
      <Thirdsection />
      <FourthSection />
      <FifthSection />
      <SixtSection />
      <SectionBeforeFooter />
      <Footer />
    </div>
  );
};

export default Pricing;
