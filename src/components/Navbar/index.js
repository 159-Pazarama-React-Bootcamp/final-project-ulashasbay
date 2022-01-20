import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLoginButton from "../NavLoginButton";
import PazaramaIcon from "../../assets/svg/PazaramaIcon";
import "./index.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <PazaramaIcon />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Anasayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/basvuru-olustur"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Başvuru Yap
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/basvuru-sorgula"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Başvuru Sorgula
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Giriş
            </Link>
          </li>
        </ul>
        <NavLoginButton />
      </nav>
    </>
  );
}

export default Navbar;
