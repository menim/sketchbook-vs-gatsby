import React from 'react';
import PropTypes from 'prop-types'

const Container = ({ children }) => (
  <div className='l-container'>
    { children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container;

