import React from "react"
import PageHeader from "./pageheader"

export default (props) => {
    let d = props.data.allMarkdownRemark.edges
 
     return ( d.filter((edge)=>{
        let t = edge.node.frontmatter.title
        if(t == props.title){
          return edge
        }
      }).map((edge, index) => {
        let title = edge.node.frontmatter.title
        let body = edge.node.html
        return (
          <div key={index}>
            <PageHeader title={title} />
            <section className="page-inside">
                <div className="row">
                  <div className="container" dangerouslySetInnerHTML={{__html:body}}></div>
                </div>
            </section>
          </div>
          )
      })
     )
}