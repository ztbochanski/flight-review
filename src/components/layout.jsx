import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Header from "/src/components/header.jsx"
import Footer from "/src/components/footer.jsx"

const renderItem = (item) => {

  if (item) {
    return(
      <li key={item.link}>
        <Link to={item.link}>
          <div>{item.name}</div>
        </Link>

        {item.subMenu && item.subMenu.length > 0 ? (
          <ul>
            {item.subMenu.map((subLink) => (
              <li key={subLink.name}>
                <Link to={subLink.link}>
                  {subLink.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}

      </li>
    )
  } else {
    return null
  }
}

const SideBar = ({ menuLinks }) => {

  // const [isActive, setIsActive] = React.useState(false)

  return(
    <aside className="menu">
      <p className="menu-label">
        General
      </p>
      <ul className="menu-list">
        {menuLinks.map((link) => renderItem(link))}
      </ul>
    </aside>
  )
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
            subMenu {
              name
              link
            }
          }
        }
      }
    }
  `)
  return(
    <div>
      <Header siteTitle={data.site.siteMetadata.title || `Flying is Rad`} />
      <SideBar menuLinks={data.site.siteMetadata.menuLinks} />
      {children}
      <Footer siteTitle={data.site.siteMetadata.title || `Flying is Rad`} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
