import GatewayButton from "../../Atoms/Gateway/GatewayButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import blackLogo from "../../../assets/blackLogo.png";
import Hambugger from "../../../assets/svgs/Hambugger";
import { useMatch } from "react-router-dom";
import MobileNav from "./MobileNav";

const ActiveTab: {
  pricing: string;
} = {
  pricing: "/pricing",
};

export let isPricingPageActive: boolean;

const GatewayNavbar = ({ pricing }: { pricing?: boolean }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const currentUrl = useMatch("pricing");

  isPricingPageActive = ActiveTab.pricing == currentUrl?.pathname;

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
              className="object-cover md:w-[160px] md:h-[83px] w-[120px] h-[50px]"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-x-4 ">
            <li className={`${isPricingPageActive ? "font-bold" : ""} mr-5`}>
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
      <MobileNav isNavOpen={isNavOpen} pricing={pricing} />
    </>
  );
};

export default GatewayNavbar;
