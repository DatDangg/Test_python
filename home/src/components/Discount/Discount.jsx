import React from "react";
import { ProductCard } from "../../part/ProductCard";
import "./style.css";

export const Discount = () => {
    return (
        <div className="discount-products">
        <div className="text-wrapper-26">Discounts up to -50%</div>
        <div className="row">
          <ProductCard
            className="product-card-instance"
            divClassName="design-component-instance-node-2"
            divClassNameOverride="product-card-3"
            iconLikeIconLikeClassName="product-card-4"
            iphonePro="/img/iphone-14-pro-1-10.png"
            like={false}
            price="$1437"
            productDescription="Apple iPhone 14 Pro 512GB Gold (MQ233)"
            stateSmallStrokeWrapperDivClassName="design-component-instance-node-2"
          />
          <ProductCard
            className="product-card-instance"
            divClassName="design-component-instance-node-2"
            divClassNameOverride="product-card-3"
            iconLikeIconLikeClassName="product-card-4"
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
          <ProductCard
            className="product-card-instance"
            divClassName="design-component-instance-node-2"
            divClassNameOverride="product-card-3"
            iconLikeIconLikeClassName="product-card-4"
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
            iconLikeIconLikeClassName="product-card-4"
            iphonePro="/img/iphone-14-pro-1-13.png"
            like={false}
            price="$1499"
            productDescription="Apple iPhone 14 Pro 1TB Gold (MQ2V3)"
            stateSmallStrokeWrapperDivClassName="design-component-instance-node-2"
          />
        </div>
      </div>
    );
};