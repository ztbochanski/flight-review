import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Header from "./header"
import Footer from "./footer"
import SideBar from "./sidebar"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return(
    <div>
      <Header siteTitle={title || `Flying is Rad`} />
      <div className="columns">
        <div className="column is-3">
          <SideBar />
        </div>
        <div className="column">
          <div className="section">
            <div className="container">{children}</div>
          </div>
        </div>
        
      </div>
      <Footer siteTitle={title || `Flying is Rad`} />
    </div>
  )
}

export default Layout
