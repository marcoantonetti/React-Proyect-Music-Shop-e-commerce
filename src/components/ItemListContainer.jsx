import React from 'react'
import { Item } from './Item'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'


const ItemListContainer = (props) => {

    const {title} = props ;

    const { cid } = useParams()

 // hacer logica para los filtros 

    const {products, loading, error} = useFetch(cid)
    console.log(products) 
   

    return (

        <section className='section-itemListcontainer-auto'>

            <h3 className='h3-title'>{title}</h3>

            {loading ?
                <><p>Loading our products</p>
                    <FontAwesomeIcon icon={faSpinner} className='fa-spin' /> </>

                :

                error ?
                    <p>We are sorry. An internal error has occured</p>
                    :
                    <ItemList products={products} />

            }


        </section>


    )
}

export default ItemListContainer