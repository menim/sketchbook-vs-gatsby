import React from 'react'
import PropTypes from 'prop-types'

const Main = ({ children, smVerticalOffset }) => (
  <section className={smVerticalOffset ? 'main main--sm' : 'main' }>
    { children }
  </section>
)

export default Main

Main.propTypes = {
  children: PropTypes.node.isRequired,
  smVerticalOffset: PropTypes.bool
}