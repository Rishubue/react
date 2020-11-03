import React from "react"
import { Link } from "gatsby"
import links from "../constans/links"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo-box">
        <Link to="/" className="nav__logo">
          restoran
        </Link>
      </div>
      <ul className="nav__list">
        {links.map(link => {
          return (
            <li className="nav__item">
              <Link to={link.path} className="nav__link">
                {" "}
                {link.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
