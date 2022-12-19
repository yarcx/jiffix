import React, { useEffect, useState } from "react";
import {
  BicycleIcon,
  BusIcon,
  CarIcon,
  Declinemark,
  Checkmark,
  VanIcon,
  TractorIcon,
  TruckIcon,
} from "../../components/Atoms/Icons";


import Car from "../../assets/car-silver.png";
import Jiffix from "../../assets/lit_jeff.png";


const CarSection = () => {
  const [active, setActive] = useState(0);


  useEffect(() => {
    let interval = setInterval(() => {
      setActive((prev) => {
        if (prev < 5) {
          return (prev += 1);
        } else {
          return (prev = 0);
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full flex items-center justify-center bg-black  mt-20 md:mt-0 pb-20">
      <div className="w-11/12 flex items-center flex-col justify-between">
        <div className="flex items-center flex-col gap-6 mb-10">
          <div className="border-b-4 border-primary w-[80px]  md:w-[300px] mt-20 md:mt-24"></div>
          <p className="text-white flex items-center gap-2  text-[11px] font-bold">POWERED BY <img src={Jiffix} alt="jiffix loggo" className="h-[10px]"  /></p>
        </div>
        <p className="text-white text-3xl md:w-[894px] w-full text-center">
          Democratizing access to vehicle data in Africa and enabling amazing experiences
        </p>
        <div className="flex items-center md:justify-between justify-around  text-white w-full md:w-11/12  pt-10 md:text-lg text-[10px] flex-wrap p-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="md:w-[30px] md:h-[30px] w-[12px] h-[12px] bg-blue-400"></span>
            <p className="">Leasers/FMCs</p>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className=" md:w-[30px] md:h-[30px] w-[12px] h-[12px] bg-green-600"></span>
            <p>Fleet Owners</p>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className=" md:w-[30px] md:h-[30px] w-[12px] h-[12px] bg-pink-600"></span>
            <p>Insurers</p>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="md:w-[30px] md:h-[30px] w-[12px] h-[12px] bg-secondary"></span>
            <p>OEMs</p>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className=" md:w-[30px] md:h-[30px] w-[12px] h-[12px] bg-secondary"></span>
            <p>Retailers</p>
          </div>
        </div>

        <div
          data-aos="zoom-out-down"
          className="relative md:my-8 md:w-[1000px] h-[400px] md:h-[864px]  flex items-center justify-center"
        >
          <div className="bg-jeffix-logo bg-center absolute z-3 bg-no-repeat bg-contain text-white  flex items-center justify-center w-[290px] h-[243px] md:w-[800px] md:h-[470px] ">
            <div className="rounded-full w-[240px] h-[250px] md:w-[450px] md:h-[500px] absolute border-4 border-yellow-500 z-2">
            <CarIcon active={active == 0} />
              <BusIcon active={active == 1} />
              <BicycleIcon active={active == 5} />
              <TruckIcon active={active == 4} />
              <TractorIcon active={active == 2} /> <VanIcon active={active == 3} />
            </div>
            <img
              src={Car}
              alt=""
              className="rotate w-[300px] h-[180px] md:w-[600px] md:h-[350px] absolute z-1"
            />
          </div>
        </div>
        <p className="text-white md:w-[826px] md:h-[280px] text-center pb-12 text-base md:text-lg md:my-10">
          AutoHyve as a Software-as-a-Service platform standardizes and analyzes
          vehicle repair and health data to generate real-time insights in their
          millions.
          <br />
          <br />
          With this information, we give businesses and organizations across the automotive and
          mobility value chain the power to take control of their greatest assets, innovate, drive
          growth, transform communities, save lives and improve the world we live in.
        </p>
      </div>
    </section>
  );
};

export default CarSection;
