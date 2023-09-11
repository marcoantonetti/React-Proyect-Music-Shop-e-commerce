import React, { useState } from 'react'
import ItemList from './ItemList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useFetch, useFbFetch } from '../hooks/useFetch'
import { sortByAttribute } from '../functions/filteredProducts'




const ItemListContainer = (props) => {

    const { attribute, top10 } = props;
    // const {items, setItems} = useState([])

    // cid = category
    const { cid } = useParams()


    const { products, loading, error } = useFetch(cid)

       


    let sortedProducts;
    let top10Products;

    if (attribute) {

        sortedProducts = sortByAttribute(attribute, products)

    }

    if (top10) {

        // top 10 best sold products as seen in the landing page
        top10Products = sortedProducts
            .slice()
            .splice(0, 10)

    }


    return (

        <section className={top10 ? 'section-itemlistconteiner-top10' : 'section-itemListcontainer'}>

            <h3 className={top10 ? 'top10-h3-title-centered' : 'h3-title'}>{cid}</h3>
            <hr />

            {loading ?

                <div className='div-loading-container'> 
                    
                    <div className='div-loading-margin-auto'>

                    <p className='p-loading'>Loading our products</p>
                    <FontAwesomeIcon icon={faSpinner} className='fa-spin' />
                    
                    </div>

                </div>

                :

                error ?

                    <p>We are sorry. An internal error has occured</p>

                    :

                    top10 ?

                        <div className='div-itemList-top10-container'>

                            <ItemList products={top10Products} slider={true} />

                        </div>

                        :

                        <ItemList products={products} slider={false} />


            }


        </section>


    )
}

export default ItemListContainer