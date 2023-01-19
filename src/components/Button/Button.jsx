import React from 'react';

const Button = ({ buttonStyle, buttonType, children }) => {
  return React.createElement('button', { className: buttonStyle, type: buttonType }, children);
};

export default Button;
