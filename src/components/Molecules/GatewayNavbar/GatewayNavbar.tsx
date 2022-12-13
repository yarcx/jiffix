import GatewayButton from "../../Atoms/Gateway/GatewayButton";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import blackLogo from "../../../assets/blackLogo.png";
import Hambugger from "../../../assets/svgs/Hambugger";

const GatewayNavbar = ({ pricing }: { pricing?: boolean }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpenNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav
        style={{ backgroundColor: !pricing ? "white" : "rgba(251, 169, 26, 0.2)" }}
        className={`h-auto pt-4 bg-[rgba(251, 169, 26, 0.2)]`}
      >
        <div className="w-11/12 flex items-center justify-between mx-auto h-full ">
          <Link to="/">
            <img
              src={blackLogo}
              alt="logo"
              className="object-cover md:w-[130px] md:h-[83px] w-[85px] h-[50px]"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-x-4 ">
            <li className="mr-5">
              <Link to="/pricing">Pricing</Link>
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
      </nav>

      {/* Mobile nav starts here */}

      <div
        style={{ backgroundColor: !pricing ? "white" : "rgba(251, 169, 26, 0.2)" }}
        className={`${isNavOpen ? "h-[80vh]" : "h-0"} transition-all ease-linear md:hidden`}
      >
        <ul
          className={`pt-20  flex-col items-center justify-center gap-y-9 ${
            isNavOpen ? "opacity-100 flex" : "opacity-0 h-0 hidden"
          }`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
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
