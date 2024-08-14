/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DoneRound } from "../../icons/DoneRound";
import "./style.css";

export const ChecboxField = ({
  className,
  icon = <DoneRound className="done-round" />,
  appleClassName,
  spanClassName,
  text = "Apple ",
  text1 = "110",
}) => {
  return (
    <div className={`checbox-field ${className}`}>
      {icon}
      <p className={`apple ${appleClassName}`}>
        <span className="span">{text}</span>
        <span className={`text-wrapper-2 ${spanClassName}`}>{text1}</span>
      </p>
    </div>
  );
};

ChecboxField.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
