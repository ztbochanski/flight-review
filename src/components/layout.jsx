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
      <SideBar />
      {children}
      <Footer siteTitle={title || `Flying is Rad`} />
    </div>
  )
}

export default Layout
