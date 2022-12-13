import React from "react";

const SecondSection = () => {
  return (
    <div className="min-h-screen">
      <section className="font-monts mt-20 mb-20 ">
        <div className="mx-auto relative md:w-11/12 px-5 md:px-0">
          <div className="w-[250px] mb-20 border-2 rounded-sm border-orange mx-auto"></div>
          <h1 className="mb-10 mt-20 text-center leading-normal font-bold text-black text-3xl">
            AI-Powered Software and Analytics Platform for the <br />
            Automotive Aftersales sector
          </h1>

          <div className="text-center font-normal text-lg mt-20">
            <p>
              AutoHyve is the simple alternative to Email threads, Whatsapp pdf, spreadsheets or
              outdated fleet <br /> software –
            </p>
            <p className="mt-20">
              It brings all vehicles’ repair and maintenance data into one place, for real-time
              insights and access <br /> to vehicle data that help service providers improve
              diagnostics, and drive customer satisfaction
            </p>
          </div>
        </div>
        {/* second yellow line */}
        <div className="pt-20 mt-20 ">
          <div className="mx-auto relative md:w-11/12 px-5 md:px-0">
            <div className="w-[250px] mb-20 border-2 rounded-sm border-orange mx-auto"></div>
            <h1 className="mb-10 mt-20 text-center leading-normal font-bold text-black text-3xl">
              AutoHyve is Opening a New World of Opportunity for Automotive <br /> Service Providers
              in Africa
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
