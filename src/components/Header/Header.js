import React from "react";
import "./Header.css";
import images from "../../utils/images";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header
      className={`header ${location.pathname === "/" ? "header_dark" : ""}`}
    >
      <Link className="header__logo-container" to="/">
        <img className="header__logo" src={images.headerLogo} alt="logo" />
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
