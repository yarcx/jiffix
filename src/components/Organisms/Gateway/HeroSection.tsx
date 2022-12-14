import React, { useEffect } from "react";
import GatewayButton from "../../Atoms/Gateway/GatewayButton";

import company1 from "../../../assets/gateway/logo_cfao_1.png";
import company2 from "../../../assets/gateway/logo_cfao_2.png";
import company3 from "../../../assets/gateway/logo_cfao_3.png";
import company4 from "../../../assets/gateway/logo_cfao_4.png";
import heroBanner from "../../../assets/gateway/bannerImg.png";
import ellipse1 from "../../../assets/gateway/ellipse1.png";
import { Link } from "react-router-dom";

const HeroImages = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <img
      src={src}
      className="hover:scale-110 cursor-pointer transition-all md:w-full sm:w-full"
      alt={alt}
    />
  );
};

const HeroSection = () => {
  return (
    <section className="font-monts">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="linear"
        className="mx-auto relative  min-h-screen bg-white items-start pt-16 md:pt-24  flex md:w-11/12 px-5 md:px-0"
      >
        {/* left side */}
        <div className="w-full md:w-6/12 relative ">
          <img
            src={ellipse1}
            alt="hero ellipse"
            className="hidden md:block absolute right-0 -top-12"
          />
          {/* Hero header section */}
          <div>
            <h1 className="font-bold text-[35px] md:text-[44px] text-black leading-tight">
              The Operating System for <br /> Automotive <br className="md:hidden block" /> Service
              <br className="md:block hidden" />
              Providers
            </h1>
            <p className="font-normal text-lg my-8 leading-8">
              Send Estimates/Invoices seamlessly, access vehicle data for
              <br className="md:block hidden" /> improved diagnostics and collect payments 3X faster
            </p>
          </div>
          {/* Button sections */}
          <div className="mb-8 mt-20 flex items-cneter md:justify-start justify-between gap-x-4 md:gap-x-7">
            <Link to="/business">
              <GatewayButton
                text="Create a free account"
                btnClass="bg-orange h-[60px] md:h-[70px] px-4 md:px-6 text-center flex items-center justify-center w-[180px]  md:w-[240px]"
              />
            </Link>
            <Link to="/workshop">
              <GatewayButton
                text="Request Demo"
                btnClass="bg-silver h-[60px] md:h-[70px] px-6 md:px-6 text-center flex items-center justify-center w-[180px]  md:w-[240px]"
              />
            </Link>
          </div>

          {/* dashboard Image that shows on mobile */}
          <div className="md:hidden my-16">
            <img src={heroBanner} alt="hero Banner" className="aspect-auto" />
          </div>
          {/* Trusted by companies */}
          <div className="flex md:items-start md:mt-8 items-center flex-col justify-center md:justify-start">
            <p className="font-normal text-xs md:text-sm leading-8">
              TRUSTED BY REPUTABLE WORKSHOPS
            </p>
            <div className="my-3 flex items-center gap-x-3 sm:gap-x-4 md:gap-x-8 ">
              <HeroImages src={company1} alt="first company" />
              <HeroImages src={company2} alt="second company" />
              <HeroImages src={company3} alt="third company" />
              <HeroImages src={company4} alt="fourth company" />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-full hidden md:w-6/12 h-full md:flex items-stretch pt-10">
          <img src={heroBanner} alt="hero Banner" className="aspect-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
