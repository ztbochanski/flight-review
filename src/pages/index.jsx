import React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import "../index.scss"

const IndexPage = () => (
  <div>
    <Seo title="Home" />
    <section className="hero is-black is-fullheight-with-navbar">
      <div className="hero-body">
      
        <div>
          <p className="title">
            Fullheight hero with navbar
          </p>
          <p className="subtitle mt-5">
            <Link className="button is-large" to={"/private/MDX"}>
              Get Started
            </Link>
          </p>
        </div>
        
      </div>
    </section>
  </div>
)

export default IndexPage
