import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Header from "/src/components/header"
import Footer from "/src/components/footer"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return(
    <div>
      <Header siteTitle={title || `Flying is Rad`} />
      {children}
      <Footer siteTitle={title || `Flying is Rad`} />
    </div>
  )
}

export default Layout
