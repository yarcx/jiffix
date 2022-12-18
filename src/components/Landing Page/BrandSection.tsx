import React, { useEffect } from "react";
import ngk from "../assets/iPhone 8 1.png";


import Ngk from "../../assets/ngk.png";
import Total from "../../assets/total logo 1.png";
import Aws from "../../assets/Aws.png";
import Apple from "../../assets/Apple.png";
import Google from "../../assets/google-playstore.png";

const BrandSection = () => {
  
  return (
    <section className="w-full flex items-center justify-center p-10 pt-20">
      <div className="md:w-11/12 flex items-center flex-col justify-between   ">
        <div
          data-aos="zoom-in-right"
          className=" flex items-center flex-col md:gap-12 mb-10"
        >
         <div className="border-b-4 border-primary w-[80px]  md:w-[300px]  mb-12 md:my-10"></div>
          <h1 className=" text-xl md:text-3xl font-bold w-[300px] md:w-full text-center">
            Working together to Build the Future
          </h1>
        </div>
        <p data-aos="zoom-in-left" className="text-center text-base md:text-lg md:w-[550px] w-full">
          Just some of the ground breaking businesses and organizations we work in partnership with.
        </p>
        <div
          data-aos="zoom-in-left"
          className="flex justify-between items-center w-4/5 md:w-3/5 md:mb-[100px] my-20 "
        >
          <img
            src={Total}
            alt="total logo"
            className="w-[45px] h-[20px] md:w-[200px] md:h-[62.5px]"
          />
          <img
            src={Ngk}
            alt="ngk logo"
            className="w-[45px] h-[20px] md:w-[145.88px] md:h-[48.03px]"
          />
          <img src={Aws} alt="Aws logo" className="w-[45px] h-[20px] md:w-[106.65px] md:h-[65px]" />
        </div>
        <div
          data-aos="zoom-in-right"
          className=" w-full md:h-[299px] flex flex-col items-center md:flex-row justify-center md:justify-around bg-secondary rounded-xl  p-6"
        >
          <div className=" md:w-[600px] pb-10  ">
            <h1 className="md:text-2xl text-sm py-4 w-[200px] md:w-full">
              Download the Mobile Application
            </h1>
            <h2 className="font-bold  md:text-5xl text-xl w-[240px] md:w-full">
              AutoHyve is available on Appstores
            </h2>
          </div>
          <div className="flex items-center md:flex-row flex-col justify-between gap-7 mb-6 ">
            <button className="flex items-center border gap-2 border-darkGray h-[60.62px] w-[186px] p-3">
              <img src={Apple} alt="" />
              <span>Download from App Store</span>
            </button>
            <button className="flex items-center  border border-darkGray h-[60.62px] w-[186px] p-3">
              <img src={Google} alt="" className="" />
              <span>Get it on Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
