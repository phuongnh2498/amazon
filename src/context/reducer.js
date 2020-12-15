import { addToCart, removeFromCart, updateCart, loginUser, emptyCart } from '../actions/actions'

export const getCartTotal = cart => cart?.reduce((cur, product) => cur + product.price * product.quantity, 0)

export const CARTKEY = "LOCAL_CART"
export const USERKEY = "LOCAL_USER"

export const initialState = {
    cart: getSavedValue(CARTKEY, []),
    user: getSavedValue(USERKEY, null)
}

function getSavedValue(key, init) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    if (init instanceof Function) return init();
    return init;
}
const reducer = (state, action) => {

    switch (action.type) {
        case 'LOGOUT_USER':
            return { ...state, user: null }
        case 'LOGIN_USER':
            return loginUser(action.user, state)
        case 'ADD_TO_CART':
            return addToCart(action.product, state)
        case 'REMOVE_FROM_CART':
            return removeFromCart(action.productId, state)
        case 'EMPTY_CART':
            return emptyCart(state)
        case 'UPDATE_CART':
            return updateCart(action.productId, action.quantity, state)
        default:
            return state;
    }
}
export default reducer;