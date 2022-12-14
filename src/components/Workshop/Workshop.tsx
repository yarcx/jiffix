import React from "react";
import Logo from "../../assets/workshop_logo.png";

import Apple from "../../assets/Apple.png";
import Google from "../../assets/google-playstore.png";
import Email from "../../assets/email.png";
import Whatsapp from "../../assets/whatsapp.png";
import JeffixLogo from "../../assets/sm_jeffix_logo.png";

import { WorkShopItems } from "../../lib/data";

const Workshop = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[594px]">
        <header className="w-full  bg-workshop-car h-[196px]">
          <div className="w-full h-full md_back p-[40px] flex items-center justify-between">
            <h1 className="font-bold text-5xl w-[307px]">We’re on AutoHyve!</h1>
            <img src={Logo} alt="" />
          </div>
        </header>
        <p className="flex justify-center items-center bg-black text-sm text-white text-center h-[37px]">
          A better way to receive Your Estimates & Pay for your repairs &
          maintenance!
        </p>
        <div className="h-[382px] w-full flex items-center justify-center ">
          <div className="w-full h-[313px] flex items-center justify-center flex-col">
            <table>
              <thead>
                <tr className="flex items-center gap-2 justify-end">
                  <th className="bg-secondary w-[63px] gap-1 flex h-16 items-center flex-col text-[10px] justify-center p-2">
                    <img src={JeffixLogo} alt="" />
                    <p>AutoHyve</p>
                  </th>
                  <th className="bg-secondary w-[63px] h-16 gap-1 flex items-center flex-col justify-center text-[10px] p-2">
                    <img src={Email} alt="" />
                    <p>Email</p>
                  </th>
                  <th className="bg-secondary w-[63px] flex h-16 gap-1 items-center flex-col justify-center text-[10px] p-2">
                    <img src={Whatsapp} alt="" />
                    <p>WhatsApp</p>
                  </th>
                </tr>
              </thead>
              {WorkShopItems.map(({ text, icon, colTwoicon }) => (
                <tbody>
                  <tr className="flex items-center gap-2 justify-between h-[36px] border-b border-[#9B9E9F] ">
                    <th className="text-sm text-left w-[332px] font-normal ">
                      {text}
                    </th>
                    <td className="bg-secondary w-[63px] h-full flex items-center justify-center">
                      {icon}
                    </td>
                    <td className="bg-secondary w-[63px] h-full flex items-center justify-center">
                      {colTwoicon}
                    </td>
                    <td className="bg-secondary w-[63px] h-full flex items-center justify-center  ">
                      {colTwoicon}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 bg-secOrange px-[40px] py-[27px]">
          <div>
            <h1 className="font-bold text-xl italic mb-4 text-priOrange ">
              Try AutoHyve, it's FREE!
            </h1>
            <p className="w-[267px] text-xl">
              Request for your Estimate to be sent on AutoHyve, that's all!
            </p>
          </div>
          <div className="flex items-center flex-col justify-between gap-4">
            <button className="flex items-center border border-darkGray h-[60.62px] w-[186px] p-3 rounded-lg">
              <img src={Apple} alt="" />
              <span>Download from App Store</span>
            </button>
            <button className="flex items-center border border-darkGray h-[60.62px] w-[186px] p-3 rounded-lg">
              <img src={Google} alt="" />
              <span>Get it on Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
