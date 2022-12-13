import React from "react";
import blackLogo from "../../../assets/blackLogo.png";
import Facebook from "../../../assets/svgs/Facebook";
import InstagramIcon from "../../../assets/svgs/InstagramIcon";
import LinkedInIcon from "../../../assets/svgs/LinkedInIcon";
const Footer = () => {
  const date = new Date();
  return (
    <footer className="min-h-[48vh] h-full flex-col flex justify-center bg-primary relative">
      <div className="w-11/12 flex flex-col justify-center items-center mx-auto">
        <div className="flex items-center flex-col md:flex-row justify-between w-full mt-10 md:mt-20">
          <img
            src={blackLogo}
            alt="logo alt"
            className="mb-8 md:mb-0 object-cover md:w-[130px] md:h-[83px] w-[85px] h-[50px]"
          />
          <ul className="flex items-center gap-x-8">
            <li className="font-bold text-xl text-black mr-5 hidden md:block">#MyAutoHyve</li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <Facebook />
            </li>
            <li>
              <LinkedInIcon />
            </li>
          </ul>
        </div>
        <div className="border-b-2 border-black w-full h-4"></div>

        <div className=" my-10 w-full flex flex-col md:flex-row gap-y-8 md:gap-y-0 gap-x-20">
          <div>
            <h3 className="mb-3 font-bold">Get in Touch</h3>
            <p className="text-sm">+234 (814) 464 6273</p>
            <p className="text-sm">hello@jiffixtech.com</p>
          </div>
          <div>
            <h3 className="mb-3 font-bold">Abuja, Nigeria</h3>
            <p className="text-sm">Jiffix Technologies</p>
            <p className="text-sm">House 10, 45 Road Off First Avenue</p>
            <p className="text-sm"> Gwarinpa.</p>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto flex justify-center md:mt-5  pb-10">
        <div className="flex justify-between md:flex-row flex-col-reverse items-start gap-x-5 text-xs w-full md:w-6/12 md:mx-auto text-[#676767]  h-full gap-y-5 md:gap-y-0">
          <p>© {date.getFullYear()} All Rights Reserved.</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
