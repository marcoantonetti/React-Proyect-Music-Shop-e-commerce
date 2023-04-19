// una funcion que consuma la api


import React, { useEffect, useState } from 'react'
import { allCategories } from '../objects/categories';

export const useFetch =  (cid, id, sortingMethod) => {

    const url = "https://api.mercadolibre.com/sites/MLA/search?category=MLA1182";
    
    const [products, setProducts] = useState('')
    const [error, setError] = useState (false)
    const [loading, setLoading] = useState(true)
   
    useEffect(() => {

            const fetchAPI = async () => {

                try{

                    let res = await fetch(url)
                    let resParsed = await res.json()
                    
                // This reads as: if route ends with /detail/:pid. pid is passed as the id parameter
                    if (id){
                             
                        setTimeout(() => {
                        
                            setProducts(resParsed.results.find( product => product.id === id));
                            setLoading(false)    
                                 
                                          }, 500)
                                } 
                // This reads as: if route ends with /categories/:cid. cid is passed as the cid parameter
                    else if(cid){

                        allCategories.forEach((category) => {
           
                        if (cid == category.category) {
           
                            // En esta categoria filtrar los productos del API en base a su categoria de mercado libre (category_id).

                            setTimeout(() => {
                                // Hago este enrrollo porque mis categorias incluyen varias categorias de mercado libre. 
                                // Por ejemplo la categoria pianos tiene las categorias de MELI: Pianos y teclados
                                // O la categoria 'otros' tiene 10 categorias de MELI
                                setProducts(resParsed.results.filter((product) => {

                                return category.categoryID.includes(product.category_id)
           
                                           }
                                           )
                                           )
           
                                setLoading(false);
           
                                       }, 2000)
                                   }
                                     }
                                     )
                
                                    }
                    
                     

                    

            }  catch {

                    console.log('error found. Internal server error')
           
                    setTimeout(() => {
                        setError(true)
                        setLoading(false);
                    }
                                 ,2000)


                }

           
            }        
       
            fetchAPI()

    }, [cid,id])

    
  return {products, error, loading}
}


/*
 else {

                    // Cuando no hay cid mostrar los 10 productos mas vendidos

                    let featureProducts;

                    function compareSoldQuantity(a, b) {
                        if ( a.sold_quantity < b.sold_quantity ){
                            return 1;
                          }
                          if ( a.sold_quantity > b.sold_quantity ){
                            return -1;
                          }
                          return 0;
                    }

                    function sortBySoldQuantity() {


                        featureProducts = respParsed.results            
                                                                        .sort(compareSoldQuantity)
                                                                        .slice(0,10)


                        return featureProducts;

                    }

                    setTimeout(() => {

                        setProducts(sortBySoldQuantity());
                        setLoading(false);

                    }, 500)
                } */