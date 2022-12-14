import React from "react";
import { Link } from "react-router-dom";
import GatewayButton from "../../Atoms/Gateway/GatewayButton";
import { isPricingPageActive } from "./GatewayNavbar";

const MobileNav = ({ isNavOpen, pricing }: { isNavOpen: boolean; pricing?: boolean }) => {
  return (
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
    </div>
  );
};

export default MobileNav;
