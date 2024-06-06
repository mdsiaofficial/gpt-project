import React from 'react';
import "./header.css";
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className=''>
      <div className="gpt__header section__padding" id="home">
        <div className="gpt__header_content">
          <h1 className="title_text">
            Let's Build Something with the new GPT.
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores ipsum eveniet enim non reiciendis omnis, suscipit exercitationem dolore amet esse repudiandae similique! Voluptate tenetur fugiat perspiciatis voluptates eligendi modi!</p>

          <div className="header_content_input">
            <input type="email" placeholder='Your email' />
            <button type='button'>Get Started</button>
          </div>

          <div className="header_content_people">
            <img src={people} alt="" />
            <p>1,500 people requested access...</p>
          </div>

        </div>
        <div className="header_img">
          <img src={ai} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
