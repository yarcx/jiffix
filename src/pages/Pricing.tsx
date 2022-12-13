import React from "react";
import GatewayNavbar from "../components/Molecules/GatewayNavbar/GatewayNavbar";
import HeroSection from "../components/Organisms/Pricing/HeroSection";
import SecondSection from "../components/Organisms/Pricing/SecondSection";

const Pricing = () => {
  return (
    <div className="overflow-hidden font-monts">
      <GatewayNavbar pricing={true} />
      <HeroSection />
      <SecondSection />
    </div>
  );
};

export default Pricing;
