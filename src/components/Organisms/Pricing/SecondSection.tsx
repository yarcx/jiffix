import React, { useState } from "react";

import ellipse1 from "../../../assets/pricing/ellipse1.png";
import ellipse2 from "../../../assets/pricing/ellipse2.png";
import { formatAmount } from "../../../lib/data";

const CappedAmount = "5000";

const SecondSection = () => {
  const [percentValues, setPercentValues] = useState<{ settleYou: unknown; hyveFee: unknown }>({
    settleYou: "3,500",
    hyveFee: "96,500",
  });
  const calculatePercentage = (percentage: number) => {
    let perc = Math.floor((3.5 / 100) * percentage);
    if (Number.isNaN(percentage)) {
      setPercentValues({ settleYou: "0", hyveFee: "0" });
    } else {
      setPercentValues({
        settleYou: perc > Number(CappedAmount) ? CappedAmount : formatAmount(perc) + "",
        hyveFee: formatAmount(percentage - perc) + "",
      });
    }
  };

  return (
    <section className="min-h-screen bg-silver">
      <div className="mx-auto relative md:w-11/12 px-5 md:px-0 flex flex-col items-center md:flex-row min-h-[80vh] pt-20 pb-28">
        <img
          src={ellipse1}
          data-aos="zoom-in-up"
          alt="ellipse1"
          className="absolute md:left-20 left-10 -top-20 md:top-0 md:w-[150px] w-[100px] h-[100px] md:h-[150px]"
        />

        {/* BIg Ellipse */}
        <img
          src={ellipse2}
          data-aos="zoom-in-down"
          alt="ellipse1"
          className="absolute md:left-24 md:-bottom-10 md:w-[250px] w-[200px] h-[200px] left-40 -bottom-20 md:h-[250px]"
        />
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="md:w-1/2 w-full md:pl-10 relative"
        >
          <div>
            <h1 className="md:text-6xl text-3xl text-black font-bold mb-5">Do the math</h1>
            <p className="text-sm md:text-base hidden md:block mt-10">
              See how much it costs you to use AutoHyve. Enter an amount{" "}
              <br className="hidden md:block" /> into the calculator on the right, and see our
              charges.
            </p>
            <p className="text-base md:text-base md:hidden block mt-10">
              See how much it costs you to use <br />
              AutoHyve. Enter an amount into the calculator below, and see our charges.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 w-full h-full flex items-center justify-center">
          <div
            data-aos="fade-up-left"
            data-aos-duration="500"
            data-aos-easing="linear"
            className="w-full md:w-11/12 bg-secondGray min-h-[74vh] rounded-xl mt-10 px-7 md:px-14 pt-10 pb-16 overflow-hidden"
          >
            {/* Input field for money conversion */}
            <div>
              <label className="text-gray text-base font-semibold mb-5">IF A CUSTOMER PAYS</label>
              <div className="h-[70px] bg-silver flex items-center gap-x-2 rounded-md w-full  px-5  mt-4">
                <span className="text-black font-bold text-2xl"> ₦ </span>
                <input
                  type="number"
                  onChange={(e) => calculatePercentage(e.target.valueAsNumber)}
                  placeholder="100,000.00"
                  className=" text-black font-bold text-2xl bg-silver w-full  outline-0 ring-0 placeholder:text-black border-0"
                />
              </div>
            </div>

            {/* Converted Money section */}
            <div className="mt-8 flex justify-between flex-col md:flex-row gap-y-5">
              <div className="md:max-w-[200px] overflow-hidden">
                <label className="text-gray text-base font-semibold mb-5">WE’LL SETTLE YOU</label>
                <p className="text-white font-bold text-xl">
                  ₦ <span>{percentValues?.hyveFee as string}</span>
                  .00
                </p>
              </div>
              <div className="md:max-w-[200px] overflow-hidden">
                <label className="text-gray text-base font-semibold mb-5">
                  AUTOHYVE FEES (3.5%)
                </label>
                <p className="text-white font-bold text-xl">
                  ₦ <span>{percentValues?.settleYou as string}</span>
                  .00
                </p>
              </div>
            </div>

            {/* What you get */}
            <div className="mt-10">
              <div className="py-5 px-2  border-b text-base border-primary text-white">
                Free, automatic settlement within 5 minutes
              </div>
              <div className="py-5 px-2 border-b text-base border-primary text-white">
                Fee capped at ₦ 5,000.00
              </div>
              <div className="py-5 px-2 border-b text-base border-primary text-white">
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
