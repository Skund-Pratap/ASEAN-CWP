/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./header.css";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faSearch, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function HeaderComponent() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={require("./assets/logo1.png")} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/" className="nav-items">
            Memberships
          </a>
          <a href="/" className="nav-items">
            Shows
          </a>
          <a href="/" className="nav-items">
            Blog
          </a>
          <button className="contact-button">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            Contact
          </button>
          {!isSmallScreen && (
            <>
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <FontAwesomeIcon icon={faGlobe} className="world-icon" />
            </>
          )}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}