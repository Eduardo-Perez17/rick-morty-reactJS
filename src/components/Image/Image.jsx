import React from 'react';

const Image = ({ imageStyle, srcImage, altImage, imageEventClick, children }) => {
  return React.createElement('img', { className: imageStyle, src: srcImage, alt: altImage, onClick: imageEventClick }, children);
};

export default Image;
