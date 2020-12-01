import React from "react"
import links from "../constans/links"
import { Link } from "gatsby"
import { IoIosCloseCircleOutline } from "react-icons/io"

const Sidebar = ({ isOpen, toggleNav }) => {
  return (
    <nav className={`sidebar ${isOpen ? "sidebar-active" : ""}`}>
      <a className="sidebar__exit-btn" onClick={toggleNav}>
        <IoIosCloseCircleOutline />
      </a>
      <ul className="sidebar__list">
        {links.map((link, index) => {
          return (
            <li key={index} className="sidebar__item">
              <Link to={link.path} className="sidebar__link">
                {link.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Sidebar
