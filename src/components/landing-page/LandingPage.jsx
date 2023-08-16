import React from 'react'
import { Categories } from './categories'
import { Services } from './Services'
import { allServices } from '../../objects/allServices'
import ItemListContainer from '../ItemListContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const LandingPage = () => {


    return (


        <main className='main-landing-page-flexCol-centered'>

            <img src='/images/IMG_9952.jpeg' className='img-cover'></img>

            <section className="section-top-selling-products">

                <h3 className='h3-title-landing'> Top Selling Products  </h3>

                <ItemListContainer  attribute='sold_quantity' top10={true} />

            </section>

            <section className="section-our-services">

                <Services>
                    {allServices}
                </Services>

            </section>

            <section className='section-about-us'>

                <h2 className='h2-subtitle'>About Us</h2>
                <hr />
                <p className='p-about-us'> Welcome to Music Shop: a family-owned e-commerce music shop. We are deeply devoted to the enchanting world of music and shipping its top-quality instruments worldwide is how we spread this fair art. With a wide range of instruments, accessories, and resources, we are dedicated to fueling your musical aspirations.

 Browse through our categories below or search exactly what you are looking for on the search bar.

At Music Shop, we strive to create a vibrant community of music lovers, connecting individuals through the universal language of melodies. Whether you're a beginner or a seasoned professional, we are here to support your musical journey with quality products.
 </p>

            </section>

            <section id='categories' className='section-categories'>
           
            <h3 className='h3-title-landing'> Categories </h3>
            <hr />

                <Categories />

            </section>

        </main>
    )
}
