import React from 'react'
import { Categories } from './categories'
import { Services } from './Services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faPercent, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { allServices } from '../../objects/allServices'
import ItemListContainer from '../ItemListContainer'


export const LandingPage = () => {


    return (
        <main className='main-landing-page-flexCol-centered'>



            <img src='/images/IMG_9952.jpeg' className='img-cover'></img>

            <section className="section-our-services">

            <Services>
                {allServices}
            </Services>
            
            </section>

            <section className="section-top-selling-products">

                <ItemListContainer title='Top Selling Products'/>

            </section>
           
            <section id='about-us' className='div-about-us'>

            <h2 className='h2-subtitle'>About Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste tenetur mollitia qui, sed eaque, voluptates veritatis at, quis possimus libero quia beatae ea adipisci dolorum aperiam asperiores unde distinctio delectus?</p>

            </section>

            <section id='categories' className='div-categories-container-flexwrap-centered'>

            <Categories />
        
            </section>
            
        </main>
)}
