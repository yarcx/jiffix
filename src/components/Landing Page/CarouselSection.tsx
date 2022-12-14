import React from "react";
import { Link } from "react-router-dom";
import Safari from "../../assets/Safari Browser 1.png";
import SafariBrowser from "../../assets/Safari Browser.png";
import Dashboard from "../../assets/Safari dashboard.png";

const CorouselSection = () => {
  return (
    <section className="w-full flex flex-col gap-10 items-center justify-center ">
      {/* firstslide */}
      <div className="w-11/12 flex items-center flex-col   justify-between bg-lightGray rounded-lg  p-8 pr-10">
        <div className="flex items-center justify-around flex-col md:flex-row">
          <div className="flex  items-center  flex-col justify-center  p-6 gap-4 md:gap-10 md:p-10">
            <h1 className=" text-lg md:text-3xl font-semibold text-center md:text-center   md:w-3/5">
              Save up to 25% on your annual maintenance cost
            </h1>
            <p className="text-left md:text-center text-lg md:w-[600px]">
              Benefit from AI-powered recommendations that flag active
              warranties, wrong/false billing, sub-standard parts, fundamental
              problems in vehicles, and predict part failures with built-in
              machine learning on a simple user-friendly interface.
              <br /> Check every estimate sent by your workshop or mechanic,
              against your local repair history and global library for your
              vehicle.
            </p>
          </div>
          <div >
            <img src={Safari} alt=""/>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:pl-20   md:items-start items-center w-11/12 mt-4">
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
      {/* secondslide */}
      {/* <div className="w-11/12 flex items-center flex-col   justify-between bg-lightGray rounded-lg  p-8 md:p-10">
        <div className="flex items-center flex-col md:flex-row">
          <div className="flex items-center md:items-start flex-col justify-center w-full p-6 gap-4 md:gap-10 md:p-10">
            <h1 className=" text-lg md:text-3xl font-semibold text-center md:text-center   md:w-3/5">
              Make Decisions Easier and Faster
            </h1>
            <p className="text-left md:text-center text-lg md:w-[600px]">
              AutoHyve saves you time on reporting by making data easily
              accessible for self-service analytics, with built-in business
              intelligence Your decision does not need to depend on excel sheets
              and formulas computation which takes days and weeks. Rather, your
              decision becomes more dynamic every day with global and local
              insights.
            </p>
          </div>
          <div>
            <img src={Dashboard} alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:pl-20   md:items-start items-center w-11/12">
          <Link to="singin">
            <button className="bg-secondary w-40 h-14 rounded">
              Start FREE Trial
            </button>
          </Link>

          <Link to="singin">
            <button className="bg-primary w-44 h-14 rounded">
              Book a Demo
            </button>
          </Link>
        </div>
      </div> */}
      {/* thirdslide */}
      {/* <div className="w-11/12 flex items-center flex-col   justify-between bg-lightGray rounded-lg  p-8 md:p-10">
        <div className="flex items-center flex-col md:flex-row">
          <div className="flex items-center md:items-start flex-col justify-center w-full p-6 gap-4 md:gap-10 md:p-10">
            
            <p className="text-left md:text-center text-lg md:w-[600px]">
              AutoHyve’s easy-to-use workshops gateway enables you to connect
              directly with your trusted workshops. Streamline approvals and
              capture all repair data automatically. Benefit from our extensive
              network of trusted service providers. We work with 15 workshops
              (and growing!) across 6 cities.
            </p>
          </div>
          <div>
            <img src={SafariBrowser} alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:pl-20   md:items-start items-center w-11/12">
          <Link to="singin">
            <button className="bg-secondary w-40 h-14 rounded">
              Start FREE Trial
            </button>
          </Link>

          <Link to="singin">
            <button className="bg-primary w-44 h-14 rounded">
              Book a Demo
            </button>
          </Link>
        </div>
      </div> */}
    </section>
  );
};

export default CorouselSection;
