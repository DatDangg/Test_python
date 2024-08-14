import React from "react";
import { ProductCard } from "../../part/ProductCard";
import "./style.css";

export const Product = () => {
    return (
        <div className="products">
        <div className="tags">
          <div className="selected">
            <div className="text-wrapper-21">New Arrival</div>
            <img className="line" alt="Line" src="/img/line.svg" />
          </div>
          <div className="text-wrapper-22">Bestseller</div>
          <div className="text-wrapper-23">Featured Products</div>
        </div>
        <div className="div-3">
          <div className="row">
            <ProductCard
              className="product-card-instance"
              divClassName="design-component-instance-node-2"
              divClassNameOverride="product-card-3"
              iconLikeIconLikeClassName="product-card-2"
              like={false}
              price="$900"
              productDescription="Apple iPhone 14 Pro Max 128GB Deep Purple"
              stateSmallStrokeWrapperDivClassName="design-component-instance-node-2"
            />
            <ProductCard
              className="product-card-instance"
              divClassName="design-component-instance-node-2"
              divClassNameOverride="product-card-3"
              iconLikeIconLikeClassName="product-card-2"
              iphonePro="/img/iphone-14-pro-1-3.png"
              like={false}
              price="$2535"
              productDescription="Blackmagic Pocket Cinema Camera 6k"
              stateSmallStrokeWrapperDivClassName="design-component-instance-node-2"
            />
            <ProductCard
              className="product-card-instance"
              divClassName="design-component-instance-node-2"
              divClassNameOverride="product-card-3"
              iconLikeIconLikeClassName="product-card-2"
              iphonePro="/img/iphone-14-pro-1-12.png"
              like={false}
              price="$399"
              productDescription="Apple Watch Series 9 GPS 41mm Starlight Aluminium"
              stateSmallStrokeWrapperDivClassName="design-component-instance-node-2"
            />
            <ProductCard
              className="product-card-instance"
              divClassName="design-component-instance-node-2"
              divClassNameOverride="product-card-3"
              iconLikeIconLikeClassName="product-card-2"
              iphonePro="/img/iphone-14-pro-1-11.png"
              like={false}
              price="$549"
              productDescription={
                <>
                  AirPods Max Silver
                  <br />
                  Starlight Aluminium
                </>
              }
              stateSmallStrokeWrapperDivClassName="design-component-instance-node-2"
            />
          </div>
          <div className="row">
            <ProductCard
              className="product-card-instance"
              divClassName="design-component-instance-node-2"
              divClassNameOverride="product-card-3"
              iconLikeIconLikeClassName="product-card-4"
              iphonePro="/img/iphone-14-pro-1-6.png"
              like={false}
              price="$369"
              productDescription="Samsung Galaxy Watch6 Classic 47mm Black"
              stateSmallStrokeWrapperDivClassName="design-component-instance-node-2"
            />
            <ProductCard
              className="product-card-instance"
              divClassName="design-component-instance-node-2"
              divClassNameOverride="product-card-3"
              iconLikeIconLikeClassName="product-card-5"
              iphonePro="/img/iphone-14-pro-1-7.png"
              like
              price="$1799"
              productDescription="Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"
              stateSmallStrokeWrapperDivClassName="design-component-instance-node-2"
            />
            <ProductCard
              className="product-card-instance"
              divClassName="design-component-instance-node-2"
              divClassNameOverride="product-card-3"
              iconLikeIconLikeClassName="product-card-4"
              iphonePro="/img/iphone-14-pro-1-8.png"
              like={false}
              price="$99.99"
              productDescription={
                <>
                  Galaxy Buds FE
                  <br />
                  Graphite
                </>
              }
              stateSmallStrokeWrapperDivClassName="design-component-instance-node-2"
            />
            <ProductCard
              className="product-card-instance"
              divClassName="design-component-instance-node-2"
              divClassNameOverride="product-card-3"
              iconLikeIconLikeClassName="product-card-4"
              iphonePro="/img/iphone-14-pro-1-9.png"
              like={false}
              price="$398"
              productDescription="Apple iPad 9 10.2&#34; 64GB Wi-Fi Silver (MK2L3) 2021"
              stateSmallStrokeWrapperDivClassName="design-component-instance-node-2"
            />
          </div>
        </div>
      </div>
    );
};