import React from 'react'

function Input({ name, placeholder, type, text, ...args }) {
    return (
        <div className="row">
          <label htmlFor={name}>{text}</label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            {...args}
          />
        </div>
    )
}

export default Input
