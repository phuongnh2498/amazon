import React, { useEffect } from "react";
import BackBtn from "../Common/BackBtn";
import { useStateValue } from "../../context/StateProvider";
import { getCartTotal } from "../../context/reducer";
import { useHistory, } from 'react-router-dom'
import PayTotalCard from "../Common/PayTotalCard"
import WithCartManager from '../hoc/WithCartManager'
import ProductListItem from "./ProductListItem";


export default function CheckOut() {
  const history = useHistory();
  const { cart, user } = useStateValue();
  let total = getCartTotal(cart);
  total = total.toLocaleString("en-US", { maximumFractionDigits: 2 });

  useEffect(() => {
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    scrollTop()
  }, [])
  let userName = "";
  if (user) {
    userName = user.email.split('@')[0];
  }
  return (
    <>
      <BackBtn />
      <div className="checkout__container">
        <h2 className="cart__title">{
          // eslint-disable-next-line
          user && `${userName}` + "\'s Shoping Cart"
        }</h2>
        <hr />
        <div className="checkout__content">

          <div className="productcart__container">

            <h2 className="cart__count">There are 5 items in your cart</h2>
            <div className="productcart__list">
              <ul>
                {cart?.length > 0 ? cart.map(product => {
                  const TempComponent = WithCartManager(ProductListItem);
                  return <TempComponent key={product.id} product={product} />
                }
                ) : <h3 className="non__item">You don't have any item in your cart</h3>}
              </ul>
            </div>
          </div>
          <div className="checkout__right">
            <PayTotalCard cart={cart} />
          </div>
        </div>
      </div>

    </>
  );
}
