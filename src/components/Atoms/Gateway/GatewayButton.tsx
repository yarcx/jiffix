import React from "react";
import clx from "classnames";

const GatewayButton = ({
  text = "GatewayButton",
  btnClass,
}: {
  text: string;
  btnClass: string;
}) => {
  return (
    <button
      className={`${clx(
        btnClass
      )} hover:bg-opacity-60 transition hover:shadow-md ease-in h-12 p-3 text-center min-w-[134px] rounded-xl`}
    >
      {text}
    </button>
  );
};

export default GatewayButton;
