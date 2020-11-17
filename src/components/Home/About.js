import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
// import img from "../../images/about_img.jpeg"
// import img2 from "../../images/about_img-2.jpeg"

const query = graphql`
  {
    file(relativePath: { eq: "about_img.jpeg" }) {
      img1: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    files: file(relativePath: { eq: "about_img-2.jpeg" }) {
      img2: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const {
    file: { img1 },
  } = useStaticQuery(query)
  const {
    files: { img2 },
  } = useStaticQuery(query)

  return (
    <section className="about">
      <div className="row">
        <div className="about__container">
          <div className="about__img">
            <Image className="about__img--1" fluid={img1.fluid} alt="slika 1" />
            <Image className="about__img--2" fluid={img2.fluid} alt="slika 2" />
          </div>

          <div className="about__text-box">
            <h4 className="logo-text-sm  margin-bottom-small second">Ovo je</h4>
            <h2 className="heading-2-sm margin-bottom-small">Naša priča</h2>

            <p className="big-text margin-bottom-small">
              “Action ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate”.
            </p>

            <p className="long-text margin-bottom-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
              nulla. Vel deserunt nihil eum odit asperiores molestiae commodi,
              nam voluptates. Dolorem neque quos ipsa exercitationem.
            </p>
            <Link to="/about" className="about__btn">
              Saznajte vise o nama
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
