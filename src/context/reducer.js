import { addToCart, removeFromCart, updateCart, setUser } from '../actions/actions'
export const getCartTotal = cart => cart?.reduce((cur, product) => cur + product.price * product.quantity, 0)


export const initialState = {
    cart: [],
    user: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return setUser(action.user, state)
        case 'ADD_TO_CART':
            return addToCart(action.product, state)
        case 'REMOVE_FROM_CART':
            return removeFromCart(action.productId, state)
        case 'UPDATE_CART':
            return updateCart(action.productId, action.quantity, state)
        default:
            return state;
    }
}
export default reducer;