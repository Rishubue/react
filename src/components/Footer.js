import React from "react"
import icons from "../constans/social-icons"

const Footer = () => {
  return (
    <footer class="footer">
      <div class="row">
        <div class="footer__container">
          <div class="footer__item">
            <h4 class="heading-4 margin-bottom-small">O nama</h4>
            <p class="footer__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellat, aperiam voluptates doloribus quisquam fugiat sit labore
              consectetur exercitationem quibusdam a.
            </p>
          </div>
          <div class="footer__item">
            <h4 class="heading-4 margin-bottom-small">Radno vreme</h4>
            <p class="footer__text">Ponedeljak - Subota: 8h - 22h</p>
            <p class="footer__text">Nedelja: 8h - 18h</p>
          </div>
          <div class="footer__item">
            <div class="footer__social">
              {icons.map((icon, index) => {
                return (
                  <div className="footer__icon-box">
                    <a
                      key={index}
                      href={icon.url}
                      target="_blank"
                      className="footer__icon"
                    >
                      {icon.icon}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div class="footer__copyright">
        <p class="footer__copyright--text">
          Restoran Kutak &copy; <span id="year"></span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
