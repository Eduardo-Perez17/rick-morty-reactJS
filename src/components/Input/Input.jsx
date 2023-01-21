import React from 'react';

const Input = ({ typeInput, placeholderInput, nameInput, valueInput, eventInputOnChange }) => {
  return React.createElement('input', { type: typeInput, placeholder: placeholderInput, name: nameInput, value: valueInput, onChange: eventInputOnChange });
};

export default Input;
