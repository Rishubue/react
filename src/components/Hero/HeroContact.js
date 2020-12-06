import React, { useState } from "react"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"

const HeroContact = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="header-contact">
      <Navbar toggleNav={toggleNav} />
      <Sidebar isOpen={isOpen} toggleNav={toggleNav} />
      <div className="header-contact__text-box">
        <h1 className="logo-text margin-bottom-smallest">Kontakt</h1>
      </div>
    </header>
  )
}

export default HeroContact
