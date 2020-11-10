import React from 'react'
import {useStaticQuery, graphiql} from 'gatsby' 
import swiper from 'swiper'
import 'swiper/swiper.scss'
import {Swiper, SwiperSlide} from 'swiper/react'




const getUsers  = graphql`
  {
    users: allContentfulUsers {
      nodes {
        name
        id:contentful_id
        text
        rating
      }
    }
  }
`

const Users = () => {
    const {users} = useStaticQuery(getUsers)
    return (
      <section className="users">
        <div className="row">
            <h2 className="heading-2 margin-bottom-medium">sta drugi kazu o nama</h2>
            <div className="users__container">
              <Swiper>
                
                {users.nodes.map(user => {
                    return (
                      <SwiperSlide slidesPerView={3} navigation>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                      
                        
                                    <div className="users__item" key={user.id}>
                                       <div className="users__heading">
                                        <h4 className="users__name">
                                            {user.name}
                                        </h4>
                                        <div className="users__icon--box"></div>
                                            <p className="users__text">{user.text}</p>
                                       </div>
                                        <div class="swiper-button-next users__arrows"></div>
                                    <div class="swiper-button-prev users__arrows"></div>
                                    </div>
                     
                            
                        </div>
                        </div>
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
