import React from 'react';
import { useStateValue } from '../../context/StateProvider';

export default function (ComposedClass) {
    function ProductEnhance(props) {
        let { product } = props;
        const { removeFromCart, updateCart } = useStateValue()


        const handleRemove = () => {
            removeFromCart(product.id);

        };

        const handleInput = (e) => {
            const value = e.target.value;
            if (value > 0)
                updateCart(product.id, value);

        };

        const handleAddMinus = (type) => {
            if (type === "+") updateCart(product.id, product?.quantity + 1);
            else {
                if (product?.quantity > 1) updateCart(product.id, product?.quantity - 1);
            }

        };


        return (
            <ComposedClass {...props}
                handleInput={handleInput}
                handleAddMinus={handleAddMinus}
                handleRemove={handleRemove}
                product={product} />
        )
    }
    return ProductEnhance
}
