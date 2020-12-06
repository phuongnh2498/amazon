import React,{useEffect} from "react";
import BackBtn from "../Common/BackBtn";
import { useStateValue } from "../../context/StateProvider";
import { getCartTotal } from "../../context/reducer";
import WithCartManager from '../hoc/WithCartManager'
import ProductListItem from "./ProductListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";



export default function CheckOut() {
  const { cart,user } = useStateValue();
  let total = getCartTotal(cart);
  total = total.toLocaleString("en-US", { maximumFractionDigits: 2 });

  useEffect(()=>{
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    scrollTop()
  },[])
  let userName = "";
  if (user) {
      userName = user.email.split('@')[0];
  }
  return (
    <>
      <BackBtn />
      <div>
        <div className="productcart__container">
        
          <h2 className="title">{
          // eslint-disable-next-line
          user&&`${userName}`+"\'s Shoping Cart"}</h2>
          <div className="productcart__list">
            <ul>
              {cart.map(product => {
              const TempComponent = WithCartManager(ProductListItem);
              return <TempComponent key={product.id} product={product} />}
            )}
            </ul>
          </div>
          <div className="productcart__bottom">
            {cart?.length > 0 ? (
              <span className="text">
                SubTotal: <span className="money">${total}</span>
              </span>
            ) : (
              <h3 className="non__item">You don't have any item in your cart</h3>
            )}
          </div>
        </div>
        <div className="plug__bottom">
              <h4>My github: <a href="https://github.com/boyhp0079">@HP<FontAwesomeIcon icon={faCat}/></a></h4>
      </div>
      </div>
    </>
  );
}
