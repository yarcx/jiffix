import React, { useState } from "react";
import { Link } from "react-router-dom";
import blackLogo1 from "../../assets/blackLogo1.png";
import Hambugger from "../../assets/svgs/Hambugger";
import MobileNav from "./GatewayNavbar/MobileNav";
import GatewayButton from "../Atoms/Gateway/GatewayButton";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpenNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex flex-col w-full items-center py-3">
      <div className=" flex items-center justify-between w-11/12 mx-auto">
        <div className="w-[45%]  flex items-center justify-between">
          <Link to="/">
            <img
              src={blackLogo1}
              alt="logo"
              className="object-cover md:w-[110px] h-auto w-[80px]"
            />
          </Link>

          {
            <div className="hidden md:flex items-center gap-x-6 justify-between">
              <Link to="/business">
                <GatewayButton
                  text="Businesses"
                  btnClass="bg-silver flex items-center text-center justify-center text-sm rounded-[34px] min-w-[180px] px-6 h-[43px]"
                />
              </Link>
              <Link to="/workshop">
                <GatewayButton
                  text="Workshops"
                  btnClass="lightOrangeBg text-sm flex items-center text-center justify-center rounded-[34px] min-w-[180px] px-6 h-[43px]"
                />
              </Link>
            </div>
          }
        </div>

        <ul className="hidden md:flex justify-end w-1/3 gap-6">
          <li>
            <Link to="singin">
              <button className="bg-secondary w-40 h-14 rounded">Sign In</button>
            </Link>
          </li>
          <li>
            <Link to="/gateway" className="relative">
              <button className=" bg-primary  w-44 h-14 rounded">Start FREE Trial </button>
              <span className="absolute top right-1 text-[#F80000] font-light text-xs">Beta</span>
            </Link>
          </li>
        </ul>

        {/* Hambugger menu to trigger mobile nav */}
        <button
          onClick={handleOpenNav}
          className={`flex items-center justify-center transition md:hidden h-14 w-14 ${
            isNavOpen ? "bg-primary" : "bg-silver"
          } outline-0 border-0 rounded-md`}
        >
          <Hambugger />
        </button>
      </div>

      {/* Mobile nav starts here */}
      <MobileNav isNavOpen={isNavOpen} landingPage />
    </div>
  );
};

export default Navbar;
