/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon24PxClose4 } from "../../icons/Icon24PxClose4";
import { Counter } from "../Counter";
import { ImagePhone } from "../ImagePhone";
import "./style.css";

export const CartProduct = ({
  className,
  imagePhoneImagePhoneClassName,
  divClassName,
  divClassNameOverride,
  counterDivClassName,
  divClassName1,
  text = "Apple iPhone 14 Pro Max 128Gb Deep Purple",
  text1 = "#25139526913984",
  text2 = "$1399",
}) => {
  return (
    <div className={`cart-product ${className}`}>
      <ImagePhone className={imagePhoneImagePhoneClassName} />
      <div className="content">
        <div className="info">
          <p className={`apple-iphone-pro ${divClassName}`}>{text}</p>
          <div className={`element ${divClassNameOverride}`}>{text1}</div>
        </div>
        <div className="right-side">
          <Counter className="counter-instance" divClassName={counterDivClassName} />
          <div className={`div ${divClassName1}`}>{text2}</div>
          <Icon24PxClose4 className="icon-close" />
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
