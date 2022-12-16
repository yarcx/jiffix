import React from "react";
import ellipse1 from "../../../assets/pricing/ellipse1.png";
import ellipse2 from "../../../assets/pricing/ellipse2.png";

const HeroSection = () => {
  return (
    <section style={{ backgroundColor: "rgba(251, 169, 26, 0.2)" }} className=" ">
      <div
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="linear"
        className="mx-auto relative min-h-screen md:min-h-screen items-center pt-10 md:pb-10 md:w-11/12 px-5 md:px-0 place-items-center grid font-monts"
      >
        <div className="md:w-[51%] -mt-10 md:mt-20 h-[70%] relative">
          {/* Small Ellipse */}
          <img
            src={ellipse1}
            alt="ellipse1"
            className="absolute md:left-20 left-10 -top-20 md:-top-28 md:w-[200px] w-[100px] h-[100px] md:h-[200px]"
          />
          <img
            src={ellipse1}
            alt="ellipse1"
            className="block md:hidden absolute right-10 top-0  md:w-[200px] w-[150px] h-[150px] md:h-[200px]"
          />
          <img
            src={ellipse1}
            alt="ellipse1"
            className="block md:hidden absolute left-0 top-40  w-[50px] h-[50px] -z-10"
          />

          {/* BIg Ellipse */}
          <img
            src={ellipse2}
            alt="ellipse1"
            className="absolute md:-right-24 md:-bottom-10 -z-10 md:w-[400px] w-[200px] h-[200px] -right-10 -bottom-20 md:h-[400px]"
          />
          {/* small white box */}
          <div className="w-full h-full text-center">
            <p className="text-base">
              Pricing for <span className="font-bold">Nigeria</span>
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-black my-8">Simple, fair Pricing</h2>

            <p className="text-base md:text-lg mt-10 mb-20 md:mb-3">
              AutoHyve only makes money when you do.
            </p>

            <div className="bg-white w-full md:w-9/12 my-5 mx-auto rounded-[40px] min-h-[50%] px-7 py-7 flex flex-col justify-start">
              <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center justify-start px-7 gap-x-10">
                <div>
                  <p className="text-sm mb-2">For all transactions</p>
                  <h2 className="font-bold text-3xl">3.5%</h2>
                </div>
                <div>
                  <p className="text-sm mb-2 text-center md:text-left">Capped at</p>
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
    </section>
  );
};

export default HeroSection;
