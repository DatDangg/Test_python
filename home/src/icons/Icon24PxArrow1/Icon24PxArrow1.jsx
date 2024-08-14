/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon24PxArrow1 = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-24px-arrow-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M9 6L15 12L9 18" stroke={color} />
    </svg>
  );
};

Icon24PxArrow1.propTypes = {
  color: PropTypes.string,
};
