import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {

        cartList.forEach((cartItem) => {

            if (cartItem.item.id == product.id) {

                cartItem.quantity += 1
                return
            }

        })

        setCartList(

            [...cartList, product]

        )

        console.log(cartList)
    }

    const removeItemCart = (product) => {


        let index = cartList.indexOf(product)

        setCartList(

            [...cartList.toSpliced(index, 1)]

        )

    }

    const emptyCart = () => {

        setCartList([])

    }

    const updateQuantity = () => {

        

    }

    const totalPrice = () => 

         cartList.reduce((totalPrice, product) => {

            console.log('totalPrice', totalPrice, 'itemPrice', product.item.price)

            return totalPrice = totalPrice + (product.item.price * product.quantity)

        }, 0)


    



    return (

        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeItemCart,
            totalPrice,
        }}>

            {children}

        </CartContext.Provider>
    )
}

