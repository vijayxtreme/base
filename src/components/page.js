import React from "react"
import Header from "../components/header"
import PageHeader from "./pageheader"

export default (props) => {
    
  return (
    <div className="inside">
      <Header />
      <PageHeader title={props.post.frontmatter.title} />
      <section className="page-inside pb5">
          <div className="row">
            <div className="container" dangerouslySetInnerHTML={{__html:props.post.html}}></div>
          </div>
      </section>
    </div>
    )
    
}