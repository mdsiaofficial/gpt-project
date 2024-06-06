import React from 'react';
import "./gptfeature.css";
import { Feature } from '../../components';

const GPTfeature = () => {
  return (
    <div>
      <div className="gptfeat section_feat" id='gptfeat'>
        <div className="fetures">
          <Feature />
        </div>

        <div className="feat_heading">
          <h1 className="title_text">
          The Possibilities of GPT
          </h1>
          <p>Explore the Library</p>
        </div>
        <div className="gpt_feat_container">

          <Feature />
          <Feature />
          <Feature />
        </div>
      </div>
    </div>
  )
}

export default GPTfeature
