import React from "react"
import Layout from "../components/layout"
import es6Img from "../images/es6-promo-course.png";
import SEO from "../components/seo"
import Story from "../components/story"
import Page from "../components/page"
import { useStaticQuery, graphql } from "gatsby"

export default ({children}) => {
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

    let output =  <Page data={data} title="About" />


    const content = <div><p>Become a better programmer today! Learn the tricks
    you need to master ES6, the latest in JavaScript programming.</p><p>Are you a beginner? No problem, we can help you. Just study our course and you can be a pro too!</p><p>Get the course today now for FREE!</p></div>

    return(
      
        <Layout>
          <SEO title="About" />
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