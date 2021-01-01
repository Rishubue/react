import React, { useState, useEffect } from "react"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import Footer from "../Footer"
import ScrollBtn from "../ScrollBtn"

import "../../sass/main.scss"

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  const loaded = () => {
    setLoading(false)
  }

  useEffect(() => {
    if (document.readyState === "complete") {
      loaded()
    }
  }, [loading])

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
      <Navbar toggleNav={toggleNav} />
      <Sidebar isOpen={isOpen} toggleNav={toggleNav} />
      {children}
      <ScrollBtn />
      <Footer />
    </>
  )
}

export default Layout
