import React from 'react';

const Paragraph = ({ paragraphStyle, children }) => {
  return React.createElement('p', { className: paragraphStyle }, children);
};

export default Paragraph;
