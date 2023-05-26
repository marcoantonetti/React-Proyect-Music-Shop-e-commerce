import  { useEffect, useState } from 'react'
import { allCategories } from '../objects/categories';

export const filterProducts = (cid, id, productsAPI) => {

    console.log('chau', productsAPI)     
    
    useEffect(() => {

        console.log('products', products)

        if (id){
                                    
            setProducts(products.find( product => product.id === id));
                 
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
                setProducts(products.filter((product) => {

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
    }, [])

     return {products}

}
