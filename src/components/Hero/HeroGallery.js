import React, { useState } from "react"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"

const HeroGallery = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="header-gallery">
      <Navbar toggleNav={toggleNav} />
      <Sidebar isOpen={isOpen} toggleNav={toggleNav} />
      <div className="header-gallery__text-box">
        <h1 className="logo-text margin-bottom-smallest">Galerija restorana</h1>
      </div>
    </header>
  )
}

export default HeroGallery
