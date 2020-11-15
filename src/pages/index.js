import React from "react"
import Layout from "../components/Layouts/Layout"
import About from "../components/Home/About"
import Meals from "../components/Home/Meals"
import Menu from "../components/Home/Menu"
import Features from "../components/Home/Features"
import Events from "../components/Home/Events"
import Users from "../components/About/Users"
import Info from "../components/Home/Info"

export default function Home() {
  return (
    <Layout>
      <About />
      <Meals />
      <Menu />
      <Features />
      <Events />
      <Users />
      <Info />
    </Layout>
  )
}
