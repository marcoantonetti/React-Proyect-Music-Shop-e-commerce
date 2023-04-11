import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';



export const ItemDetailContainer = () => {

    const url = "https://api.mercadolibre.com/sites/MLA/search?category=MLA1182";
    
    const [product, setProduct] = useState()
    const [error, setError] = useState (false)
    const [loading, setLoading] = useState(true)

    const {pid} = useParams()

    useEffect( () =>{

        const query = async (id) => {
            
            try{

                let resp = await fetch(url);
                let respParsed = await resp.json();

                setTimeout(() => {
                    setProduct(respParsed.results.find( product => product.id === id));
                    setLoading(false);
                }
                             ,500)
                
            } catch{

                console.log('error found. Internal server error')
           
                setTimeout(() => {
                    setError(true)
                    setLoading(false);
                }
                             ,2000)

            }

        }
            
        query(pid)
    }

        , [])



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
                        {product}
                    </ItemDetail>

    }

     
</section>




  )
}

