import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/pageheader"
import es6Img from "../images/es6-promo-course.png";
import SEO from "../components/seo"
import Story from "../components/story"
import { Link, graphql } from "gatsby"

export default ({data}) => {
    console.log(data)
    const nodes = data.allMarkdownRemark.edges

    const output = nodes.map((edge, index)=>{
      let node = edge.node
      console.log(node)
      return (
        <li key={index}><Link to={node.fields.slug}>{node.frontmatter.title}</Link></li>
      )
    })

    const content = <div><p>Become a better programmer today! Learn the tricks
    you need to master ES6, the latest in JavaScript programming.</p><p>Are you a beginner? No problem, we can help you. Just study our course and you can be a pro too!</p><p>Get the course today now for FREE!</p></div>

    return(
        <Layout>
            <SEO title="Blog" />
            <PageHeader title="Blog" />
            <section className="blog-page-inside">
              <div className="row">
                <div className="container">
                <h2>Blog Roll</h2>
                  <ul>
                    {output}
                  </ul>
                </div>
              </div>
            </section>
            <Story 
            media={<img src={es6Img} />}
            title="Learn ES6" 
            content={content} 
            linkTo={`https://hackbuddy.teachable.com/p/roadmap-to-es6`} 
            buttonMessage={`Yes, Give Me The Course`} />
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter:{fileAbsolutePath: {glob: "**/src/blog/*.md"}}){
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