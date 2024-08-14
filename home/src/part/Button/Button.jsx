/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ buttonText = "Label", state, icon, className, divClassName }) => {
  return (
    <button className={`button ${state} icon-${icon} ${className}`}>
      {icon && (
        <>
          <div className="label">{buttonText}</div>
          <div className="icon-arrow-down" />
        </>
      )}

      {!icon && <div className={`text-wrapper ${divClassName}`}>{buttonText}</div>}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  state: PropTypes.oneOf(["black-stroke", "fill-small", "white-stroke", "fill", "small-stroke", "stroke-small"]),
  icon: PropTypes.bool,
};
