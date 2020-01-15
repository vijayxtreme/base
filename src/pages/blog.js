import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container">
      <h1>The Blog</h1>
      <p>Welcome to page 2</p>
    </div>
  </Layout>
)

export default SecondPage
