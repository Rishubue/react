import React from "react"
import contact from "../../constans/contact"

const Info = () => {
  return (
    <section className="info">
      <h2 className="heading-2 margin-bottom-medium">Do nas je lako doci</h2>
      <div className="row">
        <div className="info__container">
          {contact.map(item => {
            return (
              <div className="info__item">
                <div className="info__icon-box">
                  <div href="#" className="info__icon">
                    {item.icon}
                  </div>
                </div>
                <h4 className="heading-4">{item.text}</h4>
                <h4 className="info__text">{item.description}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Info
