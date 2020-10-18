import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/hackbuddy.svg";

const links = [
  { name: `Blog`, linkTo: `blog` },
  { name: `About`, linkTo: `about` },
  { name: `Speak For Us`, linkTo: `speak-for-us` },
  { name: `Sponsor Us`, linkTo: `sponsor-us` },
  { name: `Shop`, linkTo: `shop` },
]

const Header = ({ siteTitle, className }) => (
  <header className="">
    <div className="container-fluid">
      <div className="row pt-3 pb-3">
        <div className="col-xs-12 col-lg-3">
          <Link to="/"><img style={{height:`auto`, width:`400px`}} src={logo} /></Link>
        </div>
        <div className="col-xs-12 col-lg-9 text-right">
          <ul className="list-inline pt-5">
            {links.map(link => (
              <li className="list-inline-item">
                <Link to={`/${link.linkTo}`}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
