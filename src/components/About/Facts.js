import React from "react"
import facts from "../../constans/facts"

const Facts = () => {
  return (
    <section className="nums">
      <div className="row">
        <div className="nums__container">
          {facts.map((fact, index) => {
            return (
              <div className="nums__item">
                <div className="nums__icon-box">
                  <a href="#" key={index} className="nums__icon">
                    {fact.icon}
                  </a>
                  <h4 className="nums__num" id="counter" data-target="2000">
                    {fact.num}
                  </h4>
                  <h4 className="nums__text">{fact.text}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Facts
