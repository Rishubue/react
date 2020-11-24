import React from "react"

const Events = () => {
  return (
    <section className="events">
      <div className="row">
        <div className="events__container">
          <div className="events__text-container">
            <h2 className="events__heading">zakažite vaš dogadjaj</h2>
            <p className="events__num">06061611</p>
          </div>
          <div className="events__cards">
            <div className="events__item events__item--1">
              <div className="events__text-box ">
                <h4 className="events__text">Korporativni dogadjaji</h4>
              </div>
            </div>
            <div className="events__item events__item--2">
              <div className="events__text-box">
                <h4 className="events__text">Promocije</h4>
              </div>
            </div>
            <div className="events__item events__item--3">
              <div className="events__text-box">
                <h4 className="events__text">Vencanja i rodjendani</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
