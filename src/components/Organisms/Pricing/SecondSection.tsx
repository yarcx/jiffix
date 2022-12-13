import React from "react";

import ellipse1 from "../../../assets/pricing/ellipse1.png";
import ellipse2 from "../../../assets/pricing/ellipse2.png";

const SecondSection = () => {
  return (
    <section className="min-h-screen bg-silver">
      <div className="mx-auto relative md:w-11/12 px-5 md:px-0 flex flex-col items-center md:flex-row min-h-[80vh] py-10">
        <img
          src={ellipse1}
          alt="ellipse1"
          className="absolute md:left-20 left-10 -top-20 md:top-0 md:w-[150px] w-[100px] h-[100px] md:h-[150px]"
        />

        {/* BIg Ellipse */}
        <img
          src={ellipse2}
          alt="ellipse1"
          className="absolute md:left-24 md:-bottom-10 md:w-[250px] w-[200px] h-[200px] left-40 -bottom-20 md:h-[250px]"
        />
        <div className="md:w-1/2 w-full md:pl-10 relative">
          <div>
            <h1 className="md:text-6xl text-2xl text-black font-bold mb-5">Do the math</h1>
            <p className="text-sm md:text-base mt-10">
              See how much it costs you to use AutoHyve. Enter an amount{" "}
              <br className="hidden md:block" /> into the calculator on the right, and see our
              charges.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 w-full h-full flex items-center justify-center">
          <div className="w-full md:w-11/12 bg-darkGray min-h-[80vh] rounded-xl mt-10 px-5 md:px-10 py-16">
            {/* Input field for money conversion */}
            <div>
              <label className="text-gray text-base font-semibold mb-5">IF A CUSTOMER PAYS</label>
              <input
                type="text"
                defaultValue=" ₦ 100,000.00"
                className="h-[70px] text-black font-bold text-2xl bg-silver rounded-md px-5 w-full mt-4 outline-0 ring-0 border-0"
              />
            </div>

            {/* Converted Money section */}
            <div className="mt-8 flex justify-between flex-col md:flex-row gap-y-5">
              <div>
                <label className="text-gray text-base font-semibold mb-5">WE’LL SETTLE YOU</label>
                <p className="text-white font-bold text-lg"> ₦ 96,500.00</p>
              </div>
              <div>
                <label className="text-gray text-base font-semibold mb-5">AUTOHYVE FEE’S</label>
                <p className="text-white font-bold text-lg"> ₦ 3,500.00</p>
              </div>
            </div>

            {/* What you get */}
            <div className="mt-10">
              <div className="py-5 px-2 mb-5 border-b text-base border-primary text-white">
                Free, automatic settlement within 5 minutes
              </div>
              <div className="py-5 px-2 mb-5 border-b text-base border-primary text-white">
                Fee capped at ₦ 5,000.00
              </div>
              <div className="py-5 px-2 mb-5 border-b text-base border-primary text-white">
                No hidden fees or charges
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
