import React, { createContext, memo, useContext, useState } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = memo(({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {

        let bool = true;

        cartList.forEach((cartItem) => {

            
            if (cartItem.item.id == product.item.id) {
                
                console.log(cartItem.item.id == product.item.id, cartItem.item.id, product.item.id )
                cartItem.quantity += 1
                bool = false

            }
            
            setCartList([ ...cartList ])
        })

        if (bool) {

            setCartList(
    
                [...cartList, product]
    
            )

        }


        console.log('aaa', cartList)
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

    const updateQuantity = (plus, product, reset) => {

        let cartItem = cartList[cartList.indexOf(product)]
        let itemQuantity = cartItem.quantity
        let validCount = itemQuantity > 1;
        
        // validCount prevents logic to happen if the count of the item is under 1 (no negatives)
        
        if (plus) {

            cartList[ cartList.indexOf(product)].quantity = itemQuantity + 1
            setCartList( [...cartList] )

        }

        if (!plus && validCount) {

            cartList[ cartList.indexOf(product)].quantity = itemQuantity - 1
            setCartList( [...cartList] )

        }

        if (reset) {

            cartList[ cartList.indexOf(product)].quantity = 1
            setCartList( [...cartList] )

        }

    }

    const totalPrice = () =>

        cartList.reduce((totalPrice, product) => {

            return totalPrice = totalPrice + (product.item.price * product.quantity)

        }, 0)






    return (

        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeItemCart,
            totalPrice,
            updateQuantity,
        }}>

            {children}

        </CartContext.Provider>
    )
}
)
