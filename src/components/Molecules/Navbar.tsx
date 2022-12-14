import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className=" flex items-center justify-between w-11/12 h-24">
        <div className="">
          <img src={Logo} alt="" />
        </div>

        <ul className="hidden md:flex w-1/3 gap-6">
          <li>
            <Link to="singin">
              <button className="bg-primary w-40 h-14 rounded">Sign In</button>
            </Link>
          </li>
          <li>
            <Link to="singin">
              <button className="bg-secondary w-44 h-14 rounded">
                Start FREE Trial
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
