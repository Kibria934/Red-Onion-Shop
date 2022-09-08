import React from "react";
import banner2 from "../../../../images/bannerbackground.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-section mt-2">
      <div className="header-tag">
        <p>Best food waiting for your belly</p>
      </div>
      <img className="" flued src={banner2} alt="Banner image" />
      <div className="input-section">
        <input type="text" placeholder="Search your food items" />
        <button type="text">Search</button>
      </div>
    </div>
  );
};

export default Header;
