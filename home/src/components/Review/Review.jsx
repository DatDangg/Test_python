import React from "react";
import "./review.css";
import { OverallRating } from "../../part/OverallRating";

export const Review = () => {
    return (
        <div className="reviews">
        <div className="top">
          <div className="div-7">
            <div className="text-wrapper-27">Reviews</div>
          </div>
          <div className="overall-rating-2">
            <OverallRating
              className="overall-rating-instance"
              divClassName="design-component-instance-node"
              divClassNameOverride="design-component-instance-node"
              star="/img/star-5-1.svg"
            />
            <div className="schedule">
              <div className="div-9">
                <div className="text-wrapper-28">Excellent</div>
                <div className="slider">
                  <div className="rectangle" />
                </div>
    reiv            <div className="reviews-2">
                  <div className="text-wrapper-29">100</div>
                </div>
              </div>
              <div className="div-9">
                <div className="text-wrapper-28">Good</div>
                <div className="slider">
                  <div className="rectangle-2" />
                </div>
                <div className="reviews-2">
                  <div className="text-wrapper-29">&nbsp;&nbsp; 11</div>
                </div>
              </div>
              <div className="div-9">
                <div className="text-wrapper-28">Average</div>
                <div className="slider">
                  <div className="rectangle-3" />
                </div>
                <div className="reviews-2">
                  <div className="text-wrapper-29">&nbsp;&nbsp; 3</div>
                </div>
              </div>
              <div className="div-9">
                <div className="text-wrapper-28">Below Average</div>
                <div className="slider">
                  <div className="rectangle-4" />
                </div>
                <div className="reviews-2">
                  <div className="text-wrapper-29">&nbsp;&nbsp;8</div>
                </div>
              </div>
              <div className="div-9">
                <div className="text-wrapper-28">Poor</div>
                <div className="slider">
                  <div className="rectangle-5" />
                </div>
                <div className="reviews-2">
                  <div className="text-wrapper-29">&nbsp;&nbsp;1</div>
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="CVV">Leave Comment</div>
          </div>
        </div>
        <div className="reviews-3">
          <div className="review">
            <img className="user-pic" alt="User pic" src="/img/user-pic.png" />
            <div className="content-2">
              <div className="title-stars">
                <div className="title-data">
                  <div className="text-wrapper-30">Grace Carey</div>
                  <div className="text-wrapper-31">24 January,2023</div>
                </div>
                <div className="stars-2">
                  <img className="star-2" alt="Star" src="/img/star-4.svg" />
                  <img className="star-3" alt="Star" src="/img/star-2-4.svg" />
                  <img className="star-3" alt="Star" src="/img/star-3-4.svg" />
                  <img className="star-3" alt="Star" src="/img/star-4-4.svg" />
                  <img className="star-3" alt="Star" src="/img/star-5-4.svg" />
                </div>
              </div>
              <p className="text-wrapper-32">
                I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my
                purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data
                plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I
                bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was
                super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly
                recommend!!!🖤
              </p>
            </div>
          </div>
          <div className="review">
            <img className="user-pic" alt="User pic" src="/img/user-pic-1.png" />
            <div className="content-2">
              <div className="title-stars">
                <div className="title-data">
                  <div className="text-wrapper-30">Ronald Richards</div>
                  <div className="text-wrapper-31">24 January,2023</div>
                </div>
                <div className="stars-2">
                  <img className="star-2" alt="Star" src="/img/star-4.svg" />
                  <img className="star-3" alt="Star" src="/img/star-2-4.svg" />
                  <img className="star-3" alt="Star" src="/img/star-3-4.svg" />
                  <img className="star-3" alt="Star" src="/img/star-4-4.svg" />
                  <img className="star-3" alt="Star" src="/img/star-5-3.svg" />
                </div>
              </div>
              <p className="text-wrapper-32">
                This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out
                the current ones! (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone
                14 pro max and get several cords and plugs.
              </p>
            </div>
          </div>
          <div className="review">
            <img className="user-pic" alt="User pic" src="/img/user-pic-2.png" />
            <div className="content-2">
              <div className="title-stars">
                <div className="title-data">
                  <div className="text-wrapper-30">Darcy King</div>
                  <div className="text-wrapper-31">24 January,2023</div>
                </div>
                <div className="stars-2">
                  <img className="star-2" alt="Star" src="/img/star-4.svg" />
                  <img className="star-3" alt="Star" src="/img/star-2-4.svg" />
                  <img className="star-3" alt="Star" src="/img/star-3-4.svg" />
                  <img className="star-3" alt="Star" src="/img/star-4-4.svg" />
                  <img className="star-3" alt="Star" src="/img/star-5-4.svg" />
                </div>
              </div>
              <p className="text-wrapper-32">
                I might be the only one to say this but the camera is a little funky. Hoping it will change with a
                software update: otherwise, love this phone! Came in great condition
              </p>
              <div className="images-2">
                <img className="review-image" alt="Review" src="/img/review-image1.png" />
                <img className="review-image" alt="Review" src="/img/review-image2.png" />
              </div>
            </div>
          </div>
          <button className="button-4">
            <div className="text-wrapper-26">View More</div>
            <div className="icon-px-arrow-down" />
          </button>
        </div>
      </div>
    );
};