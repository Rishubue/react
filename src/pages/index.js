import React from "react"
import Layout from "../components/Layouts/Layout"
import Hero from "../components/Hero/Hero"
import About from "../components/Home/About"
import Meals from "../components/Home/Meals"
import Menu from "../components/Home/Menu"
import Features from "../components/Home/Features"
import Events from "../components/Home/Events"
import Users from "../components/About/Users"
import Info from "../components/Home/Info"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

export default function Home({ data }) {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data

  return (
    <Layout>
      <SEO
        title="Početna strana"
        description="tema za potrebe restorana uradjena u gecbiju"
      />
      <Hero
        fluid={fluid}
        bigText="dobrodosli u restoran"
        text="restoran"
        description="tema za resoran"
      />
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

export const query = graphql`
  {
    file(relativePath: { eq: "pizza__hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
