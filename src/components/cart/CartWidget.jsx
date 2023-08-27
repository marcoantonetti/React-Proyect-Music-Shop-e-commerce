import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function CartWidget(props) {

  const { shoppingCart } = props
  const { cartList } = useCartContext()

  console.log('carrito', cartList.length)

  return (


    <li key='shopping-cart' className='nav-links' id='cart-widget'>

      {/* shoppingCart prop differentiates the shoppingcart logo of the navBar from the one on the add to button */}

      {shoppingCart ?

        <Link to={`/cart/`}>

          {cartList.length == 0

            ?

            <FontAwesomeIcon icon={faCartShopping} />

            :

            <FontAwesomeIcon icon={faCartShopping} bounce style={{ color: "#e30246", }} />

          }

        </Link>

        :

        <FontAwesomeIcon icon={faCartShopping} />


      }


    </li>
  )
}

