import React, { useEffect } from "react";



const SecondSection = () => {
 
  return (
    <section className="w-full flex items-center justify-center mt-20 mb-20">
      <div
        data-aos="zoom-in"
        className="flex items-center flex-col justify-center w-11/12  gap-10 md:p-10 px-5  md:mb-4"
      >
       <div className="border-b-4 border-primary w-[80px]  md:w-[300px] my-4"></div>
        <h1 className="font-bold md:text-3xl text-2xl text-center md:w-full w-[300px] ">
          AI-Powered Software and Analytics Platform for the Automotive
          Aftersales sector
        </h1>

        <p className="flex md:w-[826px] items-center text-lg text-center  w-[300px]">
          AutoHyve is the simple alternative to Email threads, Whatsapp pdf,
          spreadsheets or outdated fleet software – <br /> <br />
          It brings all your vehicles’ repair and maintenance data into one
          place, for real-time insights that can reveal cost savings in the
          management of your assets, all without the need to manage any
          infrastructure.
        </p>
      </div>
    </section>
  );
};

export default SecondSection;
