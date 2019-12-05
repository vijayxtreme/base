import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: `flex`,
      flexDirection: `row`,
      background: `#ffc500` 
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`
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
          {siteTitle} <sup style={{
            fontSize: `11px`,
            top: `-20px`
          }}>BETA</sup>
          <p style={{
            fontSize: `11px`,
            marginBottom: `.5rem`
          }}>by JavaScriptLA</p>
        </Link>
      </h1>
    </div>
    <div>
      <ul className="hb_menu">
        <li><Link to="/">home</Link></li>
        <li><Link to="/page-2/">blog</Link></li>
        <li><Link to="#">videos</Link></li>
        <li><Link to="#">events</Link></li>
        <li><Link to="#">workshops</Link></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
