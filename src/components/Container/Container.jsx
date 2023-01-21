import React from 'react';

const Container = ({ containerStyle, containerEventClick, children, idContainer }) => {
  return React.createElement('div', { className: containerStyle, onClick: containerEventClick, id: idContainer }, children);
};

export default Container;
