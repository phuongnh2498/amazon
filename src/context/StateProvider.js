import React, { createContext, useContext, useReducer, useEffect, useState } from 'react'
import reducer, { initialState } from './reducer'
import axios from 'axios'
export const StateContext = createContext()


function getSavedValue(key) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    if (initialState instanceof Function) return initialState();

    return initialState;
}

export const StateProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const KEY = "LOCAL_CART"

    const savedValue = getSavedValue(KEY)

    const [state, dispatch] = useReducer(reducer, savedValue)

    useEffect(() => {
        const fetchProducts = async () => {
            const temp = await axios.get("https://fakestoreapi.com/products").catch(err => { console.log(err) });
            console.log(temp.data);
            setProducts([...temp.data]);
        }

        fetchProducts();
        localStorage.setItem(KEY, JSON.stringify(state))

    }, [state.cart, state.user, state])


    const setUser = user => {
        dispatch({ type: "SET_USER", user: user })
    }

    const addToCart = product => {
        dispatch({ type: "ADD_TO_CART", product: product })
    }
    const emptyCart = () => {
        dispatch({ type: "EMPTY_CART" })
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
                user: state.user,
                emptyCart: emptyCart
            }
        }>
            {children}
        </StateContext.Provider>
    )
}
export const useStateValue = () => useContext(StateContext)
