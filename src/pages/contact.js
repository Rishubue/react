import React from "react"
import Layout from "../components/Layouts/LayoutContact"
import Contact from "../components/Contact/Contact"
import Info from "../components/Home/Info"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="tema za potrebe restorana uradjena u gecbiju"
      />
      <Info />
      <Contact />
    </Layout>
  )
}

export default contact
