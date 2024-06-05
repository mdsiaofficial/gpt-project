import React from 'react';
import "./navbar.css";
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from "../../assets/logo.svg";
import logo_ from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className='gpt__navbar flex justify-between items-center'>
      <div className="navbar_links flex-1 flex justify-start items-center">
        <div className="navbar_links_logo mr-[2rem]">
          <div className="logo_cls flex items-center">
            <img src={logo} alt="Logo" className=''/>
            <img src={logo_} alt="Logo" className='lgpng w-[50px] h-[50px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
