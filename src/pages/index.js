import React from "react"
import Layout from "../components/Layout"
import About from "../components/Home/About"
import Meals from "../components/Home/Meals"
import Menu from "../components/Home/Menu"

export default function Home() {
  return (
    <Layout>
      <About />
      <Meals />
      <Menu/>
    </Layout>
  )
}
