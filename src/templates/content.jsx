import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const Content = () => (
  <div>
  <Seo title="Content" />
    <h1>
      Hello from a <b>Content page</b>
    </h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Content
