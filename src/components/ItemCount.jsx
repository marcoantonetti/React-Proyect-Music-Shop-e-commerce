import React, { useState } from 'react'
import { useCount } from '../hooks/useCount'


export const ItemCount = ({initial=1, stock=10, min=0}) => {

  if(stock == 1) {
    stock = 10
  }

  const {count, increment, decrement, reset} = useCount(initial, stock, min )
  console.log('count log', count)
  return (


    <div className='div-counter-button'>
      <button onClick={increment}> + </button>
      <div>{count}</div>
      <button onClick={decrement}> - </button>

      <div>
        <button onClick={reset}> Reset </button>
      </div>

    </div>



  )
}
