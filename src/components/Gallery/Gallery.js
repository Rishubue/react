import React from "react"
import images from "../../constans/gallery"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"

// const query = graphql`
//   {
//     imgs: allFile(filter: { relativeDirectory: { eq: "galleryImages" } }) {
//       nodes {
//         id
//         childImageSharp {
//           fluid {
//             src
//           }
//         }
//       }
//     }
//   }
// `

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__box">
        {images.map(image => {
          return (
            <figure
              key={image.id}
              className={`gallery__item gallery__item--${image.id}`}
            >
              <img src={image.img} className="gallery__img" alt="test" />
            </figure>
          )
        })}
      </div>
    </section>
  )
}

export default Gallery
