import { useState } from "react"



const SearchBar = () => {

    const [bool, setBool] = useState(true)

    const changeBool = () => {

        console.log(bool)

        return setBool(!bool)
        
    }

    return (

        <div className= "search-bar-logo-flex-row" >

         <input for='search' type="search" placeholder="Search items" className= {bool ? "translate-search-bar" : 'bring-search-bar'}/>
         <label id="search"><i className="fa-solid fa-magnifying-glass"  onClick={ () => changeBool() }></i></label>

        </div>

    )
}

export default SearchBar