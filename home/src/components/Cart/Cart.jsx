import React from "react";
import { CartProduct } from "../../part/CartProduct";
import "./cart.css";

export const Cart = () => {
    return (
        <div className="cart">
            <div className="text-wrapper-6">Shopping Cart</div>
            <div className="products">
              <CartProduct
                className="cart-product-instance"
                counterDivClassName="design-component-instance-node-2"
                divClassName="design-component-instance-node-2"
                divClassName1="design-component-instance-node-2"
                divClassNameOverride="design-component-instance-node-2"
                imagePhoneImagePhoneClassName="design-component-instance-node"
              />
              <CartProduct
                className="cart-product-instance"
                counterDivClassName="design-component-instance-node-2"
                divClassName="design-component-instance-node-2"
                divClassName1="design-component-instance-node-2"
                divClassNameOverride="design-component-instance-node-2"
                imagePhoneImagePhoneClassName="cart-product-2"
                text="AirPods Max Silver"
                text1="#53459358345"
                text2=" $549"
              />
              <CartProduct
                className="design-component-instance-node-3"
                counterDivClassName="design-component-instance-node-2"
                divClassName="design-component-instance-node-2"
                divClassName1="design-component-instance-node-2"
                divClassNameOverride="design-component-instance-node-2"
                imagePhoneImagePhoneClassName="cart-product-3"
                text="Apple Watch Series 9 GPS 41mm Starlight Aluminium"
                text1="#63632324"
                text2=" $399"
              />
            </div>
          </div>
    );
};