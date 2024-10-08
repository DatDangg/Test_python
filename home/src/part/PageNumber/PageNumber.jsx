/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PageNumber = ({ pageNumber = "1", selected, className, divClassName }) => {
  return (
    <div className={`page-number selected-${selected} ${className}`}>
      <div className={`element-2 ${divClassName}`}>{pageNumber}</div>
    </div>
  );
};

PageNumber.propTypes = {
  pageNumber: PropTypes.string,
  selected: PropTypes.bool,
};
