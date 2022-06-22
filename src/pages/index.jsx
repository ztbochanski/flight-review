import React from "react"
import Seo from "../components/seo"
import "../index.scss"
import { useMarkdownNodes } from "../hooks/useMarkdownNodes.js"
import { Link } from "gatsby"

const IndexPage = () => {
  const nodes = useMarkdownNodes()
  return(
    <div>
      <Seo title="Home" />
      {nodes.map((node) => (
        <div key={node.id}>
          <Link to={node.slug}>{node.frontmatter.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default IndexPage
