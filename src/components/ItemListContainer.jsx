import React, { useState } from 'react'
import ItemList from './ItemList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { sortByAttribute } from '../functions/filteredProducts'


const ItemListContainer = (props) => {

    const {title, attribute} = props ;
    // const {items, setItems} = useState([])

    const { cid } = useParams()

    
    const {products, loading, error} = useFetch(cid)

    let sortedProducts;

   if (attribute){

        sortedProducts = sortByAttribute(attribute, products)

   }

   console.log('ordenado',sortedProducts)

    return (

        <section className='section-itemListcontainer-auto'>

            <h3 className='h3-title'>{title}</h3>
            <hr />

            {loading ?
                <><p>Loading our products</p>
                    <FontAwesomeIcon icon={faSpinner} className='fa-spin' /> </>

                :

                error ?
                    <p>We are sorry. An internal error has occured</p>
                    :

                items ? 

                    <ItemList products={products} />

                    :

                    <ItemList products={items} />


            }


        </section>


    )
}

export default ItemListContainer