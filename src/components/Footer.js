import React from "react";
import logo from "../img/favicon.png";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-text">
          <img src={logo} alt="Fun-Child" className="logo" />
          <p>©2021</p>
          <p>+380981191880</p>
          <p>instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
