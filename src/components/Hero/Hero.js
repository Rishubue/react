import React from "react"
import Navbar from "../Navbar"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"

const Hero = () => {
  return (
    <div>
      <header className="header">
        <Navbar />
        <div class="header__text-box">
          <h1 class="logo-text margin-bottom-smallest">Dobrodošli u</h1>
          <h1 class="heading-1 margin-bottom-smallest">Restoran</h1>
          <p class="text">
            Tu smo za vas već 10 godina. Dođite i uverite se zašto smo najbolji!
          </p>
        </div>
      </header>
    </div>
  )
}

export default Hero
