import React from "react";
import ellipse1 from "../../../assets/pricing/ellipse1.png";
import ellipse2 from "../../../assets/pricing/ellipse2.png";
import smilingStar from "../../../assets/pricing/smilingStar.png";
import redSignpost from "../../../assets/pricing/redSignpost.png";
import bluePolygon from "../../../assets/pricing/bluePolygon.png";
import greenNotif from "../../../assets/pricing/greenNotif.png";

const Thirdsection = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="mx-auto md:w-11/12 px-5 md:px-0 py-5 relative">
        {/* BIg Ellipse */}
        <img
          src={ellipse2}
          alt="ellipse1"
          className="absolute md:right-[22%] md:-top-7 z-10 md:w-[400px] w-[200px] h-[200px] -right-10 -bottom-20 md:h-[400px]"
        />
        <div
          className="md:pl-10 mt-24"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="200"
          data-aos-anchor-placement="top-center"
          data-aos-easing="linear"
        >
          <h1 className="md:text-5xl text-4xl font-bold mb-2">What do you get for this price?</h1>
          <p className="mt-5 text-sm md:text-base">
            AutoHyve is the Operating System for Workshops of every size and at every scale
          </p>
        </div>

        <div className="font-monts mt-24 min-h-[50vh] ">
          <div className="mx-auto flex-col-reverse md:flex-row relative md:w-11/12 px-5 md:px-0 flex items-center">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="w-full md:w-1/2 md:pr-14 relative"
            >
              <h1 className="text-black text-center md:text-left text-lg md:text-[28px] leading-2 font-bold mb-5 md:mb-10">
                Delight your customers with a ditigitized repair experience
              </h1>
              <p className="text-sm md:text-base md:text-left text-center leading-7 pb-5 md:pr-0 ">
                Give your customers the gift of modern, automated and AI-powered automotive repair
                estimates. Send them an AutoHyve estimate and help them organize all their data in
                once place.
              </p>

              <img
                src={ellipse1}
                alt="ellipse1"
                className="absolute md:-left-10 z-10  w-[150px] h-[150px] -bottom-10 "
              />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="w-full flex h-full justify-center mb-10 md:mb-0 md:w-5/12"
            >
              <img src={smilingStar} alt="Serve Automotive Service Customer" className=" " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FourthSection = () => {
  return (
    <div className="font-monts relative my-32 min-h-[50vh]">
      <div className="mx-auto flex-col md:flex-row relative md:w-11/12 px-5 md:px-0 flex items-center justify-between">
        <div className="w-full justify-center flex md:w-1/2 md:pl-14 mb-20 md:mb-0">
          <img
            data-aos="flip-left"
            data-aos-delay="100"
            data-aos-duration="1000"
            src={redSignpost}
            alt="Serve Automotive Service Customer"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="w-full md:w-1/2"
        >
          <h1 className="text-black text-center md:text-right text-lg md:text-[28px] leading-2 leading-2 font-bold mb-10">
            AI-Powered Service Advisor
            <br className="block " /> Support
          </h1>
          <p className="text-sm md:text-base text-center md:text-right leading-7 pb-5 md:pl-12">
            Empower your service advisors and wow your customers with accurate and correct names of
            parts. Eliminate mistakes on estimates and invoices.
          </p>
        </div>
      </div>
      {/* BIg Ellipse */}
      <img
        src={ellipse1}
        alt="ellipse1"
        className="absolute md:right-[41%] md:-bottom-19 -z-10 md:w-[250px] w-[200px] h-[200px] -right-10 -bottom-20 md:h-[250px]"
      />
    </div>
  );
};

export const FifthSection = () => {
  return (
    <div className="font-monts mt-16 mb-32 min-h-[50vh] relative">
      <div className="mx-auto flex-col-reverse md:flex-row relative md:w-11/12 px-5 md:px-0 flex items-center">
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="w-full md:w-1/2 md:pr-14"
        >
          <h1 className="text-black text-center md:text-left text-lg md:text-[28px] leading-2 font-bold mb-10">
            Listing for Visibility on AutoHyve <br className="md:block hidden" /> Platform
          </h1>
          <p className="text-sm md:text-base md:text-left text-center leading-7 pb-5 md:pr-10">
            Become visible to AutoHyve users. Our Software uses contextual targeting to directly
            market our partner workshops, based on user vehicle make, and average spend on repairs.
            We do this by putting you in their faces and recommending you as a trusted center for
            repairs, and maintenance. See this as google SEO, on steroids!
          </p>
        </div>
        <div className="w-full mb-10 flex justify-center md:mb-0 md:w-5/12">
          <img
            data-aos="flip-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            src={bluePolygon}
            alt="Serve Automotive Service Customer"
          />
        </div>
      </div>
      {/* BIg Ellipse */}
      <img
        src={ellipse2}
        alt="ellipse1"
        className="absolute md:-right-14 md:-bottom-[70%] -z-10 md:w-[500px] w-[200px] h-[200px] -right-10 -bottom-20 md:h-[500px]"
      />
    </div>
  );
};

export const SixtSection = () => {
  return (
    <div className="font-monts mt-16 mb-16 min-h-[70vh]  ">
      <div className="mx-auto flex-col md:flex-row relative md:w-11/12 px-5 md:px-0 flex items-center justify-between">
        <div className="w-full justify-center flex md:w-1/2 md:pl-14 mb-10 md:mb-0 relative">
          <img
            data-aos="flip-left"
            data-aos-delay="100"
            data-aos-duration="1000"
            src={greenNotif}
            alt="Serve Automotive Service Customer"
          />
          <img
            src={ellipse1}
            alt="ellipse1"
            className="absolute md:left-23 -z-10  w-[150px] h-[150px] -bottom-14 "
          />
        </div>
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h1 className="text-black text-center md:text-right text-lg md:text-[28px] leading-2 leading-2 font-bold mb-5">
            Automatic Customer Payment
            <br className="md:block hidden" /> Reminders
          </h1>
          <p className="text-sm md:text-base text-center md:text-right leading-7 pb-10 md:pl-12">
            AutoHyve’s algorithm is programmed to keep all incompletely paid invoices in the face of
            customers, and reminds them of payments at regular intervals. This helps you collect
            your payments with minimal reminder from your team
          </p>
        </div>
      </div>
    </div>
  );
};
export { Thirdsection };
