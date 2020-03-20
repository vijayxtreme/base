import React from "react"
import PageHeader from "./pageheader"

export default (props) => {
    
  return (
    <div>
      <PageHeader title={props.post.frontmatter.title} />
      <section className="page-inside">
          <div className="row">
            <div className="container" dangerouslySetInnerHTML={{__html:props.post.html}}></div>
          </div>
      </section>
    </div>
    )
    
}