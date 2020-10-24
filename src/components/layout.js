import React, { useState } from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

export const ToggleContext = React.createContext({ isOpen: false, setIsOpen : () => {} })

const Layout = ({ children }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  return (
    <>
      <ToggleContext.Provider value={{ show, setShow }}>
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
        <div className="layout">
          <div>
            <main>{children}</main>
          </div>
          <Footer />
        </div>
        </ToggleContext.Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
