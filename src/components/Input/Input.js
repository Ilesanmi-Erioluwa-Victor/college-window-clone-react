import React from 'react'
import { InputStyles } from './InputStyled'

const Input = ({value, name,type, onChange, placeholder, className}) => {
  return (
    <InputStyles
      value={value}
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default Input