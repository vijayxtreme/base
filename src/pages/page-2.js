import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="main_jumbo" style={{      
      height: 480,
      width: `100%`
    }}><h1 style={{
      textAlign: `center`,
      paddingTop: `200px`,
      marginLeft: `-50px`,
      textShadow: `1px 1px 11px #0062cc`,
      fontFamily: `Tomorrow`,
      color: `white`
    }}>Blog</h1></div>
    <div className="container">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </div>
  </Layout>
)

export default SecondPage
