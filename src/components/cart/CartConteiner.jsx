import React, { useContext } from 'react'
import { useCartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount'

export const CartConteiner = () => {

    const {cartList,bringCount} = useCartContext()
    console.log('carrito', cartList)

    const sampleFunction = (count) => {
        console.log('sampleFunction')
        let counter = count;
    }

  return (
    <div className='cart-div-conteiner'>

        <h3 className='cart-h3'>Cart</h3>
        <hr></hr>


        {cartList.map ( (product,index) => 

            // {console.log(index,'items:',product)}
            <div key={index} className='div-cart-item-flex-row'>

                <img className='div-item-detail-layout' src={product.item.thumbnail} alt={product.item.title}></img>

                <div className='cart-title-flex-column'>

                    <h4>{product.item.title}</h4>
                    <h5>{product.item.subtitle}</h5>

                </div>

                <ItemCount initial={product.quantity} stock={product.available_quantity} min={1} bringCount={sampleFunction}/>

            </div>
         )}

    </div>

  )
}
