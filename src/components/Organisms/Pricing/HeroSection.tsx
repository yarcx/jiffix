import React from "react";
import ellipse1 from "../../../assets/pricing/ellipse1.png";
import ellipse2 from "../../../assets/pricing/ellipse2.png";

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: "rgba(251, 169, 26, 0.2)" }} className=" font-monts">
      <div className="mx-auto relative  min-h-screen bg-[rgba(251, 169, 26, 0.2)] items-center pt-10   md:w-11/12 px-5 md:px-0 place-items-center grid font-monts">
        <div className="w-[51%] mt-28 h-[70%] relative">
          <img
            src={ellipse1}
            alt="ellipse1"
            className="absolute left-20 -top-28 w-[200px] h-[200px]"
          />
          <img
            src={ellipse2}
            alt="ellipse1"
            className="absolute -right-24 -bottom-10 -z-10 w-[400px] h-[400px]"
          />
          <div className="w-full h-full text-center">
            <p className="text-base">
              Pricing for <span className="font-bold ">Nigeria</span>
            </p>

            <h2 className="text-4xl font-bold text-black my-3">Simple, fair Pricing</h2>

            <p className="text-lg my-2">AutoHyve only makes money when you do.</p>

            <div className="bg-white w-9/12 my-5 mx-auto rounded-[40px] h-[50%] px-7 py-7 flex flex-col justify-start">
              <div className="flex items-center justify-start px-7 gap-x-10">
                <div>
                  <p className="text-sm mb-2">For all transactions</p>
                  <h2 className="font-bold text-3xl">3.5%</h2>
                </div>
                <div>
                  <p className="text-sm mb-2 text-left">Capped at</p>
                  <h2 className="font-bold text-3xl">₦ 5,000.00</h2>
                </div>
              </div>
              <div className="text-sm my-4 text-left border-b-primary border"></div>
              <div className="mt-3">
                <p className="text-center text-sm">
                  All transactions are capped at <span className="font-bold">₦ 5,000.00,</span>{" "}
                  meaning that's <br />
                  the absolute maximum we'll ever take in fees per transaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
