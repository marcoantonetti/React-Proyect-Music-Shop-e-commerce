import React from 'react'
import { Link } from 'react-router-dom'

export default function CartWidget() {
  return (


    <li key='shopping-cart' className='nav-links' id='cart-widget'> 

    <Link to={`/cart/`}>
    <i className="fas fa-shopping-cart"></i>
    
    </Link>

    
    </li>
  )
}

