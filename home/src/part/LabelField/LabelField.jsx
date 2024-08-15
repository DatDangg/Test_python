/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LabelField = ({
  button,
  className,
  divClassName,
  text = "Your bonus card number",
  divClassNameOverride,
  text1 = "Enter Card Number",
  divClassName1,
  buttonClassName,
  divClassName2,
}) => {
  return (
    <div className={`label-field ${className}`}>
      <div className={`your-bonus-card ${divClassName}`}>{text}</div>
      <div className={`field button-${button}`}>
        {button && (
          <>
            <div className={`enter-card-number ${divClassName1}`}>{text1}</div>
            <button className={`div-wrapper ${buttonClassName}`}>
              <div className={`text-wrapper-2 ${divClassName2}`}>Apply</div>
            </button>
          </>
        )}

        {!button && <div className={`enter-card-number-2 ${divClassNameOverride}`}>{text1}</div>}
      </div>
    </div>
  );
};

LabelField.propTypes = {
  button: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
};
