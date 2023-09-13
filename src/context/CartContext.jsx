import React, { createContext, memo, useContext, useState } from 'react'
import { useUserContext } from './UserContext'
import { dataBase } from '../firebase/config';
import { addDoc, collection, } from 'firebase/firestore'


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = memo(({ children }) => {

    const [cartList, setCartList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const { user, password } = useUserContext();



    const addToCart = (product, boolean) => {

        let bool = true;

        cartList.forEach((cartItem) => {

            // If item is already in the cart
            if (cartItem.item.id == product.item.id) {

                // if there is no itemCounter, because only Add to cart button is present then update quantity +1
                if (boolean) {

                    cartItem.quantity += 1

                    // if there is an itemCounter, then Add to cart button updates quantity by said counter
                } else {

                    cartItem.quantity += product.quantity

                }


                bool = false

            }

            setCartList([...cartList])

        })

        // If item wasnt already in the cart, then bool remains true, and new product is added to cartList
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

    const getTotalPrice = () => {

        let totalNumber = cartList.reduce((totalPrice, product) => {

            return totalPrice = totalPrice + (product.item.price * product.quantity)

        }, 0)

        setTotalPrice(totalNumber)

        return totalNumber;

    }


    const handleSubmit = () => {

        
        // I dont want every single attribute to get passed to firestore
        const simplerCartList = cartList.map(product => (
            
            {
                
                'id': product.item.id ,
                'title': product.item.title ,
                'price': product.item.price ,
                'quantity': product.quantity ,
                'condition': product.item.condition ,
                'seller': product.item.seller.nickname, 
                
            }
            
            ))
            
            const order = {

             'buyer': { 'user': user },

             'totalPrice': { totalPrice },

             'items': simplerCartList

        }

        const queryCollection = collection(dataBase, 'orders')

        addDoc(queryCollection, order)
            .then(resp => console.log('order', resp))
            .catch(err => console.log('err', err))

        alert('Order placed on Firestore')
        
        emptyCart()


    }



    return (

        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeItemCart,
            getTotalPrice,
            updateQuantity,
            handleSubmit,

        }}>

            {children}

        </CartContext.Provider>
    )
}
)
