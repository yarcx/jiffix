import React from "react";

import thirdSection1 from "../../../assets/gateway/thirdSection1.png";
import thirdSection2 from "../../../assets/gateway/thirdSection2.png";
import thirdSection3 from "../../../assets/gateway/thirdSection3.png";

const ThirdSection = () => {
  return (
    <div className="font-monts mt-32 min-h-[50vh]">
      <div className="mx-auto flex-col-reverse md:flex-row relative md:w-11/12 px-5 md:px-0 flex items-center">
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="w-full md:w-1/2 md:pr-14"
        >
          <h1 className="text-black text-center md:text-left text-[24px] md:text-[28px] leading-2 font-bold mb-10">
            <span className="text-primary"> Digital Estimates </span>for a digital world
          </h1>
          <p className="text-sm md:text-base md:text-left text-center leading-7 pb-5 md:pr-10">
            •AutoHyve is used by businesses and individuals who love to organize their data. As a
            workshop on AutoHyve, your shop will be positioned as a trusted center for automotive
            services.
          </p>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="w-full mb-10 md:mb-0 md:w-5/12"
        >
          <img src={thirdSection1} alt="Serve Automotive Service Customer" />
        </div>
      </div>
    </div>
  );
};

const FourthSection = () => {
  return (
    <div className="font-monts my-32 min-h-[50vh]">
      <div className="mx-auto flex-col md:flex-row relative md:w-11/12 px-5 md:px-0 flex items-center justify-between">
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="w-full md:w-1/2 md:pl-14 mb-10 md:mb-0"
        >
          <img src={thirdSection2} alt="Serve Automotive Service Customer" />
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="w-full md:w-1/2"
        >
          <h1 className="text-black text-center md:text-right text-[24px] md:text-[28px] leading-2 leading-2 font-bold mb-10">
            <span className="text-primary">Increased Accuracy</span> of{" "}
            <br className="block md:hidden" /> Estimates <br className="md:block hidden" /> &
            Diagnosis
          </h1>
          <p className="text-sm md:text-base text-center md:text-right leading-7 pb-5 md:pl-12">
            •AutoHyve is used by businesses and individuals who love to organize their data. As a
            workshop on AutoHyve, your shop will be positioned as a trusted center for automotive
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

const FifthSection = () => {
  return (
    <div className="font-monts mt-32 min-h-[50vh]">
      <div className="mx-auto flex-col-reverse md:flex-row relative md:w-11/12 px-5 md:px-0 flex items-center">
        <div
          data-aos="fade-up-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="w-full md:w-7/12 md:pr-14"
        >
          <h1 className="text-black text-center md:text-left text-[24px] md:text-[28px] leading-2 font-bold mb-10">
            Increased Workshop <span className="text-primary"> Visibility </span>
          </h1>
          <p className="text-sm md:text-base md:text-left text-center leading-5 pb-5 pr-5">
            Through contextualized targeting – we put your workshop in front of customers who are
            most likely to visit and pay for your services. This makes AutoHyve your preferred
            platform for workshops to reach more customers easily and directly.
          </p>
        </div>
        <div className="w-full mb-10 md:mb-0 md:w-5/12">
          <img
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="linear"
            src={thirdSection3}
            alt="Serve Automotive Service Customer"
          />
        </div>
      </div>
    </div>
  );
};

export { ThirdSection, FourthSection, FifthSection };
