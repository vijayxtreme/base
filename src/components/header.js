import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, className }) => (
  <header className="cf pt3 pb3-ns">
    <div className="pl4 fl w-100 w-50-ns cf">
      <div className="hbicon_wrap fl w-40 w-20-m w-10-ns">
        <span className="hbicon"></span>
      </div>
      <div className="hb_logo fl w-60 w-80-m w-90-ns">
        <span>
        <Link to="/">
          hackbuddy
          <sup style={{
            fontSize: `11px`,
            top: `-20px`,
            fontStyle: `italic`
          }}>BETA</sup>
         
        </Link>
       </span>
        <p className="pt0 mt0" style={{
          fontSize: `11px`,
          marginBottom: `.5rem`,
          fontStyle: `italic`,
        }}>by JavaScriptLA</p>
      </div>
    </div>
    <div className="fl w-100 w-50-ns tc tr-ns pr4">
      <ul className="hb_menu">
        <li><Link to="/about">events</Link></li>
        <li><Link to="/sponsors">sponsors</Link></li>
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
