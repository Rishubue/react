import React from "react"
import Layout from "../components/Layouts/LayoutAbout"
import About from "../components/About/About"
import Facts from "../components/About/Facts"
import Users from "../components/About/Users"

const about = () => {
  return (
    <Layout styleClass="header-about">
      <About />
      <Facts />
      <Users />
    </Layout>
  )
}

export default about
