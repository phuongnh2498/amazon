import React, { createContext, useContext, useReducer } from 'react'
import { products } from '../mockData'
import reducer, { initialState } from './reducer'

export const StateContext = createContext()

export const StateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const setUser = user => {
        dispatch({ type: "SET_USER", user: user })
    }

    const addToCart = product => {
        dispatch({ type: "ADD_TO_CART", product: product })
    }

    const removeFromCart = productId => {
        dispatch({ type: "REMOVE_FROM_CART", productId: productId })
    }

    const updateCart = (productId, quantity) => {
        dispatch({ type: "UPDATE_CART", productId: productId, quantity: quantity })
    }
    return (
        <StateContext.Provider value={
            {
                products: products,
                cart: state.cart,
                addToCart: addToCart,
                removeFromCart: removeFromCart,
                updateCart: updateCart,
                setUser: setUser,
                user: state.user
            }
        }>
            {children}
        </StateContext.Provider>
    )
}
export const useStateValue = () => useContext(StateContext)
