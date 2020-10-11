import React from "react";
import { useStateValue } from "../../context/StateProvider";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartProduct from './CartProduct'
export default function Cart({ isOpenCart }) {
  const { cart, cartTotal, removeFromCart, updateCart } = useStateValue()

  let total = cartTotal(cart);
  total = total.toLocaleString('en-US', { maximumFractionDigits: 2 })
  return (
    <div className={isOpenCart ? "container" : "container fade__in"}>
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <div className="header__leftbasket">
            <Link to="/checkout" className="basket__checkout">
              <ShoppingCartIcon className="header__basketIcon" />
              <span>Check Out</span>
            </Link>
          </div>
          <div className="shopping-cart-total">
            <span className="lighter-text">Products:</span>
            <span className="primary-color-text">{cart.length}</span>
            <hr />
            <span className="lighter-text">Total:</span>
            <span className="main-color-text">${total}</span>
          </div>
        </div>
        <ul className="shopping-cart-items">
          {cart.length > 0 ? cart.map(product => <CartProduct
            key={product.id}
            product={product}
            removeFromCart={removeFromCart}
            updateCart={updateCart}
          />) : <h3>No cart product yet!</h3>}
        </ul>
      </div>
    </div>
  );
}
