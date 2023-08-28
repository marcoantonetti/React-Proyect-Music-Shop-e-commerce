import React, { useState } from 'react'
import { useCount } from '../hooks/useCount'
import { useCartContext } from '../context/CartContext'


export const ItemCount = ({initial=1, stock=10, min=0, bringCount}) => {

  if(stock == 1) {
    stock = 10
  }

  const {updateQuantity} = useCartContext()

  const {count, increment, decrement, reset} = useCount(initial, stock, min )
  return (


    <div className='div-counter-button-container'>

      <button class='button-counter' onClick={increment}> + </button>
      <div onChange={bringCount(count)}>{count}</div>
      <button class='button-counter' onClick={decrement}> - </button>

      <button class='button-counter' onClick={reset}> Reset </button>

    </div>



  )
}
