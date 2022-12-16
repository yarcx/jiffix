import React from "react";
import { Link } from "react-router-dom";
import GatewayButton from "../../Atoms/Gateway/GatewayButton";
import { isPricingPageActive, isHomePageActive } from "./GatewayNavbar";
import Apple from "../../../assets/Apple.png";
import Google from "../../../assets/google-playstore.png";

const MobileNav = ({
  isNavOpen,
  pricing,
  landingPage,
}: {
  isNavOpen: boolean;
  pricing?: boolean;
  landingPage?: boolean;
}) => {
  return (
    <div
      style={{ backgroundColor: !pricing ? "white" : "rgba(251, 169, 26, 0.2)" }}
      className={`${isNavOpen ? "h-[85vh]" : "h-0"} transition-all ease-linear md:hidden`}
    >
      {!landingPage && (
        <ul
          className={`pt-20  flex-col items-center justify-center gap-y-9 ${
            isNavOpen ? "opacity-100 flex" : "opacity-0 h-0 hidden"
          }`}
        >
          <li className={`${isHomePageActive ? "font-bold" : ""}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${isPricingPageActive ? "font-bold" : ""}`}>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <GatewayButton text="Sign in" btnClass="bg-primary w-[155px] h-[60px]" />
          </li>
          <li>
            <GatewayButton text="Start FREE Trial" btnClass="bg-silver w-[155px] h-[60px]" />
          </li>
        </ul>
      )}
      {landingPage && (
        <ul
          className={`pt-20  flex-col items-center justify-center gap-y-9 ${
            isNavOpen ? "opacity-100 flex" : "opacity-0 h-0 hidden"
          }`}
        >
          <li>
            <GatewayButton text="Sign in" btnClass="bg-primary w-[155px] h-[60px] mb-16" />
          </li>

          <button className="flex items-center border border-darkGray h-[60.62px] w-[186px] rounded-md text-left  gap-x-3 p-3 text-sm md:text-base">
            <img src={Apple} alt="" />
            <p>
              Download from <span className="text-base">App Store</span>
            </p>
          </button>
          <button className="flex items-center border border-darkGray h-[60.62px] w-[186px] rounded-md text-left p-3 gap-x-3 text-sm md:text-base">
            <img src={Google} alt="" />
            <p>
              Get it on <span className="text-base">Google Play</span>{" "}
            </p>
          </button>
          {/* <li>
            <GatewayButton text="Start FREE Trial" btnClass="bg-silver w-[155px] h-[60px]" />
          </li> */}
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
