import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
const CartItem = ({ product, removeFromCart, updateCart }) => {

    const [quantity, setQuantity] = useState(product.quantity);
    useEffect(() => {
        updateCart(product.id, quantity);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);

    const handleRemove = () => {
        removeFromCart(product.id);
    };

    const handleInput = (e) => {
        const value = e.target.value;
        if (value > 0)
            setQuantity(value);
    };

    const handleAddMinus = (type) => {
        if (type === "+") setQuantity((prev) => prev + 1);
        else {
            if (quantity > 1) setQuantity((prev) => prev - 1);
        }
    };
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
                    <input value={quantity} type="number" onChange={handleInput} />
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