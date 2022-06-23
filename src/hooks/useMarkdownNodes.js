import { graphql, useStaticQuery } from "gatsby"

export const useMarkdownNodes = () => {
  const { allMdx } = useStaticQuery(
    graphql`query MarkdownNodeQuery {
      allMdx {
        nodes {
          id
          frontmatter {
            parent
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  return allMdx.nodes
}
