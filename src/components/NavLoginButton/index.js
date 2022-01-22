import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function NavLoginButton({ text, to, ...args}) {
  return (
    <Link to={to}>
      <button className="btn" {...args}>{text}</button>
    </Link>
  );
}

export default NavLoginButton;
