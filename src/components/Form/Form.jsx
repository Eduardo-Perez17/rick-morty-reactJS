import React from 'react';

const Form = ({ eventOnChange, children }) => {
  return React.createElement('form', { onChange: eventOnChange }, children);
};

export default Form;
