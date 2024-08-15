import React from "react";
import { Button } from "../../part/Button";
import { LabelField } from "../../part/LabelField";
import "./summary.css";

export const Summary = () => {
    return (
        <div className="summary">
            <div className="text-wrapper-7">Order Summary</div>
            <div className="content-3">
              <div className="div-2">
                <div className="div-2">
                  <LabelField
                    button={false}
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-2"
                    divClassNameOverride="design-component-instance-node-2"
                    text="Discount code / Promo code"
                    text1="Code"
                  />
                  <LabelField
                    button
                    buttonClassName="label-field-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-2"
                    divClassName1="design-component-instance-node-2"
                    divClassName2="design-component-instance-node-2"
                    text="Your bonus card number"
                    text1="Enter Card Number"
                  />
                </div>
                <div className="div-3">
                  <div className="div-4">
                    <div className="text-wrapper-8">Subtotal</div>
                    <div className="text-wrapper-9">$2347</div>
                  </div>
                  <div className="div-5">
                    <div className="div-3">
                      <div className="div-4">
                        <div className="text-wrapper-10">Estimated Tax</div>
                        <div className="text-wrapper-9">$50</div>
                      </div>
                    </div>
                    <div className="div-3">
                      <div className="div-4">
                        <div className="estimated-shipping">Estimated shipping &amp; Handling</div>
                        <div className="text-wrapper-9">$29</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-4">
                    <div className="text-wrapper-8">Total</div>
                    <div className="text-wrapper-9">$2426</div>
                  </div>
                </div>
              </div>
              <Button
                buttonText="Checkout"
                className="button-instance"
                divClassName="design-component-instance-node-2"
                icon={false}
                state="fill"
              />
            </div>
          </div>
    );
};