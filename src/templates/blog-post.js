import React from "react"
import Layout from "../components/layout"
import es6Img from "../images/es6-promo-course.png";
import SEO from "../components/seo"
import Story from "../components/story"
import Page from "../components/page"
import { graphql } from "gatsby"

export default ({data}) => {
 
    const post = data.markdownRemark

    let output =  <Page post={post} title={post.frontmatter.title} />


    const content = <div><p>Become a better programmer today! Learn the tricks
    you need to master ES6, the latest in JavaScript programming.</p><p>Are you a beginner? No problem, we can help you. Just study our course and you can be a pro too!</p><p>Get the course today now for FREE!</p></div>

    return(
      
        <Layout>
          <SEO title={`Blog | ${post.frontmatter.title}`} />
         {output}
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
    query($slug: String!){
        markdownRemark(fields:{ slug: { eq: $slug }}) {
            html
            frontmatter {
                title
            }
        }
    }
`

