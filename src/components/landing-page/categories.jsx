import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { allCategories } from '../../objects/categories'


export const Categories = () => {

   const [categories, setCategories] = useState(allCategories)


  return (

    <div className='hola'>

    {categories.map((category, index) => 

        
    <Link key={index} to={`/categories/${category.category}`}>
        {/* <h2>{category.category}</h2> */}
    <img alt={category.category} src={category.img} className='img-category'></img>
    </Link>
    
    )}
    
   </div>     

  )
}
