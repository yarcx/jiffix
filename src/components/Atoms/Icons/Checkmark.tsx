import React from "react";
import { IconProps } from "src/Interface/Icons";

export function Checkmark({ size, color }: IconProps): JSX.Element {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.62344 7.10625L1.45469 4.9375C1.21094 4.69375 0.817187 4.69375 0.573437 4.9375C0.329688 5.18125 0.329688 5.575 0.573437 5.81875L3.18594 8.43125C3.42969 8.675 3.82344 8.675 4.06719 8.43125L10.6797 1.81875C10.9234 1.575 10.9234 1.18125 10.6797 0.937497C10.4359 0.693747 10.0422 0.693747 9.79844 0.937497L3.62344 7.10625Z"
        fill="black"
      />
    </svg>
  );
}
