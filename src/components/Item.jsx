import React from 'react'
import Buttons from './Buttons'
import CartWidget from './CartWidget'
import { Link, useParams } from 'react-router-dom'

export const Item = ({img, title, subtitle, price, id}) => {


  return (


    <div className='div-item-layout-relative'>

        <img src={img} alt=''/>

        <h3 >{title}</h3>

        <h4>{subtitle}</h4>

        <p>${price}</p>

        <hr/>


        <Link to='/cart' className='item-layout-cart-button-absolute'>

        <Buttons name='Add to'/>
        <CartWidget/>

        </Link>

        <Link to= {`/detail/${id}`} className='item-layout-detail-button-absolute' >
        
        <Buttons name='Details'/>
        
        </Link>
        
    </div>


  )
}
