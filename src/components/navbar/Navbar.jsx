import React, { useState } from 'react';
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/logo.svg";

const Menu = () => {
  return (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#what">What is GPT</a></p>
      <p><a href="#possibility">Claude</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  )
}
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt__navbar flex justify-between items-center'>
      <div className="navbar_links flex-1 flex justify-start items-center">
        <div className="navbar_links_logo px-3 md:px-0">
            <img src={logo} alt="Logo" className='' />
          
        </div>
        <div className="navbar_links_container">
          <Menu />
        </div>
      </div>

      <div className="navbar_sign ">
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>

      <div className="navbar_menu">
        {toggleMenu ?
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          :
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className="navbar_menu_container scale-up-center">
            <div className="navbar_menu_container_links">
              <Menu />
              <div className="navbar_menu_container_links_sign ">
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
