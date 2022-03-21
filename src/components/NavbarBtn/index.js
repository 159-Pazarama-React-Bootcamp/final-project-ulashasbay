import React from "react";
import "./index.css";

function NavbarBtn({ text, ...args }) {
  return (
    <button className="btn" {...args}>
      {text}
    </button>
  );
}

export default NavbarBtn;
