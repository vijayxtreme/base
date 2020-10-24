import PropTypes from "prop-types"
import React, { useContext } from "react"
import logo from "../images/hackbuddy.svg"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Button from 'react-bootstrap/Button'
import {ToggleContext} from '../components/layout'


const links = [
  { name: `Blog`, linkTo: `blog` },
  { name: `About`, linkTo: `about` },
  { name: `Speak For Us`, linkTo: `speak-for-us` },
  { name: `Sponsor Us`, linkTo: `sponsor-us` },
  { name: `Shop`, linkTo: `shop` },
]

const Header = ({ siteTitle, className }) => {
  const { show, setShow } = useContext(ToggleContext)
  return (
    <>
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
              <Nav.Link>
                <Button variant="primary" onClick={() => setShow(!show)}>
                  Launch demo modal
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
