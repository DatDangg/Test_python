/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon24PxChevronDown1 } from "../../icons/Icon24PxChevronDown1";
import "./style.css";

export const Dropdown = ({ className, divClassName }) => {
  return (
    <div className={`dropdown ${className}`}>
      <div className={`div ${divClassName}`}>By rating</div>
      <Icon24PxChevronDown1 className="icon-chevron" />
    </div>
  );
};
