import React from 'react'

function Input({ name, placeholder, type, text }) {
    return (
        <div className="row">
          <label htmlFor={name}>{text}</label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
          />
        </div>
    )
}

export default Input
