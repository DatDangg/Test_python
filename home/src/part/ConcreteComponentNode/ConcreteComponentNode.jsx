/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ConcreteComponentNode = ({ checked, checkedTrueClassName }) => {
  return (
    <>
      {checked && (
        <img
          className={`concrete-component-node checked-true ${checkedTrueClassName}`}
          alt="Checked true"
          src="/img/checked-true.svg"
        />
      )}

      {!checked && <div className={`concrete-component-node checked-false ${checkedTrueClassName}`} />}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  checked: PropTypes.bool,
};
