import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import blackLogo from "../../assets/blackLogo.png";

const Navbar = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className=" flex items-center justify-between w-11/12 h-24">
        <div className="">
          <img
            src={blackLogo}
            alt=""
            className="object-cover md:w-[130px] md:h-[83px] w-[85px] h-[50px]"
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
      </div>
    </div>
  );
};

export default Navbar;
