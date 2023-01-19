import React from 'react';

const Container = ({ containerStyle, containerEventClick, children }) => {
  return React.createElement('div', { className: containerStyle, onClick: containerEventClick }, children);
};

export default Container;
