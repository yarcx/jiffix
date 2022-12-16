import React from "react";
import { IconProps } from "src/Interface/Icons";

export function Declinemark({ size, color }: IconProps): JSX.Element {
  return (
    <svg
      width="9"
      height="8"
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75781 6.84546L7.24367 1.0369M1.75781 1.0369L7.24367 6.84546"
        stroke="black"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
