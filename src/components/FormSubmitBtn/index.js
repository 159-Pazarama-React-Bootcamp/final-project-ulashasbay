import React from "react";
import "./index.css"

function FormSubmitBtn({ text, ...args}) {
  return (
    <button className="app-check-button" type="submit" {...args}>
      {text}
    </button>
  );
}

export default FormSubmitBtn;
