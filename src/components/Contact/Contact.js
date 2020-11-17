import React from "react"

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__heading">kontakt poruka</h2>
      <div className="row">
        <div className="contact__container margin-bottom-bigest">
          <form id="form" className="contact__form">
            <div className="contact__top">
              <input
                type="text"
                name="ime"
                className="contact__input margin-right"
                placeholder="Ime"
              />
              <input
                type="text"
                name="prezime"
                className="contact__input"
                placeholder="Prezime"
              />
            </div>
            <div class="contact__top">
              <input
                type="email"
                name="email"
                className="contact__input margin-right"
                placeholder="Email"
              />
              <input
                type="text"
                name="telefon"
                className="contact__input"
                placeholder="Telefon"
              />
            </div>
            <input
              type="text"
              name="naslov poruke"
              className="contact__input-middle"
              placeholder="Naslov poruke"
            />

            <textarea
              class="contact__text"
              name="poruka"
              cols="30"
              rows="10"
              placeholder="Poruka"
            ></textarea>
            <button className="contact__btn" name="submit" type="submit">
              Pošalji
            </button>
          </form>
        </div>

        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46037.00706851556!2d19.80988562956298!3d43.84934200211735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759d34266ef8b59%3A0x58e8ff863b5b6aab!2z0KPQttC40YbQtQ!5e0!3m2!1ssr!2srs!4v1590927467811!5m2!1ssr!2srs"
            width="100%"
            height="450"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact
