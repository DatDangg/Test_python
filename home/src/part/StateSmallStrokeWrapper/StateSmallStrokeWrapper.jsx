/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StateSmallStrokeWrapper = ({ buttonText = "Label", state, icon, className, divClassName }) => {
  return (
    <button className={`state-small-stroke-wrapper state-2-${state} icon-0-${icon} ${className}`}>
      {icon && (
        <>
          <div className="div">{buttonText}</div>
          <div className="icon-px-arrow-down" />
        </>
      )}

      {!icon && <div className={`label-2 ${divClassName}`}>{buttonText}</div>}
    </button>
  );
};

StateSmallStrokeWrapper.propTypes = {
  buttonText: PropTypes.string,
  state: PropTypes.oneOf(["black-stroke", "fill-small", "white-stroke", "fill", "small-stroke", "stroke-small"]),
  icon: PropTypes.bool,
};
