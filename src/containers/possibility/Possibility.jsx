import React from 'react';
import "./possibility.css";
import posImg from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div>
      <div className="gpt_possibility section_padding">
        <div className="gpt_possibility_img">
          <img src={posImg} alt="" />
        </div>

        <div className="gpt_possibility_content">
          <h4>Requested Early Access to Get Started!</h4>
          <h1 className='title_text'>The possibility goes beyond Imagination!!!</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae culpa enim perferendis inventore repellat iste dolorum sapiente dolorem distinctio cum, aperiam similique id dignissimos quibusdam quaerat illo officia soluta officiis!</p>
          <h4>Requested Early Access to Get Started!</h4>
        </div>
      </div>
    </div>
  )
}

export default Possibility
