import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
const CartItem = ({ product, handleInput, handleAddMinus, handleRemove }) => {

    return (
        <li className="clearfix">
            <Link to={`../product/${product.id}`} className="item-title">
                <img
                    src={product.image}
                    alt={product.title}
                />
                <span className="item-name">{product.title}</span>
            </Link>
            <span className="item-price">${product.price}</span>
            <span className="item-quantity">Quantity:
                <span className="input">
                    <button className="plus" onClick={() => handleAddMinus("+")}>
                        <FontAwesomeIcon icon="plus" />
                    </button>
                    <input value={product.quantity} type="number" onChange={handleInput} />
                    <button className="minus" onClick={() => handleAddMinus("-")}>
                        <FontAwesomeIcon icon="minus" />
                    </button>
                </span>
            </span>
            <span className="item-remove">
                <button onClick={handleRemove}>
                    <FontAwesomeIcon icon="times" />
                </button>
            </span>
        </li>
    )
}
export default CartItem;