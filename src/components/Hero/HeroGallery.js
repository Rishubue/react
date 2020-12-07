import React, { useState } from "react"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "hero-1.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HeroGallery = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }
  return (
    <BackgroundImage
      Tag="header"
      fluid={fluid}
      preserveStackingContext={true}
      className="header-gallery"
    >
      <Navbar toggleNav={toggleNav} />
      <Sidebar isOpen={isOpen} toggleNav={toggleNav} />
      <div className="header-gallery__text-box">
        <h1 className="logo-text margin-bottom-smallest">Galerija restorana</h1>
      </div>
    </BackgroundImage>
  )
}

export default HeroGallery
