import React from 'react'
import { getCartTotal } from '../../context/reducer'
import Lock from "@material-ui/icons/Lock";
import { Link } from 'react-router-dom'

export default function PayTotalCard({ cart }) {

    let total = getCartTotal(cart);
    total = total.toLocaleString('en-US', { maximumFractionDigits: 2 })

    return (
        <div className="checkout__content">
            <div className="checkout__info">
                <div className="info__label">Subtotal</div>
                <div className="info__value">${total}</div>
            </div>
            <div className="checkout__info">
                <div className="info__label">Shipping</div>
                <div className="info__value">--</div>
            </div>
            <div className="checkout__info total">
                <div className="info__label">Order total</div>
                <div className="info__value">${total}USD</div>
            </div>
            <div className="checkout__button">
                <Link to="/payment" >
                    <Lock className="lock__icon"></Lock>Checkout
                </Link>
            </div>
        </div>
    )
}
