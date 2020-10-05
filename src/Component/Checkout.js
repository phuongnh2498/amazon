import React from 'react'
import BackBtn from './BackBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CheckOut() {
    return (
        <>
        <BackBtn />
        <div>
            <div className="productcart__container">
                <h2 className="title">Shoping Cart</h2>
                <div className="productcart__list">
                    <ul>
                        <li className="productcart__listitem">
                            <div className="productcart__title">
                                <div className="productcart__image">
                                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""/>
                                </div>
                                <span className="productcart__name">Chicken momo</span>
                            </div>
                            <span className="productcart__quantity">
                                <button><FontAwesomeIcon icon="plus"/></button>
                                  <input type="number" value="0"/>
                                <button><FontAwesomeIcon icon="minus"/></button>
                            </span>
                            <span className="productcart__price">$15.5</span>
                            <span className="productcart__button">
                                <button>
                                <FontAwesomeIcon icon="times"/>
                                </button>
                            </span>
                        </li>
                        <li className="productcart__listitem">
                            <div className="productcart__title">
                                <div className="productcart__image">
                                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""/>
                                </div>
                                <span className="productcart__name">Chicken momo</span>
                            </div>
                            <span className="productcart__quantity">
                                <button><FontAwesomeIcon icon="plus"/></button>
                                  <input type="number" value="0"/>
                                <button><FontAwesomeIcon icon="minus"/></button>
                            </span>
                            <span className="productcart__price">$15.5</span>
                            <span className="productcart__button">
                                <button>
                                <FontAwesomeIcon icon="times"/>
                                </button>
                            </span>
                        </li>
                        <li className="productcart__listitem">
                            <div className="productcart__title">
                                <div className="productcart__image">
                                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""/>
                                </div>
                                <span className="productcart__name">Chicken momo</span>
                            </div>
                            <span className="productcart__quantity">
                                <button><FontAwesomeIcon icon="plus"/></button>
                                  <input type="number" value="0"/>
                                <button><FontAwesomeIcon icon="minus"/></button>
                            </span>
                            <span className="productcart__price">$15.5</span>
                            <span className="productcart__button">
                                <button>
                                <FontAwesomeIcon icon="times"/>
                                </button>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="productcart__bottom">
                    <span className="text">SubTotal: <span className="money">$888</span></span>
                </div>
            </div>
        </div>
        </>
    )
}
