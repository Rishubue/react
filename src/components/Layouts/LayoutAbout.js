import React from "react"
import Hero from "../Hero/HeroAbout"
import Footer from "../Footer"
import "../../sass/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      <section>{children}</section>
      <Footer />
    </>
  )
}

export default Layout
