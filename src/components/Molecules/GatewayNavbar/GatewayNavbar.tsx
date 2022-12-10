import GatewayButton from "../../Atoms/Gateway/GatewayButton";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const GatewayNavbar = () => {
  return (
    <nav className="h-[80px] w-screen">
      <div className="w-11/12 flex items-center justify-between mx-auto h-full ">
        <Link to="/">
          <img src={Logo} alt="logo" className="object-fill" />
        </Link>

        <ul className="flex items-center gap-x-4 ">
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
      </div>
    </nav>
  );
};

export default GatewayNavbar;
