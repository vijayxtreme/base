import React from "react"
import PropTypes from "prop-types"
import "../../node_modules/tachyons/css/tachyons.css"
import Footer from "./footer"

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
