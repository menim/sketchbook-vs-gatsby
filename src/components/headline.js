import React from 'react';


const Headline = ({center, children}) => (
   <h1 className={`headline ${center && "headline--center"}`}>{children}</h1>
)

export default Headline