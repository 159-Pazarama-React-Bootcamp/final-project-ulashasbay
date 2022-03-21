import React from "react";

function TextArea({ text, placeholder, name, ...args }) {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <textarea name={name} placeholder={placeholder} {...args} />
    </>
  );
}

export default TextArea;
