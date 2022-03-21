import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavbarBtn from "../NavbarBtn";
import PazaramaIcon from "../../assets/svg/PazaramaIcon";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateIsLoggedIn } from "../../redux/isLoggedIn/isLoggedInSlice";
import "./index.css";

function Navbar() {
  let navigate = useNavigate();

  const isLoggedInValue = useSelector((state) => state.isLoggedIn.value);
  const dispatch = useDispatch();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    dispatch(updateIsLoggedIn(false));
    navigate("/");
    closeMobileMenu();
  };

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
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
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
          {isLoggedInValue && (
            <li className="nav-item">
              <Link
                to="/admin/basvuru-listesi"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Başvuru Listesi
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link
              to="/basvuru-sorgula"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Başvuru Sorgula
            </Link>
          </li>
          {!isLoggedInValue ? (
            <li>
              <Link
                to="/admin"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Giriş
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/" className="nav-links-mobile" onClick={handleLogout}>
                Çıkış
              </Link>
            </li>
          )}
        </ul>

        {!isLoggedInValue ? (
          <NavbarBtn text="Giriş" onClick={() => navigate("/admin")} />
        ) : (
          <NavbarBtn text="Çıkış" onClick={handleLogout} />
        )}
      </nav>
    </>
  );
}

export default Navbar;
