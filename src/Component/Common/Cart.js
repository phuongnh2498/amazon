import React from "react";
import { getCartTotal } from '../../context/reducer'
import { useStateValue } from '../../context/StateProvider'

import { Link } from 'react-router-dom'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartProduct from './CartProduct'
import WithCartManager from '../hoc/WithCartManager'

export default function Cart({ isOpenCart, setOpenCart }) {
  const { cart } = useStateValue();


  let total = getCartTotal(cart);
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
          {
            cart.length > 0 ? cart.map(product => {
              const TempComponent = WithCartManager(CartProduct);
              return <TempComponent key={product.id} product={product} />
            }
            ) : <h3>No cart product yet!</h3>}
        </ul>
      </div>
    </div>
  );
}
