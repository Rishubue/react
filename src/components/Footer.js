import React from "react"
import icons from "../constans/social-icons"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="footer__container">
          <div className="footer__item">
            <h4 className="heading-4 margin-bottom-small">O nama</h4>
            <p className="footer__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellat, aperiam voluptates doloribus quisquam fugiat sit labore
              consectetur exercitationem quibusdam a.
            </p>
          </div>
          <div className="footer__item">
            <h4 className="heading-4 margin-bottom-small">Radno vreme</h4>
            <p className="footer__text">Ponedeljak - Subota: 8h - 22h</p>
            <p className="footer__text">Nedelja: 8h - 18h</p>
          </div>
          <div className="footer__item">
            <div className="footer__social">
              {icons.map((icon, index) => {
                return (
                  <div className="footer__icon-box" key={index}>
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

      <div className="footer__copyright">
        <p className="footer__copyright--text">Restoran Kutak &copy;</p>
      </div>
    </footer>
  )
}

export default Footer
