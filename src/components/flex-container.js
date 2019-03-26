import React from 'react'

const FlexContainer = ({ params, children }) => (
  <div className={`l-flex ${params}`}>
    { children }
  </div>
)
  
export default FlexContainer