/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const OverallRating = ({ className, divClassName, divClassNameOverride, star = "/img/star-5.svg" }) => {
  return (
    <div className={`overall-rating ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>4.8</div>
      <div className={`div ${divClassNameOverride}`}>of 125 reviews</div>
      <div className="stars">
        <img className="star" alt="Star" src="/img/star-4.svg" />
        <img className="star" alt="Star" src="/img/star-4.svg" />
        <img className="star" alt="Star" src="/img/star-4.svg" />
        <img className="star" alt="Star" src="/img/star-4.svg" />
        <img className="star" alt="Star" src={star} />
      </div>
    </div>
  );
};

OverallRating.propTypes = {
  star: PropTypes.string,
};
