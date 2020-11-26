import React from "react"
import icons from "../../constans/icons"
import Title from "../Title"

const Features = () => {
  return (
    <section className="features">
      <div className="row">
        <Title title="uvek ce vas docekati" />
        <div className="features__container">
          {icons.map((icon, index) => {
            return (
              <div className="features__item" key={index}>
                <a className="features__icon margin-bottom-small">
                  {icon.icon}
                </a>
                <h6 className="features__text">{icon.text}</h6>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
