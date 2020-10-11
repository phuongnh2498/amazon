import { toast } from 'react-toastify';

export const getCartTotal = cart => cart?.reduce((cur, product) => cur + product.price * product.quantity, 0)
const addNotify = (text, id) => {
    if (toast.isActive(id)) {
        toast.dismiss(id)
    }
    toast.dark(text, {
        closeOnClick: true,
        draggable: true,
        toastId: id
    });
}

const addToCart = (product, stateValue) => {
    const updatedCart = [...stateValue.cart]

    const updateIndex = updatedCart.findIndex(x => x.id === +product.id)

    if (updateIndex < 0) {
        updatedCart.push({ ...product, quantity: 1 })
        let NotiText = `Added!! 🛒🎈   ${product.title} `
        addNotify(NotiText, product.id)
    } else {
        const updatedProudct = { ...updatedCart[updateIndex] }
        updatedProudct.quantity++;
        updatedCart[updateIndex] = updatedProudct;
        let NotiText = `Added!! 🛒✨  ${updatedProudct.title} ${updatedProudct.quantity}`
        addNotify(NotiText, updatedProudct.id)

    }

    return { ...stateValue, cart: updatedCart }
}
const removeFromCart = (productId, stateValue) => {

    let updatedCart = [...stateValue.cart]
    let NotiText = `Removed! 🗑🗑🗑  ${updatedCart[productId]?.title} `;
    updatedCart = updatedCart.filter(x => x.id !== parseInt(productId))
    addNotify(NotiText, productId)

    return { ...stateValue, cart: updatedCart }
}
const updateCart = (productId, quantity, stateValue) => {
    const updatedCart = [...stateValue.cart]

    const updateProduct = updatedCart.find(x => x.id === +productId)

    updateProduct.quantity = quantity

    return { ...stateValue, cart: updatedCart }
}
const reducer = (state, action) => {
    switch (action.type) {
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