import React from "react"
import Layout from "../components/Layout"
import About from "../components/Home/About"
import Meals from "../components/Home/Meals"
import Features from "../components/Home/Features"


export default function Home() {
  return (
    <Layout>
      <About />
      <Meals />
      <Features />
    </Layout>
  )
}
