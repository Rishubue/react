import React from "react"
import Navbar from "../Navbar"

const Hero = () => {
  return (
    <header className="header">
      <Navbar />
      <div class="header__text-box">
        <h1 class="logo-text margin-bottom-smallest">Dobrodošli u</h1>
        <h1 class="heading-1 margin-bottom-smallest">Restoran</h1>
        <p class="text">Dođite i uverite se zašto smo najbolji!</p>
      </div>
    </header>
  )
}

export default Hero
