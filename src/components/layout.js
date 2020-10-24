import React, { useState } from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const Layout = ({ children }) => {
  return (
    <>
        <div className="layout">
          <div>
            <main>{children}</main>
          </div>
          <Footer />
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
