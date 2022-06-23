import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Seo from "../components/seo"

const Content = ({ data: { mdx } }) => (
  <div>
    <Seo title="Content" />
    <h1>
      Hello from a <b>Content page</b>
    </h1>
    <MDXRenderer>{mdx.body}</MDXRenderer>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Content

export const pageQuery = graphql`
  query ContentQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      body
    }
  }
`
