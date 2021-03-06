import React from "react"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { VscStarFull } from "react-icons/vsc"
import "swiper/swiper-bundle.css"

SwiperCore.use(Navigation)

const settings = {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
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
        <Title title="sta drugi kazu o nama" />
        <div className="users__container">
          <Swiper {...settings}>
            {users.nodes.map(user => {
              return (
                <SwiperSlide slidesPerView={1} navigation key={user.id}>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="users__item">
                          <div className="users__heading">
                            <h4 className="users__name">{user.name}</h4>
                            <div className="users__icon--box">
                              <VscStarFull className="users__icon" />
                              <VscStarFull className="users__icon" />
                              <VscStarFull className="users__icon" />
                              <VscStarFull className="users__icon" />
                              <VscStarFull className="users__icon" />
                            </div>
                          </div>
                          <p className="users__text">{user.text}</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-next users__arrows"></div>
                    <div className="swiper-button-prev users__arrows"></div>
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
