import React from "react";
import "./productdetail.css";

export const ProductDetail = () => {
    return (
        <div className="details">
        <div className="content">
          <div className="text-wrapper-22">Details</div>
          <p className="just-as-a-book-is">
            Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is
            the display. Nothing surprising, because advanced technologies allow you to practically level the display
            frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good
            that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise
            the quality of the picture provided by the products of the Californian brand. And last year&#39;s 6.7-inch
            Retina panels, which had ProMotion, caused real admiration for many.
          </p>
          <div className="details-2">
            <div className="div-2">
              <div className="text-wrapper-23">Screen</div>
              <div className="div-3">
                <div className="line">
                  <div className="text-wrapper-24">Screen diagonal</div>
                  <div className="text-wrapper-25">6.7&#34;</div>
                </div>
                <div className="line">
                  <div className="text-wrapper-24">The screen resolution</div>
                  <div className="text-wrapper-25">2796x1290</div>
                </div>
                <div className="line-2">
                  <div className="text-wrapper-24">The screen refresh rate</div>
                  <div className="text-wrapper-25">120 Hz</div>
                </div>
                <div className="line-2">
                  <div className="text-wrapper-24">The pixel density</div>
                  <div className="text-wrapper-25">460 ppi</div>
                </div>
                <div className="line-2">
                  <div className="text-wrapper-24">Screen type</div>
                  <div className="text-wrapper-25">OLED</div>
                </div>
                <div className="line-2">
                  <div className="text-wrapper-24">Additionally</div>
                  <p className="dynamic-island">
                    Dynamic Island
                    <br />
                    Always-On display
                    <br />
                    HDR display
                    <br />
                    True Tone
                    <br />
                    Wide color (P3)
                  </p>
                </div>
              </div>
            </div>
            <div className="div-2">
              <div className="text-wrapper-23">CPU</div>
              <div className="div-3">
                <div className="line-2">
                  <div className="text-wrapper-24">CPU</div>
                  <div className="text-wrapper-25">A16 Bionic</div>
                </div>
                <div className="line-2">
                  <div className="text-wrapper-24">Number of cores</div>
                  <div className="text-wrapper-25">6</div>
                  <img className="line-3" alt="Line" src="/img/line-14.svg" />
                </div>
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