import React, { createContext, useContext, useReducer, useEffect, useState } from 'react'
import reducer, { initialState, CARTKEY, USERKEY } from './reducer'
import axios from 'axios'
import { auth } from '../firebase'
export const StateContext = createContext()




export const StateProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        const fetchProducts = async () => {
            const temp = await axios.get("https://fakestoreapi.com/products").catch(err => { console.log(err) });
            console.log(temp.data);
            setProducts([...temp.data]);
        }

        fetchProducts();
        localStorage.setItem(CARTKEY, JSON.stringify(state.cart))
    }, [state.cart])


    const logoutUser = () => {
        dispatch({ type: "LOGOUT_USER" })
    }
    const setUser = user => {
        dispatch({ type: "LOGIN_USER", user: user })
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

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user)
                setUser(user);
            else
                logoutUser();
        })
        localStorage.setItem(USERKEY, JSON.stringify(state.user))
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

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
                emptyCart: emptyCart,
                logoutUser: logoutUser,
            }
        }>
            {children}
        </StateContext.Provider>
    )
}
export const useStateValue = () => useContext(StateContext)
