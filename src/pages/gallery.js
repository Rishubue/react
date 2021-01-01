import React from "react"
import Layout from "../components/Layouts/Layout"
import Hero from "../components/Hero/Hero"
import Gallery from "../components/Gallery/Gallery"
import SEO from "../components/SEO"

const gallery = ({ data }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data
  return (
    <Layout>
      <SEO
        title="Galerija"
        description="tema za potrebe restorana uradjena u gecbiju"
      />
      <Hero fluid={fluid} defClass="header-small" />

      <Gallery />
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "hero-1.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default gallery
