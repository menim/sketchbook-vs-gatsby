import React from 'react'
import PropTypes from 'prop-types'

const Main = ({ children }) => (
  <section className='main'>
    { children }
  </section>
)

export default Main

Main.propTypes = {
  children: PropTypes.node.isRequired
}