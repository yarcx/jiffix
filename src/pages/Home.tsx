import React from "react";
import { Link } from "react-router-dom";
import Safari from "../assets/Safari Browser 1.png";
import Iphone from "../assets/iPhone 8 1.png";
import ngk from "../assets/iPhone 8 1.png";

import Ngk from "../assets/ngk.png";
import Total from "../assets/total logo 1.png";
import Aws from "../assets/Aws.png";
import Apple from "../assets/Apple.png";
import Google from "../assets/google-playstore.png";
import Car from "../assets/car-silver.png";
import { TruckIcon } from "../components/Atoms/Icons";



const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <section className="w-full  back-img h-[86vh]">
        <div className="back h-full flex flex-col items-center justify-center w-full ">
          <div className="w-11/12 flex flex-col ">
            <h1 className="text-5xl font-bold w-1/2 mb-4">
              Be in Control of your greatest Assets
            </h1>
            <p className="text-xl font-normal w-2/5 mb-10">
              The most powerful and simplest way for Businesses to centralize
              all vehicle repair data in one place and uncover cost-saving
              insights
            </p>
            <Link to="singin">
              <button className="bg-secondary w-44 h-14 rounded">
                Start FREE Trial
              </button>
            </Link>
          </div>
        </div>
      </section>
      <hr />

      <section className="w-full flex items-center justify-center">
        <div className="flex items-center flex-col justify-center w-3/5 gap-10 p-10">
          <h1 className="font-bold text-3xl text-center">
            AI-Powered Software and Analytics Platform for the Automotive
            Aftersales sector
          </h1>
          <p className="flex items-center text-lg text-center">
            AutoHyve is the simple alternative to Email threads, Whatsapp pdf,
            spreadsheets or outdated fleet software – <br /> It brings all your
            vehicles’ repair and maintenance data into one place, for real-time
            insights that can reveal cost savings in the management of your
            assets, all without the need to manage any infrastructure.
          </p>
        </div>
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="w-11/12 flex items-center  justify-between bg-lightGray rounded-lg p-10">
          <div className="flex items-center flex-col justify-center w-3/5 gap-10 p-10">
            <h1 className="text-3xl font-semibold text-center w-4/5">
              Save up to 25% on your annual maintenance cost
            </h1>
            <p className="text-center text-lg">
              Benefit from AI-powered recommendations that flag active
              warranties, wrong/false billing, sub-standard parts, fundamental
              problems in vehicles, and predict part failures with built-in
              machine learning on a simple user-friendly interface.
              <br /> Check every estimate sent by your workshop or mechanic,
              against your local repair history and global library for your
              vehicle.
            </p>
            <div className="flex justify-around items-center w-full">
              <Link to="singin">
                <button className="bg-secondary w-40 h-14 rounded">
                  Start FREE Trial
                </button>
              </Link>

              <Link to="singin">
                <button className="bg-primary w-44 h-14 rounded">
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img src={Safari} alt="" />
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="w-11/12 flex items-center flex-col justify-between iphone-bg pb-10">
          <div className="w-4/5 flex items-center justify-between pr-10 pt-10 pb-10">
            <h1 className="text-3xl font-bold">Business Use Cases</h1>
            <button className="bg-white w-64 h-14 rounded-full ">
              In-house Workshop
            </button>
            <button className="bg-primary w-64 h-14 rounded-full">
              Out-sourced Workshop
            </button>
          </div>
          <div className="flex items-center  justify-center w-4/5 gap-10">
            <div className="flex flex-col justify-between gap-10">
              <div>
                <h1 className="text-2xl font-semibold">Sign up</h1>
                <p className="text-lg">
                  Create an account with your name, email, phone number and
                  company name
                </p>
              </div>
              <div>
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
                  Manager receives estimate on AutoHyve for processing and
                  payment e.g. query estimate for active warranties,
                  double/false billing, substandard part
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

              <button className="bg-black w-44 h-14 text-white rounded-lg">
                Sign Up
              </button>
            </div>
            <div>
              <img src={Iphone} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center bg-black p-10">
        <div className="w-11/12 flex items-center flex-col justify-between">
          <div className="flex items-center flex-col gap-6 mb-10">
            <hr />
            <p className="text-white">POWERED BY jeffix©</p>
          </div>
          <p className="text-white">
            Democratizing access to vehicle data in Africa and enabling amazing
            experiences
          </p>

          <div className="stand relative text-white flex items-center" >
                    <img src={Car} alt=""  className="absolute top-0 right-0"/>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center p-10">
        <div className="w-11/12 flex items-center flex-col justify-between">
          <div className="flex items-center flex-col gap-12 mb-10">
            <hr />
            <h1 className="text-3xl font-bold">
              Working together to Build the Future
            </h1>
          </div>
          <p className="text-center text-lg w-[550px]">
            Just some of the ground breaking businesses and organizations we
            work in partnership with.
          </p>
          <div className="flex justify-between items-center w-3/5 mb-[134px] mt-20">
            <img src={Total} alt="total logo" />
            <img src={Ngk} alt="ngk logo" />
            <img src={Aws} alt="Aws logo" />
          </div>
          <div className=" w-full h-[290px] flex justify-between bg-secondary rounded-lg p-10">
            <div>
              <h1 className="text-2xl ">Download the Mobile Application</h1>
              <h2 className="font-bold  text-[50px]">
                AutoHyve is available on Appstores
              </h2>
              <TruckIcon/>
             
            </div>
            <div className="flex items-center justify-between gap-7">
              <button className="flex items-center border border-darkGray h-[60.62px] w-[186px] p-3">
                <img src={Apple} alt="" />
                <span>Download from App Store</span>
              </button>
              <button className="flex items-center border border-darkGray h-[60.62px] w-[186px] p-3">
                <img src={Google} alt="" />
                <span>Get it on Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
