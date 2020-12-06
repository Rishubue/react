import React, { useState, useEffect } from "react"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import Background from "../Background"
import { useStaticQuery, graphql } from "gatsby"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "slider" } }) {
      nodes {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Hero = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(query)

  const data = nodes

  const images = data.map(item => {
    const {
      childImageSharp: { fluid },
    } = item
    const image = fluid
    return image
  })

  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)

  console.log(index)

  useEffect(() => {
    const lastIndex = images.length - 1

    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  })

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Background image={images[index]}>
      <Navbar toggleNav={toggleNav} />
      <Sidebar isOpen={isOpen} toggleNav={toggleNav} />
      <div className="header__text-box">
        <h1 className="logo-text margin-bottom-smallest">Dobrodošli u</h1>
        <h1 className="heading-1 margin-bottom-smallest">Restoran</h1>
        <p className="text">Dođite i uverite se zašto smo najbolji!</p>
      </div>

      <div className="header__buttons">
        <button onClick={() => setIndex(index - 1)} className="header__btn">
          <BsArrowLeftShort />
        </button>
        <button onClick={() => setIndex(index + 1)} className="header__btn">
          <BsArrowRightShort />
        </button>
      </div>
    </Background>
  )
}

export default Hero
