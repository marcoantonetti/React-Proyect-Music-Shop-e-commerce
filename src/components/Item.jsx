import React from 'react'
import Buttons from './NavButtons'
import {CartWidget} from './cart/CartWidget'
import { Link, useParams } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

export const Item = ({img, title, subtitle, price, id, product}) => {

  const {addToCart} = useCartContext()

  let cropedTitle = title.split(' ', 5)
                           .join(' ')

  if (cropedTitle.length > 30){

    cropedTitle = cropedTitle.slice(0, cropedTitle.lastIndexOf(' '))

  }


  return (


    <div className='div-item-layout-relative'>

        <img className='img-item-layout' src={img} alt=''/>

        <h3 >{cropedTitle}</h3>

        <p>${Math.trunc(price)}</p>

        <hr className='hr-0-margin'/>

        <Link  className='item-layout-cart-button-absolute' onClick={()=>{ addToCart( { item:product, quantity:1 }, true )}}>

        <button> Add To </button>
        <CartWidget shoppingCart={false}/>

        </Link>

        <Link to= {`/detail/${id}`} className='item-layout-detail-button-absolute' >
        
        <button> Details </button>
        
        </Link>
        
    </div>


  )
}
