import React from "react"

import Background from "../Background"

const Hero = ({ fluid, defClass, bigText, text, description }) => {
  return (
    <Background fluid={fluid} defClass={defClass}>
      <div className="text-box">
        <h1 className="logo-text margin-bottom-smallest">{bigText}</h1>
        <h1 className="heading-1 margin-bottom-smallest">{text}</h1>
        <p className="text">{description}</p>
      </div>
    </Background>
  )
}

export default Hero
