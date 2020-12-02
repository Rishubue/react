import React from "react"
import Layout from "../components/Layouts/LayoutGallery"
import Gallery from "../components/Gallery/Gallery"
import SEO from "../components/SEO"

const gallery = () => {
  return (
    <Layout>
      <SEO
        title="Galerija"
        description="tema za potrebe restorana uradjena u gecbiju"
      />
      <Gallery />
    </Layout>
  )
}

export default gallery
