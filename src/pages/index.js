import React from "react"
import Layout from "../components/Layout"
import About from "../components/Home/About"
import Meals from "../components/Home/Meals"
import Menu from "../components/Home/Menu"
import Features from "../components/Home/Features"
import Info from "../components/Home/Info"

export default function Home() {
  return (
    <Layout>
      <About />
      <Meals />
      <Menu />
      <Features />
      <Info />
    </Layout>
  )
}
