import React from "react";
import { Icon16PxFacebook } from "../../icons/Icon16PxFacebook";
import { Icon16PxInstagram } from "../../icons/Icon16PxInstagram";
import { Icon16PxTiktok1 } from "../../icons/Icon16PxTiktok1";
import { Icon16PxTwitter } from "../../icons/Icon16PxTwitter";
import "./style.css";

export const Footer = () => {
    return (
        <footer className="footer">
        <div className="info-2">
          <div className="logo-text">
            <img className="img" alt="Logo" src="/img/logo-1.svg" />
            <p className="text-wrapper-31">
              We are a residential interior design firm located in Portland. Our boutique-studio offers more than
            </p>
          </div>
          <div className="footer-navigation">
            <div className="section">
              <div className="text-wrapper-32">Services</div>
              <div className="text-wrapper-33">Bonus program</div>
              <div className="text-wrapper-33">Gift cards</div>
              <div className="text-wrapper-33">Credit and payment</div>
              <div className="text-wrapper-33">Service contracts</div>
              <div className="text-wrapper-33">Non-cash account</div>
              <div className="text-wrapper-33">Payment</div>
            </div>
            <div className="section">
              <div className="text-wrapper-32">Assistance to the buyer</div>
              <div className="text-wrapper-33">Find an order</div>
              <div className="text-wrapper-33">Terms of delivery</div>
              <p className="text-wrapper-33">Exchange and return of goods</p>
              <div className="text-wrapper-33">Guarantee</div>
              <div className="text-wrapper-33">Frequently asked questions</div>
              <p className="text-wrapper-33">Terms of use of the site</p>
            </div>
          </div>
        </div>
        <div className="social-icons">
          <Icon16PxTwitter className="icon-instance-node-2" />
          <Icon16PxFacebook className="icon-instance-node-2" />
          <Icon16PxTiktok1 className="icon-instance-node-2" />
          <Icon16PxInstagram className="icon-instance-node-2" />
        </div>
      </footer>
    );
};