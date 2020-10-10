import React from "react";
import { useStateValue } from "../../context/StateProvider";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Cart({ isOpenCart }) {
  const { cart, cartTotal } = useStateValue()
  let total = cartTotal(cart);
  total = total.toLocaleString('en-US', { maximumFractionDigits: 2 })
  return (
    <div className={isOpenCart ? "container" : "container fade__in"}>
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <ShoppingCartIcon className="header__basketIcon" />
          <div className="shopping-cart-total">
            <span className="lighter-text">Products:</span>
            <span className="primary-color-text">{cart.length}</span>
            <hr />
            <span className="lighter-text">Total:</span>
            <span className="main-color-text">${total}</span>
          </div>
        </div>
        <ul className="shopping-cart-items">
          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg"
              alt="item1"
            />
            <span className="item-name">Sony DSC-RX100M III</span>
            <span className="item-price">$849.99</span>
            <span className="item-quantity">Quantity: 01</span>
          </li>

          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg"
              alt="item1"
            />
            <span className="item-name">KS Automatic Mechanic...</span>
            <span className="item-price">$1,249.99</span>
            <span className="item-quantity">Quantity: 01</span>
          </li>

          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg"
              alt="item1"
            />
            <span className="item-name">Kindle, 6" Glare-Free To...</span>
            <span className="item-price">$129.99</span>
            <span className="item-quantity">Quantity: 01</span>
          </li>
        </ul>

        <Link to="/checkout" className="button">
          Checkout
        </Link>
      </div>
    </div>
  );
}
