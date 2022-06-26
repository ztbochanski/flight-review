import React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import "../index.scss"

const IndexPage = () => (
  <div>
    <Seo title="Home" />
    <section className="hero is-fullheight">

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-size-2 is-size-3-mobile">
            💺
          </h1>
          <Link className="button is-large" to={"/private/MDX"}>Get Started</Link>
        </div>
      </div>
      
    </section>
  </div>
)

export default IndexPage
