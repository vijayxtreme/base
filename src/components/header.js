import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <span className="hbicon"></span>
      <h1 className="hb_logo">
        <Link to="/">
          {siteTitle} 
          <sup style={{
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
        <li><Link to="/blog/">blog</Link></li>
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
