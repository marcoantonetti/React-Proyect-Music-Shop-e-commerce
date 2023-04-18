import React from 'react'
import { Item } from './Item'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { allCategories } from '../objects/categoriesObjects'


const ItemListContainer = (props) => {

    const {title} = props ;

    const url = "https://api.mercadolibre.com/sites/MLA/search?category=MLA1182";

    const [products, setProducts] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const { cid } = useParams()


    useEffect(() => {

        // Mi itemlistcontainer va a mostrar productos por categoria ( if (cid)) o caso contrario, va a mostrar los 10 productos mas vendidos

        const fetchProductByCategory = async () => {

            try {

                let resp = await fetch(url);
                let respParsed = await resp.json();

                // Si viene el cid en el URL aplicar logica solo para el cid que sea igual a mi categoria.

                if (cid) {

                    allCategories.forEach((category) => {

                        if (cid == category.category) {

                            // En esta categoria filtrar los productos del API en base a su categoria de mercado libre (category_id).

                            setTimeout(() => {

                                setProducts(respParsed.results.filter((product) => {

                                    return category.categoryID.includes(product.category_id)

                                }))

                                setLoading(false);

                            }, 2000)
                        }

                    }
                    )
                } else {

                    // Cuando no hay cid mostrar los 10 productos mas vendidos

                    let featureProducts;

                    function compareNumbers(a, b) {
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
                                                                        .sort(compareNumbers)
                                                                        .slice(0,10)


                        return featureProducts;

                    }

                    setTimeout(() => {


                        setProducts(sortBySoldQuantity());
                        setLoading(false);

                    }, 500)
                }

            } catch {

                console.log('error found. Internal server error')

                setTimeout(() => {
                    setError(true)
                    setLoading(false);
                }
                    , 2000)

            }

        }

        fetchProductByCategory()
    }

        , [cid])

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