import React from 'react'
import Buttons from './NavButtons'
import CartWidget from './cart/CartWidget'
import { Link, useParams } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

export const Item = ({img, title, subtitle, price, id, product}) => {

  const {addToCart} = useCartContext()



  return (


    <div className='div-item-layout-relative'>

        <img src={img} alt=''/>

        <h3 >{title}</h3>

        <h4>{subtitle}</h4>

        <p>${price}</p>

        <hr/>

        <Link to='/cart' className='item-layout-cart-button-absolute' onClick={()=>{addToCart({item:product, quantity:1})}}>

        <button> Add To </button>
        <CartWidget/>

        </Link>

        <Link to= {`/detail/${id}`} className='item-layout-detail-button-absolute' >
        
        <button> Details </button>
        
        </Link>
        
    </div>


  )
}
