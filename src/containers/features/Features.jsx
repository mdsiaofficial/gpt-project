import React from 'react';
import "./features.css";
import { Feature } from '../../components';



const featuresData = [
  {
    title: "Fast & Reliable",
    text: "It can give you results in seconds",
  },

  {
    title: "Secured & Privacy Controlled",
    text: "It can give you results in seconds",
  },

  {
    title: "Deletes your Personal Data",
    text: "It can give you results in seconds",
  },
];

const Features = () => {
  return (
    <div>
      <div className="gpt_features section_padding mt-10 mb-10" id='features'>
        {/*  */}
        <div className="gpt_features_heading">
          <h1 className="title_text">
            The Future is already Here
          </h1>
          <p>Requested Early Access to get Started... </p>
        </div>


        {/*  */}
        <div className="features_container">

          {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
