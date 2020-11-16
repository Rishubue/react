import React from "react"
import { Link } from "gatsby"
import links from "../constans/links"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen)
    console.log(isOpen)
  }

  return (
    <nav className="nav">
      <div className="nav__logo-box">
        <Link to="/" className="nav__logo">
          restoran
        </Link>
      </div>
      <ul className={`nav__list ${isOpen ? "active" : ""}`}>
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
      <div className="nav__burger" onClick={toggleNav}>
        <div className="nav__burger--line"></div>
        <div className="nav__burger--line"></div>
        <div className="nav__burger--line"></div>
      </div>
    </nav>
  )
}

export default Navbar
