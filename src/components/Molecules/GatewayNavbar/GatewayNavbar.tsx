import GatewayButton from "../../Atoms/Gateway/GatewayButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import blackLogo from "../../../assets/blackLogo.png";
import blackLogo1 from "../../../assets/blackLogo1.png";
import Hambugger from "../../../assets/svgs/Hambugger";
import { useMatch } from "react-router-dom";
import MobileNav from "./MobileNav";

const ActiveTab: {
  pricing: string;
  home: string;
} = {
  pricing: "/pricing",
  home: "/gateway",
};

export let isPricingPageActive: boolean;
export let isHomePageActive: boolean;

const GatewayNavbar = ({ pricing }: { pricing?: boolean }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pricingPage = useMatch("pricing");
  const gatewayPage = useMatch("gateway");

  isPricingPageActive = ActiveTab.pricing == pricingPage?.pathname;
  isHomePageActive = ActiveTab.home == gatewayPage?.pathname;

  const handleOpenNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav
        style={{ backgroundColor: !pricing ? "white" : "rgba(251, 169, 26, 0.2)" }}
        className={`h-auto pt-4`}
      >
        <div className="w-11/12 flex items-center justify-between mx-auto h-full ">
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

          <ul className="hidden md:flex items-center gap-x-4 ">
            <li className={`${isHomePageActive ? "font-bold" : ""} mr-10`}>
              <Link to="/gateway">Home</Link>
            </li>
            <li className={`${isPricingPageActive ? "font-bold" : ""} mr-10`}>
              <Link to="/pricing">Pricing</Link>
            </li>

            <li>
              <Link to="">
                <GatewayButton text="Sign In" btnClass="bg-silver h-[53px]" />
              </Link>
            </li>
            <li>
              <GatewayButton
                text="Create a free account"
                btnClass="bg-[#FBA91A] opacity-[0.65] md:text-base h-[53px] text-sm px-6  text-center flex items-center justify-center "
              />
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
