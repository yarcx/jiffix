import React, { FC } from "react";
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

const Gateway: FC = () => {
  return (
    <div>
      <GatewayNavbar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <GetStartedSection />
      <SectionBeforeFooter />
    </div>
  );
};

export default Gateway;
