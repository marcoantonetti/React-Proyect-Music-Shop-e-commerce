import React, { createContext, memo, useContext, useState } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = memo(({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = ( product, boolean ) => {

        let bool = true;

        cartList.forEach( ( cartItem ) => {

            // If item is already in the cart
            if ( cartItem.item.id == product.item.id ) {

                // if there is no itemCounter, because only Add to cart button is present then update quantity +1
                if ( boolean ) {

                    cartItem.quantity += 1

                // if there is an itemCounter, then Add to cart button updates quantity by said counter
                } else {

                    cartItem.quantity += product.quantity

                }


                bool = false

            }

            setCartList( [...cartList] )

        })

        // If item wasnt already in the cart, then bool remains true, and new product is added to cartList
        if ( bool ) {

            setCartList(

                [ ...cartList, product ]

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

            cartList[cartList.indexOf(product)].quantity = itemQuantity + 1
            setCartList([...cartList])

        }

        if (!plus && validCount) {

            cartList[cartList.indexOf(product)].quantity = itemQuantity - 1
            setCartList([...cartList])

        }

        if (reset) {

            cartList[cartList.indexOf(product)].quantity = 1
            setCartList([...cartList])

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
