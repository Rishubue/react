import React, { useState } from "react"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HeroContact = () => {
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
      className="header-contact"
    >
      <Navbar toggleNav={toggleNav} />
      <Sidebar isOpen={isOpen} toggleNav={toggleNav} />
      <div className="header-gallery__text-box">
        <h1 className="logo-text margin-bottom-smallest">kontakt</h1>
      </div>
    </BackgroundImage>
  )
}

export default HeroContact
