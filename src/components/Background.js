import React from "react"
import BackgroundImage from "gatsby-background-image"

const Background = ({ children, fluid, defClass }) => {
  return (
    <BackgroundImage
      Tag="header"
      className={defClass || `header`}
      fluid={fluid}
      preserveStackingContext={true}
    >
      {children}
    </BackgroundImage>
  )
}

export default Background
