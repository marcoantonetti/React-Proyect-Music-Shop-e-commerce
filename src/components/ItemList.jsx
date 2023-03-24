import React from 'react'
import { Item } from './Item'

const ItemList = () => {


    return (

        <div className='div-itemList-container-auto'>
            <Item
                img={'./images/productos/acoustic guitars/1.jpg'} 
                title={'Acoustic Guitar Cort'} 
                subtitle={'Porous oaken wood'} 
                price={'150'}/>
        </div>


    )
}

export default ItemList