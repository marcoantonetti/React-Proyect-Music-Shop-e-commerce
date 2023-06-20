import React, { useState } from 'react'
import ItemList from './ItemList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { sortByAttribute } from '../functions/filteredProducts'


const ItemListContainer = (props) => {

    const {title, attribute, top10} = props ;
    // const {items, setItems} = useState([])

    const { cid } = useParams()

    
    const {products, loading, error} = useFetch(cid)

    let sortedProducts;
    let top10Products;

   if (attribute){

        sortedProducts = sortByAttribute(attribute, products)

   }

   if(top10){

        top10Products = sortedProducts 
                                      .slice()
                                      .splice(0,10)

   }



   console.log('ordenado',top10Products)

    return (

        <section className={top10 ? 'section-itemlistconteiner-top10' : 'section-itemListcontainer'}>

            <h3 className={top10 ? 'top10-h3-title-centered' : 'h3-title'}>{title}</h3>
            <hr />

            {loading ?

                <> <p>Loading our products</p>
                    <FontAwesomeIcon icon={faSpinner} className='fa-spin' /> 
                </>

                :

                error ?
                    <p>We are sorry. An internal error has occured</p>
                    :

                top10 ? 

                <div className='div-itemList-top10-container'>

                    {/* <button> <i className= "prev-arrow arrow-slider fa-solid fa-arrow-left"></i> </button>   */}

                    <ItemList products={top10Products} slider={true} />

                    {/* <button> <i className= "next-arrow arrow-slider fa-solid fa-arrow-right"></i> </button> */}


                </div>

                
                :
                
                <ItemList products={products}  slider={false}   />


            }


        </section>


    )
}

export default ItemListContainer