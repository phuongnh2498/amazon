import React, { createContext, useContext, useReducer } from 'react'
import { products } from '../mockData'
import reducer, { getCartTotal } from './reducer'

export const StateContext = createContext()

export const initialState = {
    cart: [],
    user: null
}

export const StateProvider = ({ children }) => {

    const [stateValue, dispatch] = useReducer(reducer, initialState)

    const addToCart = product => {
        dispatch({ type: "ADD_TO_CART", product: product })
    }

    const removeFromCart = productId => {
        dispatch({ type: "REMOVE_FROM_CART", productId: productId })
    }

    const updateCart = (productId, quantity) => {
        dispatch({ type: "UPDATE_CART", productId: productId, quantity: quantity })
    }
    const cartTotal = cart => getCartTotal(cart);
    return (
        <StateContext.Provider value={
            {
                products: products,
                cart: stateValue.cart,
                addToCart: addToCart,
                removeFromCart: removeFromCart,
                updateCart: updateCart,
                cartTotal: cartTotal,
            }
        }>
            {children}
        </StateContext.Provider>
    )
}
export const useStateValue = () => useContext(StateContext)
