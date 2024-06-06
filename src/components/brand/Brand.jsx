import React from 'react';
import "./brand.css";
import { aiseo, google, slack, atlassian, dropbox, shopify } from "./import";

const Brand = () => {
  return (
    <div>
      <h1>Sponsors</h1>
      <div className="gpt__brand section_brand">
        <div className="">
          <img src={aiseo} alt="aiseo" />
        </div>
        <div className="">
          <img src={slack} alt="slack" />
        </div>
        <div className="">
          <img src={atlassian} alt="atlassian" />
        </div>
        <div className="">
          <img src={dropbox} alt="dropbox" />
        </div>
        <div className="">
          <img src={google} alt="google" />
        </div>
        <div className="">
          <img src={shopify} alt="shopify" />
        </div>
      </div>
    </div>
  )
}

export default Brand
