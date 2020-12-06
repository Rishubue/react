import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "galleryImages" } }) {
      nodes {
        name
        images: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

// const Gallery = () => {
//   return (
//     <section className="gallery">
//       <div className="gallery__box">
//         {images.map(image => {
//           return (
//             <figure
//               key={image.id}
//               className={`gallery__item gallery__item--${image.id}`}
//             >
//               <img src={image.img} className="gallery__img" alt="test" />
//             </figure>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

const Gallery = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(query)
  const data = useStaticQuery(query)
  console.log(data)

  return (
    <section className="gallery">
      <div className="gallery__box">
        {nodes.map(image => {
          return (
            <figure className={`gallery__item gallery__item--${image.name}`}>
              <Image
                fluid={image.images.fluid}
                className="gallery__img"
                alt="test"
              />
            </figure>
          )
        })}
      </div>
    </section>
  )
}

export default Gallery
