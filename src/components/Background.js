import React from "react"
import BackgroundImage from "gatsby-background-image"

const Background = ({ children, image }) => {
  return (
    <BackgroundImage
      Tag="header"
      className="header"
      fluid={image}
      preserveStackingContext={true}
    >
      {children}
    </BackgroundImage>
  )
}

export default Background
