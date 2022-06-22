import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const PageNotFound = () => (
  <Layout>
      <div className="section">
        <div className="notification is-danger mb-0">
          <h1 className="title">404: Not Found</h1>
          <h2 className="subtitle">Unicorn Pusheen</h2>
        </div>
        <div className="block">
          <StaticImage
            src="../images/pusheen_placeholder.gif"
            alt="A unicorn pusheen"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>
      </div>
  </Layout>
)

export default PageNotFound
