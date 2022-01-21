import React from "react";

function Input({ name, placeholder, type, text, ...args }) {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} placeholder={placeholder} {...args} />
    </>
  );
}

export default Input;
