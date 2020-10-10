import React from "react";
import BackBtn from "../Common/BackBtn";
import { useStateValue } from "../../context/StateProvider";
import ProductListItem from "./ProductListItem";

export default function CheckOut() {
  const { cart, removeFromCart, updateCart, cartTotal } = useStateValue();
  let total = cartTotal(cart);
  total = total.toLocaleString("en-US", { maximumFractionDigits: 2 });
  return (
    <>
      <BackBtn />
      <div>
        <div className="productcart__container">
          <h2 className="title">Shoping Cart</h2>
          <div className="productcart__list">
            <ul>
              {cart.map((product) => (
                <ProductListItem
                  key={product.id}
                  product={product}
                  removeFromCart={removeFromCart}
                  updateCart={updateCart}
                />
              ))}
            </ul>
          </div>
          <div className="productcart__bottom">
            {cart?.length > 0 ? (
              <span className="text">
                SubTotal: <span className="money">${total}</span>
              </span>
            ) : (
              <span className="text">You don't have any item in your cart</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
