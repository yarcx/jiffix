import React from "react";
import { Link } from "react-router-dom";

import { TruckIcon } from "../components/Atoms/Icons";
import Hero from "../components/Landing Page/Hero";
import SecondSection from "../components/Landing Page/SecondSection";
import CorouselSection from "../components/Landing Page/CarouselSection";
import BusinessSection from "../components/Landing Page/BusinessSection";
import CarSection from "../components/Landing Page/CarSection";
import BrandSection from "../components/Landing Page/BrandSection";
import Footer from "../components/Organisms/Gateway/Footer";

const Home = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <Hero />
        <SecondSection />
        <CorouselSection />
        <BusinessSection />
        <CarSection />
        <BrandSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
