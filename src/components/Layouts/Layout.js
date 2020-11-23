import React, { useState, useEffect } from "react"
import Hero from "../Hero/Hero"
import Footer from "../Footer"
import ScrollBtn from "../ScrollBtn"
import "../../sass/main.scss"

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)

  const loaded = () => {
    setLoading(false)
  }

  useEffect(() => {
    if (document.readyState === "complete") {
      console.log("test")
      loaded()
    }
  }, [])

  if (loading) {
    return (
      <div className="spinner-wrapper">
        <div className="spinner">
          <h2 className="logo-text">restoran</h2>
        </div>
      </div>
    )
  }

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
