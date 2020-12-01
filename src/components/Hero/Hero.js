import React, { useState } from "react"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header">
      <Navbar toggleNav={toggleNav} />
      <Sidebar isOpen={isOpen} toggleNav={toggleNav} />
      <div class="header__text-box">
        <h1 class="logo-text margin-bottom-smallest">Dobrodošli u</h1>
        <h1 class="heading-1 margin-bottom-smallest">Restoran</h1>
        <p class="text">Dođite i uverite se zašto smo najbolji!</p>
      </div>
    </header>
  )
}

export default Hero
