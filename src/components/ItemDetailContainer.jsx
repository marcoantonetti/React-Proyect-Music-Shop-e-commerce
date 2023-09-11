import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useFetch, useFbFetch } from '../hooks/useFetch';



export const ItemDetailContainer = () => {


  const { pid } = useParams()


  const { products, loading, error } = useFetch(undefined, pid)

  return (

    <section className='section-itemListcontainer-auto'>


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
          
          <ItemDetail>
            {products}
          </ItemDetail>

      }


    </section>




  )
}

