import GatewayButton from "../../Atoms/Gateway/GatewayButton";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import Hambugger from "../../../assets/svgs/Hambugger";

const GatewayNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpenNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <nav className="h-auto pt-4">
        <div className="w-11/12 flex items-center justify-between mx-auto h-full ">
          <Link to="/">
            <img src={Logo} alt="logo" className="object-fill" />
          </Link>

          <ul className="hidden md:flex items-center gap-x-4 ">
            <li className="mr-5">
              <Link to="">Pricing</Link>
            </li>

            <li>
              <Link to="">
                <GatewayButton text="Sign In" btnClass="bg-silver" />
              </Link>
            </li>
            <li>
              <Link to="">
                <GatewayButton text="Create a free account" btnClass="bg-primary px-6" />
              </Link>
            </li>
          </ul>
          <button
            onClick={handleOpenNav}
            className={`flex items-center justify-center transition md:hidden h-14 w-14 ${
              isNavOpen ? "bg-primary" : "bg-silver"
            } outline-0 border-0 rounded-md`}
          >
            <Hambugger />
          </button>
        </div>
      </nav>

      <div className={`${isNavOpen ? "h-[80vh]" : "h-0"} transition-all ease-linear md:hidden`}>
        <ul className="pt-20 flex flex-col items-center justify-center gap-y-9">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Pricing</Link>
          </li>
          <li>
            <GatewayButton text="Sign in" btnClass="bg-primary w-[155px] h-[60px]" />
          </li>
          <li>
            <GatewayButton text="Start FREE Trial" btnClass="bg-silver w-[155px] h-[60px]" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default GatewayNavbar;
