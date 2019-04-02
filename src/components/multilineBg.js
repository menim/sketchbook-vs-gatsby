import React from 'react';
import PropTypes from 'prop-types'


const multilineBg = ({children}) => (
  <span className='multiline-bg multiline-bg--secondary-theme'>
    {children}
  </span>
) 

export default multilineBg;

multilineBg.propTypes = {
  children: PropTypes.node.isRequired
}