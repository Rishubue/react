import React from "react"
import Image from "gatsby-image"
import Title from "../Title"

import { useStaticQuery, graphql } from "gatsby"

const getMeals = graphql`
  query {
    meals: allContentfulMeal {
      nodes {
        title
        description
        id: contentful_id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
const Meals = () => {
  const { meals } = useStaticQuery(getMeals)

  return (
    <section className="meals">
      <Title title="izvdajamo iz ponude" />
      <div className="row">
        <div className="meals__container">
          {meals.nodes.map((meal, index) => {
            return (
              <div className="meals__item" key={index}>
                <Image className="meals__img" fluid={meal.image.fluid} alt="" />
                <h4 className="meals__title margin-bottom-small">
                  {meal.title}
                </h4>
                <p className="meals__text">{meal.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Meals
