import React from "react"
import Layout from "../components/Layouts/LayoutAbout"
import About from "../components/About/About"
import Users from "../components/About/Users"

const about = () => {
  return (
    <Layout styleClass="header-about">
      <About />
      <Users />
    </Layout>
  )
}

export default about
