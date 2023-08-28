import React, { useMemo } from 'react'
import { Item } from './Item'

const ItemList =  ({products, slider}) => {

    return (




        <div className={slider? 'div-itemList-top10' : 'div-itemList-flex-container'}>

            {products.map ( (product, index) => 
            
                <div className='container' key={index}>

                    <Item

                        img = {product.thumbnail} 
                        title = {product.title} 
                        price = {product.price} 
                        id={product.id}
                        product={product}
                        
                        />

                </div>
                
                )}

        </div>


    )
}

export default ItemList