import React, { useState } from 'react'
import { useCount } from '../hooks/useCount'
import { useCartContext } from '../context/CartContext'


export const ItemCount = ({initial=1, stock=10, min=0, bringCount, product, inShoppingCart}) => {

  if(stock == 1) {
    stock = 10
  }

  const {updateQuantity} = useCartContext()
  
  const {count, increment, decrement, reset} = useCount(initial, stock, min )
  console.log('myCount: ', count)
  
  return (


    <div className='div-counter-button-container'>

      <button class='button-counter' onClick={() => { increment(); if ( inShoppingCart ) updateQuantity(true, product)}} > + </button>
      <div onChange={bringCount(count)}>{count}</div>
      <button class='button-counter' onClick={() => { decrement(); if ( inShoppingCart ) updateQuantity(false, product)}}> - </button>

      <button class='button-counter' onClick={() => { reset(); updateQuantity(null, product, true)}}> Reset </button>

    </div>



  )
}
