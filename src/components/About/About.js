import React from "react"
import img from "../../images/about_img.jpeg"
import img2 from "../../images/about_img-2.jpeg"

const About = () => {
  return (
    <section className="about">
      <div className="row">
        <div className="about__container">
          {/* <div className="about__img">
            <img className="about__img--2" src={img} alt="slika 2"></img>
            <img className="about__img--1" src={img2} alt="slika 1"></img>
          </div> */}

          <div className="about__text-box">
            <h4 className="logo-text-sm  margin-bottom-small second">Ovo je</h4>
            <h2 className="heading-2-sm margin-bottom-small">Naša priča</h2>

            <p className="big-text margin-bottom-small">
              “Action ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate”.
            </p>

            <p className="long-text margin-bottom-small">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
              nulla. Vel deserunt nihil eum odit asperiores molestiae commodi,
              nam voluptates. Dolorem neque quos ipsa exercitationem.
            </p>
            <p className="long-text margin-bottom-small">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
              nulla. Vel deserunt nihil eum odit asperiores molestiae commodi,
              nam voluptates. Dolorem neque quos ipsa exercitationem. nam
              voluptates. Dolorem neque quos ipsa exercitationem. nam
              voluptates. Dolorem neque quos ipsa exercitationem.
            </p>
            <p className="long-text margin-bottom-small">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
              nulla. Vel deserunt nihil eum odit asperiores molestiae commodi,
              nam voluptates. Dolorem neque quos ipsa exercitationem. nam
              voluptates. Dolorem neque quos ipsa exercitationem. nam
              voluptates. Dolorem neque quos ipsa exercitationem.
            </p>
            <p className="long-text margin-bottom-small">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
              nulla. Vel deserunt nihil eum odit asperiores molestiae commodi,
              nam voluptates. Dolorem neque quos ipsa exercitationem. nam
              voluptates. Dolorem neque quos ipsa exercitationem. nam
              voluptates. Dolorem neque quos ipsa exercitationem.
            </p>
            <p className="long-text margin-bottom-small">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
              nulla. Vel deserunt nihil eum odit asperiores molestiae commodi,
              nam voluptates. Dolorem neque quos ipsa exercitationem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
