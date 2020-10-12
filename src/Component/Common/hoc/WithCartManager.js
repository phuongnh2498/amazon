import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../../context/StateProvider';

export default function (ComposedClass) {
    function ProductEnhance(props) {
        let { product } = props;
        const { removeFromCart, updateCart } = useStateValue()

        const [quantity, setQuantity] = useState(product.quantity);


        useEffect(() => {
            updateCart(product.id, quantity);
        }, [quantity, product]);


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
            <ComposedClass {...props}
                quantity={quantity}
                handleInput={handleInput}
                handleAddMinus={handleAddMinus}
                handleRemove={handleRemove}
                product={product} />
        )
    }
    return ProductEnhance
}
