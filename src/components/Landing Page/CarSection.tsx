import React from "react";
import Car from "../../assets/car-silver.png";
const CarSection = () => {
  return (
    <section className="w-full flex items-center justify-center bg-black ">
      <div className="w-11/12 flex items-center flex-col justify-between">
        <div className="flex items-center flex-col gap-6 mb-10">
          <div className="border-3 md:border-b-4 border-primary w-[80px]  md:w-[300px] mt-10" />
          <p className="text-white">POWERED BY jeffix©</p>
        </div>
        <p className="text-white text-3xl md:w-[894px] w-full text-center">
          Democratizing access to vehicle data in Africa and enabling amazing
          experiences
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

        <div className="relative md:w-[1000px] h-[400px] md:h-[864px]  flex items-center justify-center">
          <div className="bg-jeffix-logo bg-center absolute z-3 bg-no-repeat bg-contain text-white flex items-center justify-center w-[290px] h-[243px] md:w-[900px] md:h-[710px] ">
            <span className="rounded-full w-[100px] h-[100px] md:w-[650px] md:h-[700px] absolute border-4 border-yellow-500 z-2"></span>
            <img
              src={Car}
              alt=""
              className="w-[300px] h-[251px] md:w-[900px] md:h-[384px] absolute z-1"
            />
          </div>
        </div>
        <p className="text-white md:w-[670px] md:h-[280px] text-center pb-12 text-lg">
          AutoHyve as a Software-as-a-Service platform standardizes and analyzes
          vehicle repair and health data to generate real-time insights in their
          millions.
          <br />
          <br />
          With this information, we give businesses and organizations across the
          automotive and mobility value chain the power to take control of their
          greatest assets, innovate, drive growth, transform communities, save
          lives and improve the world we live in.
        </p>
      </div>
    </section>
  );
};

export default CarSection;
