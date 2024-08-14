import React from "react";
import { Button } from "../../part/Button";
import "./style.css";

export const Banner = () => {
    return (
        <div className="banner">
        <div className="content">
          <div className="titles">
            <div className="text-wrapper-5">Pro.Beyond.</div>
            <p className="p">
              <span className="span">IPhone 14 </span>
              <span className="text-wrapper-6">Pro</span>
            </p>
          </div>
          <p className="text-wrapper-7">Created to change everything for the better. For everyone</p>
          <Button
            buttonText="Shop Now"
            className="design-component-instance-node"
            divClassName="design-component-instance-node-2"
            icon={false}
            state="white-stroke"
          />
        </div>
        <div className="iphone-image" />
      </div>
    );
};