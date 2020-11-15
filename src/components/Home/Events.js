import React from 'react'


const Events = () => {
    return (
        <section className="events">
        <div className="events__container">
            <div className="events__item events__item--1">
                <div className="events__text-box ">
                    <h4 className="events__text">Korporativni dogadjaji</h4>
                    <div className="events__call">
                        <h5 className="events__call--num">0605151515</h5>
                    </div>
                </div>
            </div>
            <div className="events__item events__item--2">
                <div className="events__text-box">
                    <h4 className="events__text">Promocije</h4>
                    <div className="events__call">
                        <h5 className="events__call--num">0605151515</h5>
                    </div>
                </div>
            </div>
            <div className="events__item events__item--3">
                <div className="events__text-box">
                    <h4 className="events__text">Vencanja i rodjendani</h4>
                    <div className="events__call">
                        <h5 className="events__call--num">0605151515</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Events
