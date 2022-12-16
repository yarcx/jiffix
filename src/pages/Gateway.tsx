import React, { FC, useEffect } from "react";
import GatewayNavbar from "../components/Molecules/GatewayNavbar/GatewayNavbar";
import HeroSection from "../components/Organisms/Gateway/HeroSection";
import SecondSection from "../components/Organisms/Gateway/SecondSection";
import {
  FifthSection,
  FourthSection,
  ThirdSection,
} from "../components/Organisms/Gateway/MidSection";
import GetStartedSection from "../components/Organisms/Gateway/GetStartedSection";
import SectionBeforeFooter from "../components/Organisms/Gateway/SectionBeforeFooter";
import Footer from "../components/Organisms/Gateway/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Gateway: FC = () => {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      // once: true,
    });
  }, []);
  return (
    <div className="font-monts overflow-hidden">
      <GatewayNavbar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <GetStartedSection />
      {/* <SectionBeforeFooter /> */}
      <Footer />
    </div>
  );
};

export default Gateway;
