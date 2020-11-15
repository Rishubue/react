import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"

SwiperCore.use(Navigation)

const settings = {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 520,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}

const getUsers = graphql`
  {
    users: allContentfulUsers {
      nodes {
        name
        id: contentful_id
        text
        rating
      }
    }
  }
`

const Users = () => {
  const { users } = useStaticQuery(getUsers)
  return (
    <section className="users">
      <div className="row">
        <h2 className="heading-2 margin-bottom-medium">
          sta drugi kazu o nama
        </h2>
        <div className="users__container">
          <Swiper {...settings}>
            {users.nodes.map(user => {
              return (
                <SwiperSlide slidesPerView={1} navigation>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="users__item" key={user.id}>
                          <div className="users__heading">
                            <h4 className="users__name">{user.name}</h4>
                            <div className="users__icon--box">zvijezdice</div>
                          </div>
                          <p className="users__text">{user.text}</p>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-pagination"></div>

                    <div class="swiper-button-next users__arrows"></div>
                    <div class="swiper-button-prev users__arrows"></div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Users
