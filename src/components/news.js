import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Masonry from "react-masonry-component"

const News = () => {
    


    return (
        <section className="news mb5">
            <div className="container tc">
                <h2>News & Updates</h2>
                <Masonry className="grid" elementType={'div'}>
                    <StaticQuery
                        query={graphql`
                          query {
                              allMarkdownRemark(filter: {fields: {slug: {regex: "/blog/"}}}) {
                                nodes {
                                    fields {
                                        slug
                                    }
                                    frontmatter {
                                        title
                                    }
                                    excerpt
                                }
                            }
                          }
                        `
                        } render={ data => {
                            console.log(data)
                            let output = data.allMarkdownRemark.nodes.map((node, key)=> {
                                return (
                                    <div className="grid-item">
                                        <div className="pa3 tl">
                                            <Link to={node.fields.slug}><div className="placeholder" style={{minHeight: 217}}></div></Link>
                                            <h4><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h4>
                                            <p>{node.excerpt}</p>
                                            <Link to={node.fields.slug}>Read More &rarr; </Link>
                                        </div>
                                    </div>
                                )
                            })

                            return output
                        }} />
                </Masonry>
            </div>
        </section>
    )
}

export default News