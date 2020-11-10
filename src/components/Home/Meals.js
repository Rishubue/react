import React from "react"
import Image from "gatsby-image"
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
      <h2 className="heading-2 margin-bottom-medium">Izdvajamo iz ponude</h2>
      <div className="row">
        <div className="meals__container">
          {meals.nodes.map(meal => {
            return (
              <div className="meals__item">
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
