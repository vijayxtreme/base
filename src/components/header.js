import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
        <li><Link to="/about">about</Link></li>
        <li><Link to="/meetups">meetups</Link></li>
        <li><Link to="/workshops">workshops</Link></li>
        <li><Link to="/products">products</Link></li>
        <li><Link to="/sponsors">sponsors</Link></li>
        <li><Link to="/blog">blog</Link></li>
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
