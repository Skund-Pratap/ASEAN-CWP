import React from "react";
import "./headerComponent.css";
import logo from "../../components/assets/logo1.png";

const HeaderComponent = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <section className="top-nav">
        <div>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>Memeberships</li>
          <li>Shows</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </section>
    </>
  );
};

export default HeaderComponent;