import React from "react";
import { IconCameras } from "../../icons/IconCameras";
import { IconComputers } from "../../icons/IconComputers";
import { IconGaming1 } from "../../icons/IconGaming1";
import { IconHeadphones1 } from "../../icons/IconHeadphones1";
import { IconPhones1 } from "../../icons/IconPhones1";
import { IconSmartWatches1 } from "../../icons/IconSmartWatches1";
import "./style.css";

export const Categories = () => {
    return (
        <div className="category">
        <div className="top">
          <div className="text-wrapper-14">Browse By Category</div>
          <img className="img" alt="Arrow s" src="/img/arrow-s.svg" />
        </div>
        <div className="categories">
          <div className="category-card">
            <IconPhones1 className="icon-instance-node" />
            <div className="text-wrapper-15">Phones</div>
          </div>
          <div className="category-card">
            <IconSmartWatches1 className="icon-instance-node" />
            <div className="text-wrapper-16">Smart Watches</div>
          </div>
          <div className="category-card">
            <IconCameras className="icon-instance-node" />
            <div className="text-wrapper-17">Cameras</div>
          </div>
          <div className="category-card">
            <IconHeadphones1 className="icon-instance-node" />
            <div className="text-wrapper-18">Headphones</div>
          </div>
          <div className="category-card">
            <IconComputers className="icon-instance-node" />
            <div className="text-wrapper-19">Computers</div>
          </div>
          <div className="category-card">
            <IconGaming1 className="icon-instance-node" />
            <div className="text-wrapper-20">Gaming</div>
          </div>
        </div>
      </div>
    );
};