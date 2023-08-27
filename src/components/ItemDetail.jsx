import React, { useState } from 'react'
import CartWidget from './cart/CartWidget'
import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'


export const ItemDetail = ({ children }) => {

  const { thumbnail, title, price, condition, available_quantity, seller, shipping } = children

  const { addToCart, cartList } = useCartContext()

  const [count, setCount] = useState(0)

  const bringCount = (quantity) => {

    setCount(quantity)

    console.log('quantity', quantity)
    console.log('item', children)


  }

  let cropedTitle = title.split(' ', 5)
    .join(' ')

  if (cropedTitle.length > 30) {

    cropedTitle = cropedTitle.slice(0, cropedTitle.lastIndexOf(' '))

  }

  return (


    <>


      <div className='div-item-detail-layout-flexrow'>

        <div className='div-h3-img-container'>

          <h3 className='h3-item-detail-title' >{cropedTitle}</h3>

          <img className='img-item-detail' src={thumbnail} alt='' />

        </div>

        <div className='div-item-description-flexcol-container'>


          <div className='div-item-description-flexrow-child'>

            <div className='div-flex-item'>

              <p> Condition: <strong>{condition}</strong></p>

              <p> Stock: <strong>{available_quantity}</strong></p>

              <p> Price: <strong><span>${price}</span></strong></p>

            </div>

            <div className='div-flex-item'>

              <p> Seller: &nbsp;

                <Link to={seller.permalink}>

                  <strong><u>{seller.nickname.toLowerCase()}</u></strong>

                </Link>

              </p>

              <p> Cancellation: <strong>{seller.seller_reputation.metrics.cancellations.period}</strong></p>

              <p> Free-shipping <strong>{shipping.free_shipping ? 'Yes' : 'No'}</strong></p>

            </div>

          </div>

          <div className='item-layout-cart-button'>

            <div>

            <Link onClick={() => { addToCart({ item: children, quantity: count }) }} className='itemdetail-cart-button'>

              <button>Add to</button>
              <CartWidget />

            </Link>

            </div>

            
            <div>
            <ItemCount initial={1} stock={available_quantity} min={1} bringCount={bringCount} />
            </div>
            
          </div>

        </div>


      </div>

    </>


  )
}
