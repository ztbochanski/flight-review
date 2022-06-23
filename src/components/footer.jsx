import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlane, faThumbsUp, faInfo } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="container">
      
      <div className="columns">
        <div className="column is-one-quarter mr-4">
          <h4 className="mb-3 is-size-4 has-text-weight-light has-text-grey"><span className="has-text-weight-medium">{siteTitle}</span> - aviation knowledge blog.</h4>
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

export default Footer
