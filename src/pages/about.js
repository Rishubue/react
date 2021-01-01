import React from "react"
import Layout from "../components/Layouts/Layout"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Facts from "../components/About/Facts"
import Users from "../components/About/Users"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

const about = ({ data }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data

  return (
    <Layout styleClass="header-about">
      <SEO
        title="O nama"
        description="tema za potrebe restorana uradjena u gecbiju"
      />
      <Hero fluid={fluid} defClass="header-small" text="o nama" />
      <About />
      <Facts />
      <Users />
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "salad.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default about
