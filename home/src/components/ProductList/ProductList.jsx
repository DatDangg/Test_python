import React from "react";
import { Dropdown } from "../../part/Dropdown";
import { Pagination } from "../../part/Pagination";
import { ProductCard } from "../../part/ProductCard";
import "./productlist.css";

export const ProductList = () => {
    return (
        <div className="product">
            <div className="products">
              <div className="top-part">
                <div className="left-side">
                  <div className="text-wrapper-14">Selected Products:</div>
                  <div className="text-wrapper-15">85</div>
                </div>
                <Dropdown className="dropdown-instance" divClassName="design-component-instance-node" />
              </div>
              <div className="products">
                <div className="row">
                  <ProductCard
                    buttonDivClassName="design-component-instance-node"
                    className="product-card-instance"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="product-card-3"
                    iconLikeIconLikeClassName="product-card-2"
                    iphonePro="/img/iphone-14-pro-1-2.png"
                    like={false}
                    price="$1437"
                    productDescription="Apple iPhone 14 Pro 512GB Gold (MQ233)"
                  />
                  <ProductCard
                    buttonDivClassName="design-component-instance-node"
                    className="product-card-instance"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="product-card-3"
                    iconLikeIconLikeClassName="product-card-4"
                    iphonePro="/img/iphone-14-pro-1-3.png"
                    like={false}
                    price="$510"
                    productDescription="Apple iPhone 11 128GB White (MQ233)"
                  />
                  <ProductCard
                    buttonDivClassName="design-component-instance-node"
                    className="product-card-instance"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="product-card-3"
                    iconLikeIconLikeClassName="product-card-5"
                    iphonePro="/img/iphone-14-pro-1-4.png"
                    like={false}
                    price="$550"
                    productDescription={
                      <>
                        Apple iPhone 11 128GB White
                        <br />
                        (MQ233)
                      </>
                    }
                  />
                </div>
                <div className="row">
                  <ProductCard
                    buttonDivClassName="design-component-instance-node"
                    className="product-card-instance"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="product-card-3"
                    iconLikeIconLikeClassName="product-card-6"
                    iphonePro="/img/iphone-14-pro-1-5.png"
                    like={false}
                    price="$1499"
                    productDescription="Apple iPhone 14 Pro 1TB Gold (MQ2V3)"
                  />
                  <ProductCard
                    buttonDivClassName="design-component-instance-node"
                    className="product-card-instance"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="product-card-3"
                    iconLikeIconLikeClassName="product-card-7"
                    iphonePro="/img/iphone-14-pro-1-6.png"
                    like={false}
                    price="$1399"
                    productDescription="Apple iPhone 14 Pro 1TB Gold (MQ2V3)"
                  />
                  <ProductCard
                    buttonDivClassName="design-component-instance-node"
                    className="product-card-instance"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="product-card-3"
                    iconLikeIconLikeClassName="product-card-8"
                    iphonePro="/img/iphone-14-pro-1-7.png"
                    like={false}
                    price="$1600"
                    productDescription="Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)"
                  />
                </div>
                <div className="row">
                  <ProductCard
                    buttonDivClassName="design-component-instance-node"
                    className="product-card-instance"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="product-card-3"
                    iconLikeIconLikeClassName="product-card-9"
                    iphonePro="/img/iphone-14-pro-1-8.png"
                    like={false}
                    price="$850"
                    productDescription="Apple iPhone 13 mini 128GB Pink (MLK23)"
                  />
                  <ProductCard
                    buttonDivClassName="design-component-instance-node"
                    className="product-card-instance"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="product-card-3"
                    iconLikeIconLikeClassName="product-card-10"
                    iphonePro="/img/iphone-14-pro-1-9.png"
                    like={false}
                    price="$1399"
                    productDescription="Apple iPhone 14 Pro 256GB Space Black (MQ0T3)"
                  />
                  <ProductCard
                    buttonDivClassName="design-component-instance-node"
                    className="product-card-instance"
                    divClassName="design-component-instance-node"
                    divClassNameOverride="product-card-3"
                    iconLikeIconLikeClassName="product-card-11"
                    iphonePro="/img/iphone-14-pro-1-10.png"
                    like={false}
                    price="$1399"
                    productDescription="Apple iPhone 14 Pro 256GB Silver (MQ103)"
                  />
                </div>
              </div>
            </div>
            <Pagination
              className="pagination-instance"
              pageNumberDivClassName="design-component-instance-node"
              pageNumberDivClassName1="design-component-instance-node"
              pageNumberDivClassName2="design-component-instance-node"
              pageNumberDivClassNameOverride="design-component-instance-node"
              pageNumberPageNumber="3"
              pageNumberPageNumber1="12"
            />
          </div>
    );
};