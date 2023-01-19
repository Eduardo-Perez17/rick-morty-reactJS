import React from 'react';

const Title = ({ size, titleStyle, children }) => {
  const sizeElement = {
    xl: 'h1',
    lg: 'h2',
    md: 'h3',
    sm: 'h4',
    xs: 'h5',
  };

  return React.createElement(sizeElement[size] || 'h1', { className: titleStyle }, children);
};

export default Title;
