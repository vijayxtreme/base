import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/hackbuddy.svg"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

const links = [
  { name: `Blog`, linkTo: `blog` },
  { name: `About`, linkTo: `about` },
  { name: `Speak For Us`, linkTo: `speak-for-us` },
  { name: `Sponsor Us`, linkTo: `sponsor-us` },
  { name: `Shop`, linkTo: `shop` },
]

const Header = ({ siteTitle, className }) => (
  <header className="">
    <Navbar bg="light" expand="lg">
     
      <Navbar.Brand href="/">
        <img src={logo} className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {links.map((link, item) => {
            return (
              <Nav.Link key={item} href={`${link.linkTo}`}>
                {link.name}
              </Nav.Link>
            )
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
