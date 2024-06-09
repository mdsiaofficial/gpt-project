import React from 'react';
import "./footer.css";
import gpt from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div>
      <div className="gpt_footer section__padding">
        <div className="footer_heading">
          <h1 className="title_text">
            Do you awant to step in to the future before others?
          </h1>
        </div>

        <div className="footer_btn">
          <button>Request Early Access</button>
        </div>

        <div className="footer_links">
          <div className="footer_links_logo">
            <img src={gpt} alt="" />
            <p>GPT Savar, Dhaka, <br/> All RIghts Reserved</p>
          </div>

          <div className="footer_links_div">
            <h4>Links</h4>
            <a href="">Overall</a>
            <a href="">Social Media</a>
            <a href="">Counters</a>
            <a href="">Contacts</a>
          </div>
          
          <div className="footer_links_div">
            <h4>Company</h4>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
            <a href="">Contact</a>
          </div>

          <div className="footer_links_div">
            <h4>Get in Touch</h4>
            <a href="">GPT Savar, Dhaka</a>
            <a href="">0123456789</a>
            <a href="">gptsavar@gmail.com</a>
          </div>
        </div>

        <div className="footer_cr">
          <p>GPT @2024 All Right Reserved </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
