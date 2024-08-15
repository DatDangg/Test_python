/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon24PxEdit5 } from "../../icons/Icon24PxEdit5";
import { Icon24PxNoEdit5 } from "../../icons/Icon24PxNoEdit5";
import "./style.css";

export const Counter = ({ className, divClassName }) => {
  return (
    <div className={`counter ${className}`}>
      <Icon24PxNoEdit5 className="icon-instance-node" />
      <div className="number">
        <div className={`text-wrapper ${divClassName}`}>1</div>
      </div>
      <Icon24PxEdit5 className="icon-instance-node" />
    </div>
  );
};
