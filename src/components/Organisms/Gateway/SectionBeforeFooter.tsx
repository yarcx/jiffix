import React from "react";
import Cage from "../../../assets/svgs/Cage";
import cage from "../../../assets/gateway/sectionBeforeFooter.png";

const SectionBeforeFooter = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
      }}
      className="h-[142px]"
    >
      <div className="bg-sectionBeforeFooter bg-auto h-full"></div>
    </div>
  );
};

export default SectionBeforeFooter;
