import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import Safari from "../../assets/Safari Browser 1.png";
import SafariBrowser from "../../assets/Safari Browser.png";
import Dashboard from "../../assets/Safari dashboard.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CorouselSection = () => {
  return (
    <div className="w-full flex overflow-x-hidden">
      <div className="hidden w-full md:block">
        <Carousel>
          <section className="">
            <FirstCarousel />
          </section>

          <section className="">
            <SecondCarousel />
          </section>

          {/* thirdslide */}

          <section className="">
            <ThirdCarousel />
          </section>
        </Carousel>
      </div>
      <div className="  md:hidden flex flex-col gap-16  mb-10">
        <section className="w-full flex gap-10 items-center justify-center ">
          <FirstCarousel />
        </section>

        <section className="w-full flex gap-10 items-center justify-center ">
          <SecondCarousel />
        </section>

        {/* thirdslide */}

        <section className="w-full flex gap-10 items-center justify-center ">
          <ThirdCarousel />
        </section>
      </div>
    </div>
  );
};

const FirstCarousel = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      className="w-11/12 flex items-center flex-col  mx-auto  md:h-[690px] justify-center bg-lightGray rounded-[40px]  p-8 pr-10"
    >
      <div className="flex items-center justify-start flex-col md:flex-row">
        <div className="flex  items-center  flex-col justify-start   gap-5 md:gap-16 md:p-10">
          <h1 className=" text-lg md:text-3xl font-semibold text-left md:text-center   md:w-[478px] w-[264px]">

            Save up to 25% on your annual maintenance cost
          </h1>
          <div>
            <p className="text-left md:text-center md:text-lg text-sm w-[265px] md:w-[634px] my-6">
              Benefit from AI-powered recommendations that flag active warranties, wrong/false
              billing, sub-standard parts, fundamental problems in vehicles, and predict part
              failures with built-in machine learning on a simple user-friendly interface.
            </p>
            <p className="text-left md:text-center md:text-lg text-sm w-[265px] md:w-[634px] my-6">
              {" "}
              Check every estimate sent by your workshop or mechanic, against your local repair
              history and global library for your vehicle.
            </p>
          </div>
        </div>
        <div className="flex md:w-1/2 md:items-center justify-center  mb-[-50px]">
          <img src={Safari} alt="safari logo" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10  md:pl-[20px]   md:items-start items-center w-11/12 md:mt-0 mt-20">
        <Link to="/gateway" className="relative">
          <button className="bg-secondary w-[248px] h-[75px] rounded-lg text-sm">
            Start FREE Trial
          </button>
          <span className="absolute top-5 right-14 text-[#F80000] font-light text-xs">Beta</span>
        </Link>

        <Link to="/workshop">
          <button className="bg-primary  w-[248px] h-[75px] rounded-lg text-sm">Book a Demo</button>
        </Link>
      </div>
    </div>
  );
};

const SecondCarousel = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="w-11/12 flex items-center flex-col mx-auto md:h-[690px] justify-center bg-lightGray rounded-[40px]  p-8 pr-10"
    >
      <div className="flex items-center justify-around flex-col md:flex-row">
        <div className="flex  items-center  flex-col justify-center   gap-5 md:gap-16 md:p-10">
          <h1 className=" text-lg md:text-3xl font-semibold text-left md:text-center   md:w-[478px]">
            Make Decisions Easier and Faster
          </h1>
          <div className="">
            <p className=" md:text-center text-sm md:text-lg md:w-[670px]  ">
              AutoHyve saves you time on reporting by making data easily accessible for self-service
              analytics, with built-in business intelligence
           <br/>
              Your decision does not need to depend on excel sheets and formulas computation which
              takes days and weeks. Rather, your decision becomes more dynamic every day with global
              and local insights.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center  mb-[-50px]">
          <img src={Dashboard} alt="dashboard logo" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10  md:pl-[20px]   md:items-start items-center w-11/12 md:mt-0 mt-20">
        <Link to="/gateway" className="relative">
          <button className="bg-secondary w-[248px] h-[75px] text-sm rounded-lg">
            Start FREE Trial
          </button>
          <span className="absolute top-5 right-14 text-[#F80000] font-light text-xs">Beta</span>
        </Link>

        <Link to="/workshop">
          <button className="bg-primary w-[248px] h-[75px] rounded-lg text-sm">Book a Demo</button>
        </Link>
      </div>
    </div>
  );
};

const ThirdCarousel = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="w-11/12 flex items-center flex-col mx-auto md:h-[690px] justify-center bg-lightGray rounded-[40px]  p-8 pr-10"
    >
      <div className="flex items-center justify-around flex-col md:flex-row">
        <div className="flex  items-center  flex-col justify-center   gap-5 md:gap-16 md:p-10">
          <h1 className=" text-lg md:text-3xl font-semibold text-left md:text-center w-[264px]  md:w-[478px]">

            Seamless Workshop Integration
          </h1>
          <div>
            <p className="text-left md:text-center text-sm md:text-lg w-[265px] md:w-[618px] my-6">
              AutoHyve???s easy-to-use workshops gateway enables you to connect directly with your
              trusted workshops. Streamline approvals and capture all repair data automatically.
            </p>
            <p className="text-left md:text-center text-sm md:text-lg w-[265px] md:w-[618px] ">
              {" "}
              Benefit from our extensive network of trusted service providers. We work with 15
              workshops (and growing!) across 6 cities.
            </p>
          </div>
        </div>
        <div className="md:w-[500px] mt-10 md:mt-16">
          <img src={SafariBrowser} alt="safari browser logo" className="md:w-full" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10  md:pl-[20px]   md:items-start items-center w-11/12 md:mt-0 mt-8">
        <Link to="/gateway" className="relative">
          <button className="bg-secondary w-[248px] h-[75px] rounded-lg text-sm">
            Start FREE Trial
          </button>
          <span className="absolute top-5 right-14 text-[#F80000] font-light text-xs">Beta</span>
        </Link>

        <Link to="/workshop">
          <button className="bg-primary w-[248px] h-[75px] rounded-lg">Book a Demo</button>
        </Link>
      </div>
    </div>
  );
};

export default CorouselSection;
