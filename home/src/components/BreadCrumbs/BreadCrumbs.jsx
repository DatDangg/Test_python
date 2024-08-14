import React from "react";
import { Icon24PxArrow1 } from "../../icons/Icon24PxArrow1";
import "./breadcrumbs.css";

export const BreadCrumbs = () => {
    return (
        <div className="breadcrumbs">
        <div className="text-wrapper-6">Home</div>
        <Icon24PxArrow1 className="img" color="#A4A4A4" />
        <div className="text-wrapper-6">Catalog</div>
        <Icon24PxArrow1 className="img" color="#A4A4A4" />
        <div className="text-wrapper-7">Smartphones</div>
      </div>
    );
};