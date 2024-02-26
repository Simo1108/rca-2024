import React from 'react'

 const ImageComponent = ({src, alt}) => {
  return (
  <img src={src} 
  className='card-img-top img-fluid'
  alt={alt} />
  );
};
export default ImageComponent;