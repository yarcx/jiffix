import React from "react";
import GatewayButton from "../../Atoms/Gateway/GatewayButton";
import mobileIphone from "../../../assets/gateway/mobileIphone.png";

const Summary = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="md:pr-10 mb-14">
      <h3 className="text-left leading-normal font-semibold text-black  text-xl md:text-2xl">
        {title}
      </h3>
      <p className="text-base font-normal mt-1">{text}</p>
    </div>
  );
};

const GetStartedSection = () => {
  return (
    <div className="font-monts my-32 min-h-screen">
      <div className="mx-auto justify-center relative md:w-11/12 px-5 md:px-0 flex items-center">
        <div
          className="md:w-11/12 w-full md:h-[120vh] rounded-[50px] flex flex-col md:flex-row md:pl-20 md:pr-16 px-7 md:pb-32"
          style={{
            backgroundImage:
              "linear-gradient(285.66deg, rgba(251, 169, 26, 0.27) 26.36%, rgba(217, 217, 217, 0.27) 92.62%)",
          }}
        >
          {/* left side */}
          <div className="w-full md:w-1/2 pt-20">
            <h1 className="mb-16 text-left leading-normal font-bold text-black text-2xl md:text-3xl">
              Get Started in 3 Steps
            </h1>

            <Summary
              title="Sign Up"
              text=" Create a workshop account using your name, email and phone number"
            />
            <Summary
              title="Complete Your Workshop Profile"
              text="Set up your address, brands specialized on, branding, technicians profiles, and add your workshop policies"
            />
            <Summary
              title="Delight your customers!"
              text="In minutes you can start creating and sending digital AutoHyve estimates seamlessly!"
            />

            <GatewayButton
              text="Sign Up"
              btnClass="bg-black h-[70px] text-white w-full md:w-[250px] mt-10"
            />
          </div>
          {/* Right side */}
          <div className="md:w-1/2 w-full flex items-start justify-center md:justify-end">
            {/* ON Desktop */}
            <div className="w-10/12  bg-iphoneBanner bg-auto bg-top bg-no-repeat md:block hidden h-[100vh] rounded-br-[40px] rounded-bl-[40px]"></div>

            {/* on Mobile */}
            <img src={mobileIphone} alt="iphone screen" className="md:hidden mt-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
