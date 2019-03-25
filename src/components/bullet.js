import React from 'react'

const Bullet = ({ highlight }) => (
  <span className={highlight ? 'bullet bullet--highlight' : 'bullet'}></span>
)

export default Bullet