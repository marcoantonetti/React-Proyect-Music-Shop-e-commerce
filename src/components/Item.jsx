import React from 'react'
import Buttons from './Buttons'
import CartWidget from './CartWidget'

export const Item = ({img, title, subtitle, price}) => {


  return (


    <div className='div-item-layout-relative'>

        <img src={img} alt=''/>

        <h3>{title}</h3>

        <h4>{subtitle}</h4>

        <p>${price}</p>

        <hr/>

        <div className='item-layout-cart-button'>

        <Buttons name='Add to' className='li-item-addtocart-button'/>
        <CartWidget/>

        </div>
        
    </div>


  )
}
