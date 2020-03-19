import React from "react"
import Layout from "../components/layout"
import Page from "../components/page"
import es6Img from "../images/es6-promo-course.png";
import SEO from "../components/seo"
import Story from "../components/story"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark {
                    edges {
                      node {
                        html
                        headings {
                          value
                        }
                        frontmatter {
                          title
                          date
                        }
                      }
                    }
                  }
            }
    `)

    const output =  <Page data={data} title="Products" />
    return(
        <Layout>
            <SEO title="Products" />
            {output}
        </Layout>
    )
}