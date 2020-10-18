/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({node, getNode, actions}) => {
    const { createNodeField } = actions
    
    const nodeFieldPerType = (filePath, getNodePath) => {
        if(node.internal.type === `MarkdownRemark` && node.fileAbsolutePath.includes(filePath)){
            const slug = createFilePath({node, getNode, basePath:`pages`})
            createNodeField({
                node,
                name: `slug`,
                value: getNodePath(slug)
            })
        }    
    }
    
    nodeFieldPerType(`blog`, value => `/blog${value}` )
    nodeFieldPerType(`markdowns`, value => `${value}` )

}

exports.createPages = async({graphql, actions}) => {
    const { createPage } = actions
    const result = await graphql(`
    {
        blogs:allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/src/blog/*.md"}}) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        pages:allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/src/markdowns/*.md"}}) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
      
    `)

    result.data.pages.edges.forEach(({node}) => {
        createPage({
            path:node.fields.slug,
            component: path.resolve(`./src/templates/pages.js`),
            context: {
                slug: node.fields.slug
            }
        })
    })

    result.data.blogs.edges.forEach(({node}) => {
        createPage({
            path:node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                slug: node.fields.slug
            }
        })
    })
}