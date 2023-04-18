import React from 'react'
import { Item } from './Item'

const ItemList = ({products}) => {



    return (

        <div className='div-itemList-flex-container'>

            {products.map ( (product, index) => 
            
                <div key={index}>


                    <Item
                        img = {product.thumbnail} 
                        title = {product.title} 
                        price = {product.price} 
                        id={product.id}
                        
                        />
                </div>

                
                )}

        </div>


    )
}

export default ItemList