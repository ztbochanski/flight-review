import * as React from "react"
import { Link } from "gatsby"

import Layout from "../hoc/layout"
import Seo from "../components/seo"

const Content = () => (
  <Layout>
    <Seo title="Content" />
    <h1>
      Hello from a <b>Content page</b>
    </h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Content
