import React from "react"
import Layout from "../components/Layout"
import About from "../components/About/About"
import Events from "../components/About/Events"
import Users from "../components/About/Users"

const about = () => {
  return (
    <Layout>
      <About></About>
      <Events></Events>
      <Users></Users>
    </Layout>
  )
}

export default about
