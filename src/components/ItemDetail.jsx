import React, { useState } from 'react'
import CartWidget from './cart/CartWidget'
import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'


export const ItemDetail = ({children}) => {

   const {thumbnail, title, price, condition, available_quantity} = children

   const {addToCart, cartList} = useCartContext()
   
   const [count,setCount] = useState(0)

   const bringCount = (quantity) => {

    setCount(quantity)

    console.log('quantity', quantity)
    console.log('item', children)


  }

  return (
    

    <>

    <h3 className='h3-title'> Item Detail </h3>
    <hr />
  
    <div className='div-item-detail-layout'>

        <img src={thumbnail} alt=''/>

        <h3>{title}</h3>

        <h4>Condition: {condition}</h4>

        <p>${price}</p>

        <hr/>

        <div className='item-layout-cart-button'>

        <Link onClick={()=>{addToCart({item:children, quantity:count})}} to='/cart' className='item-layout-cart-button-absolute'>

        <button>Add to</button>
        <CartWidget/>

        </Link> 
        <ItemCount initial={1} stock={available_quantity} min={1} bringCount={bringCount}/>

        </div>
        
    </div>

    </>


  )
}
