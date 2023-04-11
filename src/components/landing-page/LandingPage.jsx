import React from 'react'
import { Categories } from './categories'

export const LandingPage = () => {


    return (
        <>

            <img src='/images/IMG_9952.jpeg' className='img-cover'></img>
           
            <div id='about-us' className='div-about-us'>

            <h2>About Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste tenetur mollitia qui, sed eaque, voluptates veritatis at, quis possimus libero quia beatae ea adipisci dolorum aperiam asperiores unde distinctio delectus?</p>

            </div>

            <div id='categories' className='categories-container-flexwrap'>

            <Categories />
        
            </div>
            
        </>
)}
