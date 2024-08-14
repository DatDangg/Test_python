/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const DoneRound = ({ className }) => {
  return (
    <svg
      className={`done-round ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="black" height="15.6667" rx="3" width="16.3333" y="0.166666" />
      <path
        className="path"
        d="M6 8.83333L6.56642 9.25815C6.99511 9.57967 7.60105 9.50612 7.94038 9.09139L10.3333 6.16667"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  );
};
