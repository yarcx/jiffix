import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Safari from "../../assets/Safari Browser 1.png";
import SafariBrowser from "../../assets/Safari Browser.png";
import Dashboard from "../../assets/Safari dashboard.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CorouselSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full flex overflow-x-hidden">
      <div className="hidden w-full md:block">
        <Carousel
          autoPlay={true}
          stopOnHover={true}
          showArrows={true}
          infiniteLoop={true}
          swipeable={true}
        >
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
      data-aos-duration="1500"
      className="w-11/12 flex items-center flex-col mx-auto  md:h-[690px] justify-center bg-lightGray rounded-[40px]  p-8 pr-10"
    >
      <div className="flex items-center justify-around flex-col md:flex-row">
        <div className="flex md:1/2 items-center  flex-col justify-center   gap-5 md:gap-10 md:p-10">
          <h1 className=" text-lg md:text-3xl font-semibold text-center md:text-center   md:w-[619px]">
            Save up to 25% on your annual maintenance cost
          </h1>
          <div>
            <p className="text-left md:text-center text-lg w-[265px] md:w-[700px] my-6">
              Benefit from AI-powered recommendations that flag active warranties, wrong/false
              billing, sub-standard parts, fundamental problems in vehicles, and predict part
              failures with built-in machine learning on a simple user-friendly interface.
            </p>
            <p className="text-left md:text-center text-lg w-[265px] md:w-[700px] my-6">
              {" "}
              Check every estimate sent by your workshop or mechanic, against your local repair
              history and global library for your vehicle.
            </p>
          </div>
        </div>
        <div className="flex md:w-1/2 items-center justify-center  mb-[-50px]">
          <img src={Safari} alt="safari logo" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10  md:pl-20   md:items-start items-center w-11/12 md:mt-0 mt-20">
        <Link to="singin">
          <button className="bg-secondary w-[155px] h-[50px] md:w-[270px] md:h-[75px] rounded-lg">
            Start FREE Trial
          </button>
        </Link>

        <Link to="singin">
          <button className="bg-primary w-[155px] h-[50px] md:w-[270px] md:h-[75px] rounded-lg">
            Book a Demo
          </button>
        </Link>
      </div>
    </div>
  );
};

const SecondCarousel = () => {
  return (
    <div className="w-11/12 flex items-center flex-col mx-auto md:h-[690px] justify-center bg-lightGray rounded-[40px]  p-8 pr-10">
      <div className="flex items-center justify-around flex-col md:flex-row">
        <div className="flex  items-center  flex-col justify-center   gap-5 md:gap-16 md:p-10">
          <h1 className=" text-lg md:text-3xl font-semibold text-center md:text-center   md:w-[478px]">
            Make Decisions Easier and Faster
          </h1>
          <div className="">
            <p className="text-left md:text-center text-lg md:w-[670px] ">
              AutoHyve saves you time on reporting by making data easily accessible for self-service
              analytics, with built-in business intelligence
            </p>

            <p className="text-left md:text-center text-lg w-[265px] md:w-[700px] my-6">
              {" "}
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
      <div className="flex flex-col md:flex-row gap-10  md:pl-20   md:items-start items-center w-11/12 md:mt-0 mt-20">
        <Link to="singin">
          <button className="bg-secondary w-[155px] h-[50px] md:w-[270px] md:h-[75px] rounded-lg">
            Start FREE Trial
          </button>
        </Link>

        <Link to="singin">
          <button className="bg-primary w-[155px] h-[50px] md:w-[270px] md:h-[75px] rounded-lg">
            Book a Demo
          </button>
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
      className="w-11/12 flex items-center flex-col mx-auto justify-center   bg-lightGray rounded-[40px] md:h-[690px]  p-8 md:p-0  "
    >
      <div className="flex items-center justify-betweenm gap-6 md:gap-20 flex-col md:flex-row">
        <div className="flex items-center md:items-start flex-col justify-center md:w-[618px]  ">
          <p className="text-left md:text-center text-lg w-[265px] md:w-[618px] my-6">
            AutoHyve’s easy-to-use workshops gateway enables you to connect directly with your
            trusted workshops. Streamline approvals and capture all repair data automatically.
          </p>
          <p className="text-left md:text-center text-lg w-[265px] md:w-[618px] ">
            {" "}
            Benefit from our extensive network of trusted service providers. We work with 15
            workshops (and growing!) across 6 cities.
          </p>
        </div>
        <div className="md:w-[500px]">
          <img src={SafariBrowser} alt="safari browser logo" className="md:w-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10   md:ml-36 md:items-center items-center w-11/12 my-6 md:m-0">
        <Link to="singin">
          <button className="bg-secondary md:w-[270px] w-[155px] md:h-[75px] h-[50px] rounded-lg">
            Start FREE Trial
          </button>
        </Link>

        <Link to="singin">
          <button className="bg-primary  md:w-[270px] w-[155px] md:h-[75px] h-[50px] rounded-lg">
            Book a Demo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CorouselSection;
