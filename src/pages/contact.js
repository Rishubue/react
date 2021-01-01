import React from "react"
import Layout from "../components/Layouts/Layout"
import Hero from "../components/Hero/Hero"
import Contact from "../components/Contact/Contact"
import Info from "../components/Home/Info"
import SEO from "../components/SEO"

const contact = ({ data }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data
  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="tema za potrebe restorana uradjena u gecbiju"
      />
      <Hero fluid={fluid} defClass="header-small" />
      <Info />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default contact
