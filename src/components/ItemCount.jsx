import React, { useState } from 'react'
import { useCount } from '../hooks/useCount'
import { useCartContext } from '../context/CartContext'


export const ItemCount = ({initial=1, stock=10, min=0, bringCount, product, inShoppingCart}) => {

  if(stock == 1) {
    stock = 10
  }

  const {updateQuantity} = useCartContext()
  
  const {inicial, count, increment, decrement, reset} = useCount(initial, stock, min )

  
  return (


    <div className='div-counter-button-container'>

      <button className='button-counter' onClick={() => { increment(); if ( inShoppingCart ) updateQuantity(true, product)}} > + </button>
      <div onChange={bringCount(count)}> {inShoppingCart ? initial : count} </div>
      <button className='button-counter' onClick={() => { decrement(); if ( inShoppingCart ) updateQuantity(false, product)}}> - </button>

      <button className='button-counter' onClick={() => { reset(); updateQuantity(null, product, true)}}> Reset </button>

    </div>



  )
}
