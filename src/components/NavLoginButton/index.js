import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function NavLoginButton() {
  return (
    <Link to="admin">
      <button className="btn">Giriş</button>
    </Link>
  );
}

export default NavLoginButton;
