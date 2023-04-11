import React from 'react'
import Buttons from './Buttons'
import CartWidget from './CartWidget'
import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom'


export const ItemDetail = ({children}) => {

 const {thumbnail, title, price, condition, available_quantity
 } = children

  return (
  
    <div className='div-item-detail-layout'>

        <img src={thumbnail} alt=''/>

        <h3>{title}</h3>

        <h4>Condition: {condition}</h4>

        <p>${price}</p>

        <hr/>

        <div className='item-layout-cart-button'>

        <Link to='/cart' className='item-layout-cart-button-absolute'>

        <Buttons name='Add to'/>
        <CartWidget/>

        </Link> 
        <ItemCount initial={1} stock={available_quantity} min={1}/>

        </div>
        
    </div>



  )
}
