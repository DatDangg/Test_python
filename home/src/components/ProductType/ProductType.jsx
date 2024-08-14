import React from "react";
import { Button } from "../../part/Button";
import "./style.css";

export const ProductType = () => {
    return (
<div className="products-type">
        <div className="big-banner-2">
          <div className="title-text-4">
            <div className="text-wrapper-24">Popular Products</div>
            <p className="text-wrapper-9">
              iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of
              use.
            </p>
            <Button
              buttonText="Shop Now"
              className="design-component-instance-node"
              divClassName="design-component-instance-node-2"
              icon={false}
              state="black-stroke"
            />
          </div>
          <div className="group">
            <div className="image-wrapper">
              <img className="image-2" alt="Image" src="/img/image-12.png" />
            </div>
          </div>
        </div>
        <div className="big-banner-3">
          <div className="title-text-4">
            <div className="text-wrapper-24">Ipad Pro</div>
            <p className="text-wrapper-9">
              iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of
              use.
            </p>
            <Button
              buttonText="Shop Now"
              className="design-component-instance-node"
              divClassName="design-component-instance-node-2"
              icon={false}
              state="black-stroke"
            />
          </div>
          <img className="image-3" alt="Image" src="/img/image-64.png" />
        </div>
        <div className="big-banner-4">
          <div className="title-text-4">
            <div className="text-wrapper-24">Samsung Galaxy</div>
            <p className="text-wrapper-9">
              iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of
              use.
            </p>
            <Button
              buttonText="Shop Now"
              className="design-component-instance-node"
              divClassName="design-component-instance-node-2"
              icon={false}
              state="black-stroke"
            />
          </div>
          <img className="image-4" alt="Image" src="/img/image-41.png" />
        </div>
        <div className="big-banner-5">
          <div className="title-text-4">
            <div className="text-wrapper-25">Macbook Pro</div>
            <p className="text-wrapper-9">
              iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of
              use.
            </p>
            <Button
              buttonText="Shop Now"
              className="design-component-instance-node"
              divClassName="design-component-instance-node-2"
              icon={false}
              state="white-stroke"
            />
          </div>
          <img className="macbook" alt="Macbook" src="/img/macbook-1.png" />
        </div>
      </div>
    );
};