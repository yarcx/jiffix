import React from "react";
import GatewayNavbar from "../components/Molecules/GatewayNavbar/GatewayNavbar";
import HeroSection from "../components/Organisms/Pricing/HeroSection";

const Pricing = () => {
  return (
    <div>
      <GatewayNavbar pricing={true} />
      <HeroSection />
    </div>
  );
};

export default Pricing;
