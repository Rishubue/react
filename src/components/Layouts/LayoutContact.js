import React from "react"
import Hero from "../Hero/HeroContact"
import Footer from "../Footer"
import ScrollBtn from "../ScrollBtn"
import "../../sass/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      <section>{children}</section>
      <ScrollBtn />
      <Footer />
    </>
  )
}

export default Layout
