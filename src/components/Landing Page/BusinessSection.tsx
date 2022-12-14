import React from "react";
import Iphone from "../../assets/iPhone 8 1.png";

const BusinessSection = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-11/12 flex items-center flex-col justify-between iphone-bg pb-10">
        <div className="w-4/5 flex md:items-center flex-col md:flex-row justify-between gap-4 pr-8 pt-10 pb-10">
          <h1 className=" text-lg md:text-3xl font-bold ">
            Business Use Cases
          </h1>
          <div className="flex items-center justify-between gap-2">
            <button className="bg-white md:w-[341px] md:h-[80px] w-[137px] h-[35px] rounded-full text-[8px] md:text-lg ">
              In-house Workshop
            </button>
            <button className="bg-primary md:w-[338px] md:h-[80px] w-[137px] h-[35px] text-[8px] rounded-full md:text-lg">
              Out-sourced Workshop
            </button>
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row  justify-center w-[300px] md:w-4/5 gap-10">
          <div className="flex flex-col text-left justify-between items-center gap-10 md:items-start">
            <div>
              <h1 className="text-2xl font-semibold">Sign up</h1>
              <p className="text-lg">
                Create an account with your name, email, phone number and
                company name
              </p>
            </div>
            <div className="w-full">
              <h1 className="text-2xl font-semibold">
                Visit Workshop as Usual
              </h1>
              <p className="text-lg">Visit Workshop as Usual</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Receive Estimate/Invoices
              </h1>
              <p className="text-lg">
                Manager receives estimate on AutoHyve for processing and payment
                e.g. query estimate for active warranties, double/false billing,
                substandard part
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Enjoy Real-time Analytics
              </h1>
              <p className="text-lg">
                Enjoy unique insights on your vehicles in real-time and on a
                recurring basis
              </p>
            </div>

            <button className="bg-black w-[250px] h-14 text-white rounded-lg">
              Sign Up
            </button>
          </div>
          <div>
            <img src={Iphone} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
