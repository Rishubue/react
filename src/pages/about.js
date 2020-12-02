import React from "react"
import Layout from "../components/Layouts/LayoutAbout"
import About from "../components/About/About"
import Facts from "../components/About/Facts"
import Users from "../components/About/Users"
import SEO from "../components/SEO"

const about = () => {
  return (
    <Layout styleClass="header-about">
      <SEO
        title="O nama"
        description="tema za potrebe restorana uradjena u gecbiju"
      />
      <About />
      <Facts />
      <Users />
    </Layout>
  )
}

export default about
