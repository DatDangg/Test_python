import React from "react";
import "./productinfo.css";

export const ProductInfo = () => {
    return (
        <div className="main-info">
        <div className="images">
          <div className="product-images">
            <img className="image" alt="Image" src="/img/image-57.png" />
            <img className="image-2" alt="Image" src="/img/image-61.png" />
            <img className="image-3" alt="Image" src="/img/image-62.png" />
            <img className="image-4" alt="Image" src="/img/image-63.png" />
          </div>
          <img className="image-5" alt="Image" src="/img/image.png" />
        </div>
        <div className="info-2">
          <div className="div-2">
            <div className="div-3">
              <p className="p">Apple iPhone 14 Pro Max</p>
              <div className="div-4">
                <div className="text-wrapper-7">$1399</div>
                <div className="text-wrapper-8">$1499</div>
              </div>
            </div>
            <div className="div-3">
              <div className="colors">
                <div className="text-wrapper-9">Select color :</div>
                <div className="frame">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                  <div className="ellipse-3" />
                  <div className="ellipse-4" />
                  <div className="ellipse-5" />
                </div>
              </div>
              <div className="div-4">
                <div className="tab">
                  <div className="text-wrapper-10">128GB</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-11">256GB</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-11">512GB</div>
                </div>
                <div className="tab-2">
                  <div className="text-wrapper-12">1TB</div>
                </div>
              </div>
              <div className="div-5">
                <div className="detail">
                  <img className="img-2" alt="Icon screensize" src="/img/icon-24px-screensize.svg" />
                  <p className="div-6">
                    <span className="span">Screen size</span>
                    <span className="text-wrapper-13">
                      {" "}
                      <br />
                    </span>
                    <span className="text-wrapper-14">6.7&#34;</span>
                  </p>
                </div>
                <div className="detail-2">
                  <img className="img-2" alt="Smartphone rotate" src="/img/smartphone-rotate-2-svgrepo-com-2.svg" />
                  <p className="div-6">
                    <span className="text-wrapper-15">CPU</span>
                    <span className="text-wrapper-13"> </span>
                    <span className="text-wrapper-14">Apple A16 Bionic</span>
                  </p>
                </div>
                <div className="detail-2">
                  <img className="img-2" alt="Smartphone rotate" src="/img/smartphone-rotate-2-svgrepo-com-2-1.svg" />
                  <p className="div-6">
                    <span className="text-wrapper-15">Number of Cores</span>
                    <span className="text-wrapper-13"> </span>
                    <span className="text-wrapper-14">6</span>
                  </p>
                </div>
                <div className="detail-2">
                  <img className="img-2" alt="Smartphone rotate" src="/img/smartphone-rotate-2-svgrepo-com-2-2.svg" />
                  <p className="div-6">
                    <span className="text-wrapper-15">Main camera </span>
                    <span className="text-wrapper-14">48-12 -12 MP</span>
                  </p>
                </div>
                <div className="detail-2">
                  <img className="img-2" alt="Smartphone rotate" src="/img/smartphone-rotate-2-svgrepo-com-2-3.svg" />
                  <p className="div-6">
                    <span className="text-wrapper-15">Front-camera</span>
                    <span className="text-wrapper-13"> </span>
                    <span className="text-wrapper-14">12 MP</span>
                  </p>
                </div>
                <div className="detail-2">
                  <img className="img-2" alt="Smartphone rotate" src="/img/smartphone-rotate-2-svgrepo-com-2-4.svg" />
                  <p className="div-6">
                    <span className="text-wrapper-15">Battery capacity</span>
                    <span className="text-wrapper-13"> </span>
                    <span className="text-wrapper-14">4323 mAh</span>
                  </p>
                </div>
              </div>
              <p className="text">
                <span className="text-wrapper-16">
                  Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout
                  the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras{" "}
                </span>
                <span className="text-wrapper-17">more...</span>
              </p>
            </div>
          </div>
          <div className="div-5">
            <button className="button-2">
              <div className="text-wrapper-18">Add to Wishlist</div>
            </button>
            <button className="button-3">
              <div className="text-wrapper-19">Add to Card</div>
            </button>
          </div>
          <div className="div-7">
            <div className="feature">
              <img className="img" alt="Icon delivery" src="/img/icon-56px-delivery.svg" />
              <p className="free-delivery">
                <span className="text-wrapper-20">
                  Free Delivery
                  <br />
                </span>
                <span className="text-wrapper-21">1-2 day</span>
                <span className="text-wrapper-20">&nbsp;</span>
              </p>
            </div>
            <div className="feature">
              <img className="img" alt="Icon stock" src="/img/icon-56px-stock.svg" />
              <p className="div-8">
                <span className="text-wrapper-20">
                  In Stock
                  <br />
                </span>
                <span className="text-wrapper-21">Today </span>
              </p>
            </div>
            <div className="feature">
              <img className="img" alt="Icon guaranteed" src="/img/icon-56px-guaranteed.svg" />
              <p className="div-8">
                <span className="text-wrapper-20">
                  Guaranteed
                  <br />
                </span>
                <span className="text-wrapper-21">1 year</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};