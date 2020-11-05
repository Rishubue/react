import React from "react"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer"
import "../sass/main.scss"

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
