import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Logo4 from "../../assets/logo4.png";
import blackLogo from "../../assets/blackLogo.png";
import Hambugger from "../../assets/svgs/Hambugger";
import MobileNav from "./GatewayNavbar/MobileNav";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpenNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className=" flex items-center justify-between w-11/12 h-24">
        <div className="">
          <img
            src={blackLogo}
            alt="Black Logo"
            className="object-cover  md:w-[160px] md:h-[83px] w-[120px] h-[50px] -ml-0 md:ml-0"
          />
        </div>

        <ul className="hidden md:flex w-1/3 gap-6">
          <li>
            <Link to="singin">
              <button className="bg-primary w-40 h-14 rounded">Sign In</button>
            </Link>
          </li>
          <li>
            <Link to="/gateway">
              <button className="bg-secondary w-44 h-14 rounded">Start FREE Trial</button>
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
