import React from "react"
import Navbar from "../Navbar"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export const query = graphql`
  {
    file(relativePath: { eq: "back-img.jpg" }) {
      img: childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: { img },
  } = useStaticQuery(query)

  return (
    // <BackgroundImage fluid={img.fluid} Tag="header" className="header">
    <header className="header">
      <Navbar />
      <div class="header__text-box">
        <h1 class="logo-text margin-bottom-smallest">Dobrodošli u</h1>
        <h1 class="heading-1 margin-bottom-smallest">Restoran</h1>
        <p class="text">Dođite i uverite se zašto smo najbolji!</p>
      </div>
    </header>
    // </BackgroundImage>
  )
}

export default Hero
