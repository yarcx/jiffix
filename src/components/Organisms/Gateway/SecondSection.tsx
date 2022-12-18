import React from "react";

const SecondSection = () => {
  return (
    <div className="min-h-screen">
      <section className="font-monts mt-20 mb-20 ">
        <div
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="mx-auto relative md:w-11/12 px-5 md:px-0"
        >
          <div className="w-[80px] md:w-[250px] mb-20 border-2 rounded-sm border-orange mx-auto"></div>

          <h1 className="mb-10 mt-20 text-center leading-normal font-bold text-black text-2xl md:text-3xl">
            AI-Powered Software and Invoicing Platform for
            <br className="hidden md:block" /> Automotive Workshops
          </h1>

          <div className="text-center font-normal md:mx-auto text-sm md:text-base mt-10 md:w-10/12 md:px-6">
            <p>
              AutoHyve Gateway is the automotive workshop alternative to Whatsapp, paper prints, or
              complex softwares for sending estimates/invoices to customers seamlessly and
              collecting payments 3X <br className="md:block hidden" /> faster.
            </p>
            <p className="mt-10">
              It brings all vehicle's repair and maintenance data into the cloud, for real time
              insights and access to vehicle history to help service providers improve on Vehicle
              diagnosis and drive customer <br className="md:block hidden" /> satisfaction.
            </p>
          </div>
        </div>
        {/* second yellow line */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="pt-20 mt-10 "
        >
          <div className="mx-auto relative md:w-11/12 px-5 md:px-0">
            <div className="w-[80px] md:w-[250px] mb-20 border-2 rounded-sm border-orange mx-auto"></div>
            <h1 className="mb-10 text-center leading-normal font-bold text-black  text-2xl md:text-3xl">
              AutoHyve is Opening a New World of Opportunity for Automotive{" "}
              <br className="hidden md:block" /> Service Providers in Africa
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
