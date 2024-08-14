/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconLike } from "../IconLike";
import { StateSmallStrokeWrapper } from "../StateSmallStrokeWrapper";
import "./style.css";

export const ProductCard = ({
  productDescription = "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
  showPrice = true,
  price = "$1399",
  showButton = true,
  like,
  className,
  iconLikeIconLikeClassName,
  divClassName,
  divClassNameOverride,
  stateSmallStrokeWrapperDivClassName,
  iphonePro = "/img/iphone-14-pro-1-1.png",
}) => {
  return (
    <div className={`product-card ${className}`}>
      <div className="top-section">
        <IconLike className={iconLikeIconLikeClassName} />
      </div>
      <img className="iphone-pro" alt="Iphone pro" src={iphonePro} />
      <div className="text-icon">
        <div className="info">
          <p className={`apple-iphone-pro ${divClassName}`}>{productDescription}</p>
          {!like && (
            <>
              <>{showPrice && <div className={`element ${divClassNameOverride}`}>{price}</div>}</>
            </>
          )}

          {like && <div className={`element ${divClassNameOverride}`}>{price}</div>}
        </div>
        {showButton && (
          <StateSmallStrokeWrapper
            buttonText="Buy Now"
            className="button-instance"
            divClassName={stateSmallStrokeWrapperDivClassName}
            icon={false}
            state="fill-small"
          />
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productDescription: PropTypes.string,
  showPrice: PropTypes.bool,
  price: PropTypes.string,
  showButton: PropTypes.bool,
  like: PropTypes.bool,
  iphonePro: PropTypes.string,
};
