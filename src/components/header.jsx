import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle, color }) => (
  <nav className={`navbar ${color}`}>
      
      <div className="navbar-brand">
        <div className="navbar-item"><span className="title">💺</span></div>
        <div className="navbar-item">
          <Link to="/" className="title">{siteTitle}</Link>
        </div>
      </div>
      
      <div className="navbar-menu">

        <div className="navbar-end">

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

export default Header
