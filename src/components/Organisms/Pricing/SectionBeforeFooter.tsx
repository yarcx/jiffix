import React from "react";
import ellipse1 from "../../../assets/pricing/ellipse1.png";
import GatewayButton from "../../Atoms/Gateway/GatewayButton";

const SectionBeforeFooter = () => {
  return (
    <section className="section h-[45vh] bg-silver">
      <div className="w-11/12 mx-auto h-full flex items-center flex-col md:flex-row">
        <div className="md:w-8/12 h-full pt-10 md:pt-0 flex flex-col items-center md:items-start md:justify-center relative">
          <p className="text-md text-center md:text-left md:text-2xl mb-5">Try AutoHyve Now</p>

          <h1 className="font-bold text-3xl px-5 md:px-0 md:text-5xl text-center md:text-left leading-normal">
            Start sending estimates in just <br className="hidden md:block" /> 30 minutes
          </h1>

          {/* Small Ellipse */}
          <img
            src={ellipse1}
            alt="ellipse1"
            className="absolute left-10 top-10 w-[80px] h-[80px]  md:hidden"
          />
        </div>
        <div className="h-full flex items-center md:w-4/12 md:justify-end">
          <GatewayButton
            text="Create a free account"
            btnClass="bg-black text-white font-normal px-5 h-[65px] mt-10 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionBeforeFooter;
