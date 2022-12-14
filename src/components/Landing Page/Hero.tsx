import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="w-full   bg-hero h-[86vh]">
      <div className="linear_back  md:md_back h-full flex flex-col md:pl-[100px] justify-center w-full ">
        <motion.div
          whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 1.9 }}
          
        >
          <div className="w-11/12 flex items-center justify-center md:items-start flex-col   ">
            <h1 className="md:text-5xl text-3xl p-8 md:p-0 font-bold w-[311px] md:w-[681px] md:pr-4 text-center md:text-left mb-4">
              Be in Control of your greatest Assets
            </h1>
            <p className="text-xl font-normal md:w-[594px] md:text-left text-center w-[285px] mb-10">
              The most powerful and simplest way for Businesses to centralize
              all vehicle repair data in one place and uncover cost-saving
              insights
            </p>
            <Link to="singin">
              <button className="bg-secondary w-44 h-14 rounded">
                Start FREE Trial
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


