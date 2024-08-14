/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon24PxArrow1 } from "../../icons/Icon24PxArrow1";
import { Icon24PxArrow5 } from "../../icons/Icon24PxArrow5";
import { PageNumber } from "../PageNumber";
import "./style.css";

export const Pagination = ({
  className,
  pageNumberDivClassName,
  pageNumberDivClassNameOverride,
  pageNumberDivClassName1,
  pageNumberPageNumber = "1",
  pageNumberDivClassName2,
  pageNumberPageNumber1 = "5",
}) => {
  return (
    <div className={`pagination ${className}`}>
      <Icon24PxArrow5 className="icon-arrow" />
      <div className="page-numbers">
        <PageNumber className="page-number-instance" divClassName={pageNumberDivClassName} pageNumber="1" selected />
        <PageNumber
          className="page-number-instance"
          divClassName={pageNumberDivClassNameOverride}
          pageNumber="2"
          selected={false}
        />
        <PageNumber
          className="page-number-instance"
          divClassName={pageNumberDivClassName1}
          pageNumber={pageNumberPageNumber}
          selected={false}
        />
        <div className="div-2">
          <div className="ellipse" />
          <div className="ellipse" />
          <div className="ellipse" />
          <div className="ellipse" />
        </div>
        <PageNumber
          className="page-number-instance"
          divClassName={pageNumberDivClassName2}
          pageNumber={pageNumberPageNumber1}
          selected={false}
        />
      </div>
      <Icon24PxArrow1 className="icon-arrow" color="black" />
    </div>
  );
};

Pagination.propTypes = {
  pageNumberPageNumber: PropTypes.string,
  pageNumberPageNumber1: PropTypes.string,
};
