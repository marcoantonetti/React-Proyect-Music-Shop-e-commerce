import React from 'react'
import { Item } from './Item'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import {allCategories } from './landing-page/categories'


const ItemListContainer = () => {

    const url = "https://api.mercadolibre.com/sites/MLA/search?category=MLA1182";
    
    const [products, setProducts] = useState()
    const [error, setError] = useState (false)
    const [loading, setLoading] = useState(true)

    const {cid} = useParams()
    

    useEffect( () =>{

        const query = async () => {
            
            try{

                let resp = await fetch(url);
                let respParsed = await resp.json();

                        // Si viene el cid en el URL aplicar logica solo para el cid que sea igual a mi categoria.

                    if(cid){

                        allCategories.forEach((category) => {

                            if(cid == category.category){

                                // En esta categoria filtrar los productos del API de acuerdo a la linea 49
    
                                setTimeout(() => {
    
                                setProducts(respParsed.results.filter((product) =>{

                                        return category.categoryID.includes(product.category_id)
        
                                }))

                                setLoading(false);
    
                            }, 2000)
                            }
                            


                         }
                        )
                        } else {

                        setTimeout(() => {


                            setProducts(respParsed.results);
                            setLoading(false);

                        }, 2000)


                    }
                

            
            } catch{

                console.log('error found. Internal server error')
           
                setTimeout(() => {
                    setError(true)
                    setLoading(false);
                }
                             ,2000)

            }

        }
            
        query()
    }

        , [cid])

        console.log(products)


    return (

        <section className='section-itemListcontainer-auto'>

                    <h3>Catalogo</h3>

                    {loading ? 
                              <><p>Loading our products</p>
                              <FontAwesomeIcon icon={faSpinner} className='fa-spin'/> </> 
                              
                                  : 
                    
                            error ? 
                                    <p>We are sorry. An internal error has occured</p> 
                                  : 
                                    <ItemList products={products}/>

                    }

                     
        </section>


    )
}

export default ItemListContainer