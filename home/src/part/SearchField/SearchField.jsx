/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon32PxSearch1 } from "../../icons/Icon32PxSearch1";
import "./style.css";

export const SearchField = ({ showSearchIcon = true, className, divClassName }) => {
  return (
    <div className={`search-field ${className}`}>
      {showSearchIcon && <Icon32PxSearch1 className="icon-search" />}

      <div className={`text-wrapper ${divClassName}`}>Search</div>
    </div>
  );
};

SearchField.propTypes = {
  showSearchIcon: PropTypes.bool,
};
