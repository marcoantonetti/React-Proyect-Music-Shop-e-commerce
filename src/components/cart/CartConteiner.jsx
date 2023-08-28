import React, { useContext } from 'react'
import { useCartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const CartConteiner = () => {

    const { cartList, removeItemCart, bringCount, totalPrice } = useCartContext()

    console.log('carrito', cartList)

    const takeCount = (count, index) => {
        let counter = count;

        cartList[index].quantity + 1
    }

    return (

        <>
            <h3 className='h3-title'>Cart</h3>
            <hr />

            <div className='cart-div-conteiner'>

                {cartList.length == 0 ?

                    <h4 className='h4-noitems'> There are no items in the cart </h4>
                    
                    :

                    
                        cartList.map((product, index) =>
                            <div key={index} className='div-cart-item-conteiner-flex-row'>


                                <Link className='cart-div-title-img-flex-column' to={`/detail/${product.item.id}`}>

                                    <h4 className='h4-title'>{product.item.title}</h4>
                                    <img className='img-item-detail smaller' src={product.item.thumbnail} alt={product.item.title}></img>

                                </Link>


                                <div className='cart-div-item-buttons-info'>

                                    <div>

                                        <p> Price: <strong><span>${product.item.price}</span></strong></p>
                                        <p> Condition: <strong>{product.item.condition}</strong></p>

                                    </div>

                                    <div className='cart-div-item-buttons'>

                                        <ItemCount initial={product.quantity} stock={product.available_quantity} min={1} bringCount={takeCount}    />
                                        <FontAwesomeIcon className='trashcan-icon' icon={faTrashCan} style={{ color: "#ff0000", }} onClick={() => removeItemCart(product)} />

                                    </div>


                                </div>


                            </div>
                        )
                    

                }

                    <hr className='cart-hr' />

                <div className='div-totalPrice-space-between'>

                    <h4> Total </h4>
                    <p className='p-totalPrice'>   <strong>{Number(totalPrice().toString().split('').splice(0,6).join(''))} </strong> </p>

                </div>

            </div>

        </>

    )
}
