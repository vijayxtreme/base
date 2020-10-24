import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
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
import Modal from "react-bootstrap/Modal"

const links = [
  { name: `Blog`, linkTo: `blog` },
  { name: `About`, linkTo: `about` },
  { name: `Speak For Us`, linkTo: `speak-for-us` },
  { name: `Sponsor Us`, linkTo: `sponsor-us` },
  { name: `Shop`, linkTo: `shop` },
]

const Header = ({ siteTitle, className }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
                <Button variant="primary" onClick={handleShow}>
                  Launch demo modal
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>      
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
