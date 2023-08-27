import React, { createContext, useContext, useState } from 'react'

export  const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {

        setCartList(

            [...cartList, product]
            
        )

        console.log(cartList)
    }

    const removeItemCart = () => {

        

    }



  return (
    
    <CartContext.Provider value={{
        cartList,
        addToCart  
    }}>

        {children}

    </CartContext.Provider>
  )
}

