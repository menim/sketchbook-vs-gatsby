import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

const Layout = ({ children, intl }) => (
  <>
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  intl: PropTypes.object.isRequired
}