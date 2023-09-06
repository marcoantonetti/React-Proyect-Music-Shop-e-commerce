import React from 'react'
import { Categories } from './categories'
import { Services } from './Services'
import { allServices } from '../../objects/allServices'
import ItemListContainer from '../ItemListContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const LandingPage = () => {

    const screenSize = window.screen.availWidth >= 700 // This is because of the internal links I am using in the landing page. 
    // When you click on services it smoothly goes to service section but on mobile it goes a bit further down the page
    // So I used the screenSize variable and ternary operator to address this issue


    return (


        <main className='main-landing-page-flexCol-centered'>

            <img src='/images/IMG_9952.jpeg' className='img-cover'></img>

            <section id={screenSize ? "services" : ''}  className="section-top-selling-products">

                <h3 className='h3-title-landing'> Top Selling Products  </h3>

                <ItemListContainer  attribute='sold_quantity' top10={true} />

            </section>

            <section id= { screenSize ? 'about-us' : 'services' } className="section-our-services">

                <Services>
                    {allServices}
                </Services>

            </section>

            <section  className='section-about-us'>

                <h2 className='h2-subtitle'>About Us</h2>
                <hr />
                <p id={screenSize ? 'categories' : 'about-us' } className='p-about-us'> Welcome to Music Shop: a family-owned e-commerce music shop. We are deeply devoted to the enchanting world of music and shipping its top-quality instruments worldwide is how we spread this fair art. With a wide range of instruments, accessories, and resources, we are dedicated to fueling your musical aspirations.

 Browse through our categories below or search exactly what you are looking for on the search bar.

At Music Shop, we strive to create a vibrant community of music lovers, connecting individuals through the universal language of melodies. Whether you're a beginner or a seasoned professional, we are here to support your musical journey with quality products.
 </p>

            </section>

            <section  className='section-categories'>

            <h2 className='h2-subtitle'>Categories</h2>

           
            <hr  id = { screenSize ? '' : 'categories' } />

                <Categories />

            </section>

        </main>
    )
}
