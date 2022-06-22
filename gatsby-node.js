const replacePath = require("./config-utils.js")
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const Template = path.resolve(`src/templates/content.jsx`)

  return graphql(`
  {
    allMdx {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: replacePath(node.slug),
        component: Template,
        context: { id: node.id },
      })
    })
  })
}

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: replacePath(slug),
    })
  } else if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value: replacePath(value),
    })
  }
}
