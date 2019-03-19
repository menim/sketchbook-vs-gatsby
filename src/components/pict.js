import React from 'react';


const Pict = (props) => (
  <picture>
    <source srcSet={`${props.src}.webp`} type="image/webp" />
    <img height={props.height} src={`${props.src}.${props.fallbackFormat}`} /> 
  </picture>
)

export default Pict 