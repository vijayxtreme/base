import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import PageHeader from "../components/pageheader"
import SEO from "../components/seo"
import Ad from "../components/ad"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  const nodes = data.allMarkdownRemark.edges

  const output = nodes.map((edge, index) => {
    let node = edge.node
    console.log(node)
    return (
      <li key={index}>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
      </li>
    )
  })

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="inside">
        <Header />
        <PageHeader title="Blog" />
        <section className="blog-page-inside">
          <div className="row">
            <div className="container">
              <h2>Blog Roll</h2>
              <ul>{output}</ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/blog/*.md" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
