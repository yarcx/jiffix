import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const Hero = () => {
  
  return (
    <section className="w-full bg-hero h-[86vh] bg-no-repeat bg-cover">
      <div className="linear_back  md:md_back h-full items-center flex flex-col justify-center w-full">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="w-11/12 flex items-center justify-center md:items-start flex-col   "
        >
          <h1 className="md:text-5xl text-3xl p-8 md:p-0 font-bold w-[311px] md:w-[681px] md:pr-4 text-center md:text-left ">
            Be in Control of your greatest Assets
          </h1>
          <p className="text-xl font-normal md:w-[594px] md:text-left text-center w-[285px] my-10">
            The most intelligent way for Businesses to centralize all vehicle repair data in one
            place and uncover cost-saving insights
          </p>
          <Link to="/gateway" className="relative">
            <button className="bg-secondary w-[248px] h-[75px] rounded">Start FREE Trial</button>
            <span className="absolute top-4 right-12 text-[#F80000] font-light text-xs">Beta</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
