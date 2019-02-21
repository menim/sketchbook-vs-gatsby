import React from 'react';


const Pict = (props) => (
  <picture>
    <source srcSet={`${props.src}.webp`} type="image/webp" />
    <img className={props.className} src={`${props.src}.png`} /> 
  </picture>
)

export default Pict 