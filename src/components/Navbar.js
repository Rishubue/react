import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import links from "../constans/links"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen)
    console.log(isOpen)
  }

  const handleNav = () => {
    let position = window.pageYOffset

    if (position > 300) {
      setSticky(true)
    } else if (position < 300) {
      setSticky(false)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNav)

    return () => {
      window.removeEventListener("scroll", handleNav)
    }
  }, [])

  return (
    <nav className={`nav ${sticky ? "sticky" : ""}`}>
      <div className="nav__logo-box">
        <Link to="/" className="nav__logo">
          restoran
        </Link>
      </div>
      <ul className={`nav__list ${isOpen ? "active" : ""}`}>
        {links.map((link, index) => {
          return (
            <li className="nav__item" key={index}>
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
