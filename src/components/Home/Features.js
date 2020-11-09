import React from "react"
import icons from "../../constans/icons"

const Features = () => {
  return (
    <section className="features">
      <div className="row">
        <h2 className="heading-2 margin-bottom-big">uvek ce vas docekati</h2>
        <div className="features__container">
          {icons.map((icon, index) => {
            return (
              <div className="features__item">
                <img
                  className="features__icon margin-bottom-small"
                  key={index}
                  src={icon.icon}
                />
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
