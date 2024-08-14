import React from "react";
import { ChecboxField } from "../../part/ChecboxField";
import { ConcreteComponentNode } from "../../part/ConcreteComponentNode";
import { SearchField } from "../../part/SearchField";
import { DoneRound1 } from "../../icons/DoneRound1"; 
import "./filter.css";

export const Filter = () => {
    return (
        <div className="filters">
            <div className="frame-2">
              <div className="frame-wrapper">
                <div className="frame-3">
                  <div className="text-wrapper-8">Brand</div>
                  <img className="img" alt="Icon control expand" src="/img/icon-control-expand-less.svg" />
                </div>
              </div>
              <div className="search-brands">
                <SearchField className="search-field-instance" divClassName="design-component-instance-node" />
                <div className="brands">
                  <ChecboxField
                    appleClassName="design-component-instance-node"
                    className="checbox-field-instance"
                    icon={<DoneRound1 className="logo" />}
                    spanClassName="checbox-field-2"
                  />
                  <div className="checbox-field-3">
                    <ConcreteComponentNode checked={false} checkedTrueClassName="done-round-instance" />
                    <p className="p">
                      <span className="text-wrapper-9">Samsung</span>
                      <span className="text-wrapper-10">&nbsp;</span>
                      <span className="text-wrapper-11">125</span>
                    </p>
                  </div>
                  <div className="checbox-field-3">
                    <ConcreteComponentNode checked={false} checkedTrueClassName="done-round-instance" />
                    <p className="p">
                      <span className="text-wrapper-9">Xiaomi</span>
                      <span className="text-wrapper-10">&nbsp;</span>
                      <span className="text-wrapper-11">68</span>
                    </p>
                  </div>
                  <div className="checbox-field-3">
                    <ConcreteComponentNode checked={false} checkedTrueClassName="done-round-instance" />
                    <p className="p">
                      <span className="text-wrapper-9">Poco</span>
                      <span className="text-wrapper-10">&nbsp;</span>
                      <span className="text-wrapper-11">44</span>
                    </p>
                  </div>
                  <div className="checbox-field-3">
                    <ConcreteComponentNode checked={false} checkedTrueClassName="done-round-instance" />
                    <p className="apple-2">
                      <span className="text-wrapper-12">OPPO</span>
                      <span className="text-wrapper-13">&nbsp;</span>
                      <span className="text-wrapper-11">36</span>
                    </p>
                  </div>
                  <ChecboxField
                    appleClassName="design-component-instance-node"
                    className="checbox-field-instance"
                    spanClassName="checbox-field-2"
                    text="Honor "
                    text1="10"
                  />
                  <ChecboxField
                    appleClassName="design-component-instance-node"
                    className="checbox-field-instance"
                    spanClassName="checbox-field-2"
                    text="Motorola "
                    text1="34"
                  />
                  <div className="checbox-field-3">
                    <ConcreteComponentNode checked={false} checkedTrueClassName="done-round-instance" />
                    <p className="p">
                      <span className="text-wrapper-9">Nokia</span>
                      <span className="text-wrapper-10">&nbsp;</span>
                      <span className="text-wrapper-11">22</span>
                    </p>
                  </div>
                  <ChecboxField
                    appleClassName="design-component-instance-node"
                    className="checbox-field-instance"
                    spanClassName="checbox-field-2"
                    text="Realme "
                    text1="35"
                  />
                </div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-3">
                <div className="text-wrapper-8">Battery capacity</div>
                <img className="img" alt="Icon control expand" src="/img/icon-control-expand-more-4.svg" />
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-3">
                <div className="text-wrapper-8">Screen type</div>
                <img className="img" alt="Icon control expand" src="/img/icon-control-expand-more-4.svg" />
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-3">
                <div className="text-wrapper-8">Screen diagonal</div>
                <img className="img" alt="Icon control expand" src="/img/icon-control-expand-more-4.svg" />
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-3">
                <div className="text-wrapper-8">Protection class</div>
                <img className="img" alt="Icon control expand" src="/img/icon-control-expand-more-4.svg" />
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-3">
                <div className="text-wrapper-8">Built-in memory</div>
                <img className="img" alt="Icon control expand" src="/img/icon-control-expand-more-4.svg" />
              </div>
            </div>
          </div>
    );
};