import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from './nav'

const Header = ({videoEnabled }) => (
  <header className={videoEnabled ? 'header header--video' : 'header header--simple'}>
      <Nav />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  videoEnabled: PropTypes.bool,
}

Header.defaultProps = {
  videoEnabled: false,
}

export default Header
