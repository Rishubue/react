import React, { useState } from "react"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "salad.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HeroAbout = () => {
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
      className="header-about"
      fluid={fluid}
      preserveStackingContext={true}
    >
      <Navbar toggleNav={toggleNav} />
      <Sidebar isOpen={isOpen} toggleNav={toggleNav} />
      <div className="header-about__text-box">
        <h1 className="logo-text margin-bottom-smallest">ovo je nasa prica</h1>
      </div>
    </BackgroundImage>
  )
}

export default HeroAbout
