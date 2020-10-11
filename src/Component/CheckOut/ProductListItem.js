import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductListItem({
    product,
    removeFromCart,
    updateCart,
}) {
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
        <li className="productcart__listitem">
            <div className="productcart__title">
                <div className="productcart__image">
                    <Link to={`../product/${product.id}`}>
                        <img src={product.image} alt="" />
                    </Link>
                </div>
                <span className="productcart__name">{product.name}</span>
            </div>

            <span className="productcart__quantity">
                <button onClick={() => handleAddMinus("+")}>
                    <FontAwesomeIcon icon="plus" />
                </button>
                <input value={quantity} type="number" onChange={handleInput} />
                <button onClick={() => handleAddMinus("-")}>
                    <FontAwesomeIcon icon="minus" />
                </button>
            </span>
            <span className="productcart__price">${product.price}</span>
            <span className="productcart__button">
                <button onClick={handleRemove}>
                    <FontAwesomeIcon icon="times" />
                </button>
            </span>
        </li>
    );
}
