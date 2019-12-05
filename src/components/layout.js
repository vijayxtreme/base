/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div style={{
      display: `flex`,
      minHeight: `100vh`,
      flexDirection:`column`
    }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            width:`100%`,
            paddingTop: 0,
            flex: `1`
          }}
        >
          <main>{children}</main>
          
        </div>
        <footer style={{
          backgroundColor:`#252525`,
          color: `white`,
          fontSize: 11,
          padding: `2rem 1rem`
        }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
              <h2>hackbuddy</h2>
              <p>Your place to learn and grow as a programmer!</p>
              © {new Date().getFullYear()}, HackBuddy & 
              {` `}
              <a style={{
                color: `white`
              }} href="https://www.javascriptla.net">JavaScriptLA</a>, LLC
              <p>Privacy Policy | Terms of Service | Legal </p> 
              </div>
              <div className="col-sm-2">
                <h6>ABOUT</h6>
                <ul className="footer_list" style={{
                  listStyleType: ``
                }}>
                  <li>About Us</li>
                  <li>Our Mission</li>
                  <li>FAQs</li>
                  <li>Code of Conduct</li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h6>SPONSOR</h6>
                <ul className="footer_list" style={{
                  listStyleType: ``
                }}>
                  <li>Speak For Us</li>
                  <li>Advertising Kit</li>
                  <li>Sales</li>
                  <li>Affiliates</li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h6>EVENTS</h6>
                <ul className="footer_list" style={{
                  listStyleType: ``
                }}>
                  <li>Meetup.com</li>
                  <li>Eventbrite</li>
                  <li>Workshops</li>
                  <li>Trainings</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
