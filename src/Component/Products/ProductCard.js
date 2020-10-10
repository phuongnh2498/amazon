import React from 'react'
import {Link} from 'react-router-dom'
import { useStateValue } from '../../context/StateProvider'


export default function ProductCard({product}) {
    const {addToCart} = useStateValue()

    const handleAdd = ()=>{
        addToCart(product)
    }
    return (
            <div className="pagebody__content__card">
                    <div className="card__img">
                       <img src={product.image} alt={product.description}/>
                    </div>
                    <Link to={`../product/${product.id}`}>{product.title}</Link>
                    <div className="card__bot">
                        <span className="card__price">${product.price}</span>
                        <button className="btn__add" type="primary" onClick  ={handleAdd}>Add</button>
                    </div>
            </div>
    )
}
