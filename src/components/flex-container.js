import React from 'react'


const FlexContainer = ({ withVerticalOffset,children }) => (
  <div className={withVerticalOffset ? `l-flex vert-lg-margin` : `l-flex`}>
    { children }
  </div>
)

export default FlexContainer