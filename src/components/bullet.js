import React from 'react'
import PropTypes from  'prop-types'

const Bullet = ({ highlight }) => (
  <span className={highlight ? 'bullet bullet--highlight' : 'bullet'}></span>
)

export default Bullet

Bullet.propTypes = {
  highlight: PropTypes.bool
}