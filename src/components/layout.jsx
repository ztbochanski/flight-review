import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Header from "./header"
import Footer from "./footer"
import SideBar from "./sidebar"

const IndexLayout = ({ children }) => {
  const { title } = useSiteMetadata()
  return(
    <div>
      <Header siteTitle={title || `Flying is Rad`} />
      {children}
      <Footer siteTitle={title || `Flying is Rad`} />
    </div>
  )
}

const RegularLayout = ({ children }) => {
  const { title } = useSiteMetadata()
  return(
    <div>
      <Header siteTitle={title || `Flying is Rad`} />
      <div className="columns">
        <div className="column is-narrow" style={{borderRight: "1px solid lightgrey"}}>
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
  // return(
  //   <div>
  //     <Header siteTitle={title || `Flying is Rad`} />
  //     <div className="columns">
  //       <div className="column is-narrow" style={{borderRight: "1px solid lightgrey"}}>
  //         <SideBar />
  //       </div>
  //       <div className="column">
  //         <div className="section">
  //           <div className="container">{children}</div>
  //         </div>
  //       </div>
        
  //     </div>
  //     <Footer siteTitle={title || `Flying is Rad`} />
  //   </div>
  // )
}


const Layout = ({ children, pageContext }) => {
  console.log(pageContext.layout);
  if (pageContext.layout === "index") {
    return <IndexLayout children={children}></IndexLayout>
  }
  return <RegularLayout children={children}></RegularLayout>
  
}

export default Layout
