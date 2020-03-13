import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/pageheader"
import es6Img from "../images/es6-promo-course.png";
import Story from "../components/story"
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

    console.log(data)
    let d = data.allMarkdownRemark.edges

    let output = d.map((edge, index)=>{
        console.log(edge)
        let title = edge.node.frontmatter.title
        let body = edge.node.html
        return (
            <>
            <PageHeader title={title} />
            <section key={index} class="page-inside">
                <div className="row">
                  <div className="container text-center" dangerouslySetInnerHTML={{__html:body}}></div>
                </div>
            </section>
            
            </>
        )
    })

    const content = <div><p>Become a better programmer today! Learn the tricks
    you need to master ES6, the latest in JavaScript programming.</p><p>Are you a beginner? No problem, we can help you. Just study our course and you can be a pro too!</p><p>Get the course today now for FREE!</p></div>

    return(
        <Layout>
           {output}
           <Story 
           media={<img src={es6Img} />}
           title="Learn ES6" 
           content={content} 
           linkTo={`https://hackbuddy.teachable.com`} 
           buttonMessage={`Yes, Give Me The Course`} />
        </Layout>
    )
}