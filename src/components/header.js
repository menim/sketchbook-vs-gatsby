import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const Header = ({videoEnabled }) => (
  <header className={videoEnabled ? "header--video" : "header--simple"}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
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
    </div>
  </header>
)

Header.propTypes = {
  videoEnabled: PropTypes.bool,
}

Header.defaultProps = {
  videoEnabled: false,
}

export default Header
