import React, { useState } from "react"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"

const HeroAbout = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="header-about">
      <Navbar toggleNav={toggleNav} />
      <Sidebar isOpen={isOpen} toggleNav={toggleNav} />
      <div class="header-about__text-box">
        <h1 class="logo-text margin-bottom-smallest">ovo je nasa prica</h1>
      </div>
    </header>
  )
}

export default HeroAbout
