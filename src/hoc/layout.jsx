import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlane, faThumbsUp, faInfo } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Header = ({ siteTitle }) => (
  <nav className="navbar">
      
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to="/" className="title">{siteTitle} 💺</Link>
        </div>
      </div>
      
      <div className="navbar-menu">

        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/">
              <button className="button">
                <span className="icon has-text-warning">
                  <FontAwesomeIcon className="" icon={faThumbsUp} size="lg" />
                </span>
                <span>Sponsor ad-less</span>
              </button>
            </Link>
          </div>

          <div className="navbar-item">
            <Link to="/">
              <button className="button">
                <span className="icon has-text-info">
                  <FontAwesomeIcon className="" icon={faInfo} size="lg" />
                </span>
                <span>About</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

    </nav>
)

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="container">
      
      <div className="columns">
        <div className="column is-one-quarter mr-4">
          <h4 className="mb-3 is-size-4 has-text-weight-light has-text-grey"><span className="has-text-weight-medium">{siteTitle}</span> an aviation knowledge blog.</h4>
          <p className="has-text-grey">
            This work is licensed under <a rel="license" href="/">
            The BSD Zero Clause License</a> ✌️
          </p>
          <p>{new Date().getFullYear()}</p>
        </div>
        <div className="column is-one-quarter mr-4">
          <h4 className="mb-3 is-size-4 has-text-weight-light has-text-grey"><span className="has-text-weight-medium">Contribute</span> on GitHub</h4>
          <p className="mb-2">
            <button className="button" href="https://github.com/ztbochanski/flight-review/issues" target="_blank">
              <span className="icon is-large">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span>Submit an issue</span>
            </button>
          </p>
        </div>

        <div className="column is-one-quarter mr-4"></div>

        <div className="column">
          <h4 className="mb-3 is-size-4 has-text-weight-light has-text-grey"><span className="has-text-weight-medium">More</span></h4>
          
          <Link to="/">
          <p className="subtitle">
            <span className="mr-2 icon has-text-success">
              <FontAwesomeIcon className="" icon={faPlane} size="lg" />
            </span>
            Home
          </p>
          </Link>
          <Link to="/">
          <p className="subtitle">
            <span className="mr-2 mt-2 icon has-text-info">
              <FontAwesomeIcon className="" icon={faInfo} size="lg" />
            </span>
            About
          </p>
          </Link>
          <Link to="/">
          <p className="subtitle">
            <span className="mr-2 mt-2 icon has-text-warning">
              <FontAwesomeIcon className="" icon={faThumbsUp} size="lg" />
            </span>
            Sponsor ad-less
          </p>
          </Link>
          
        </div>
      </div>
    </div>
  </footer>
)

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
