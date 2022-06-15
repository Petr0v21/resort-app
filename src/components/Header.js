import React from "react";
import logo from "../img/favicon.png";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="grid">
        <div className="nav">
          <div className="name">
            <img src={logo} alt="Fun-Child" className="logo" />
            <h1>Cruise</h1>
          </div>
          <a href="tel:+380981191880" className="tel">
            +380 98 119 1880
          </a>
        </div>
        <div className="offer">
          {/* <!-- h1 должен быть  один на страничке (для поисковых роботов) --> */}
          <h2>Good Time for new emotions</h2>
        </div>
        <div className="btn-div">
          <a href="#container" className="btn-link">
            Book ticket
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
