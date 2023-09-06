import { useState } from "react"
import { useFetch } from "../hooks/useFetch"



const SearchBar = () => {

    const [bool, setBool] = useState(true)

    const [query, setQuery] = useState('')

    const { products } = useFetch()

    const changeBool = () => {

        console.log(bool)
        return setBool(!bool)

    }

    const handleChange = (e) => {

        setQuery(e.target.value)
        console.log(query)

    }

    const convertToTitleCase = (str) => {
        if (!str) {
            return ""
        }
        return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
      }


    const getFilteredItems = (products, query) => {

        const titleCaseQuery = convertToTitleCase(query)

        console.log(Object.values(products).filter((product) => product.title.includes(titleCaseQuery)))
         return Object.values(products).filter((product) => product.title.includes(titleCaseQuery))

    }


    const filterItems = getFilteredItems(products, query)

    const cropedTitle = (title) => {


        let cropedTitle = title.split(' ', 5)
                                .join(' ')
    
        if (cropedTitle.length > 30) {
    
            cropedTitle = cropedTitle.slice(0, cropedTitle.lastIndexOf(' '))
    
        }

        return cropedTitle

    }




    return (

        <div className="search-bar-logo-flex-row" >

            <input for='search' type="search" placeholder="Search items" className={bool ? "translate-search-bar" : 'bring-search-bar'} onChange={handleChange} />
            <label id="search"><i className="fa-solid fa-magnifying-glass" onClick={() => changeBool()}></i></label>

            {query.length > 0 ?

                <div className="div-searched-products">


                   {filterItems.map( ( product, index ) => 

                        <div className="div-flex-roww" key={index} >

                            {/* on click te lleve a item detail, arreglar tamano para vista desktop */}

                            <img className='img-small' src={product.thumbnail} />

                            <p className="p-title">{cropedTitle(product.title)}</p>

                        </div>

                    )

                    }

                </div>

                :

                <></>

            }

        </div>

    )
}

export default SearchBar

