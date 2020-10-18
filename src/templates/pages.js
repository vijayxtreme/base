import React from "react"
import Layout from "../components/layout"
import es6Img from "../images/es6-promo-course.png";
import SEO from "../components/seo"
import Ad from "../components/ad"
import Page from "../components/page"
import { graphql } from "gatsby"

export default ({data}) => {
 
    const post = data.markdownRemark
    let output =  <Page post={post} title={post.frontmatter.title} />

    return(
      
        <Layout>
          <SEO title="About" />
         {output}

        </Layout>
    )
}

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields:{ slug: { eq: $slug }}) {
            html
            frontmatter {
                title
            }
        }
    }
`

