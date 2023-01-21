import React from 'react';

const Button = ({ buttonStyle, buttonType, buttonEventOnClick, children }) => {
  return React.createElement('button', { className: buttonStyle, type: buttonType, onClick: buttonEventOnClick }, children);
};

export default Button;
