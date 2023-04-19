import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';



export const ItemDetailContainer = () => {

   
    const {pid} = useParams()


    const {products, loading, error} = useFetch(undefined ,pid)
    console.log(products) 

  return (

    <section className='section-itemListcontainer-auto'>


    {loading ? 
              <><p>Loading our products</p>
              <FontAwesomeIcon icon={faSpinner} className='fa-spin'/> </> 
              
                  : 
    
            error ? 
                    <p>We are sorry. An internal error has occured</p> 
                  : 
                    <ItemDetail>
                        {products}
                    </ItemDetail>

    }

     
</section>




  )
}

