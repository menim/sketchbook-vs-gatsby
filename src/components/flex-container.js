import React from 'react'
import PropTypes from 'prop-types'

const FlexContainer = ({ params, children }) => (
  <div className={`l-flex ${params}`}>
    { children }
  </div>
)
  
export default FlexContainer

FlexContainer.propTypes = {
  params: PropTypes.string,
  children: PropTypes.node.isRequired,
}