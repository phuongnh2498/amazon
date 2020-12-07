import React from 'react'
import {
    Link
} from "react-router-dom";

export default function Slide({ products, isMany }) {
    return (
        <>
            {products.map((item, index) => {
                return <Link className="slideimage-container" key={index} to={item.id ? `/product/${item.id}` : "#"}>
                    <img src={item.image} className="mslide-img" style={isMany ? { maxWidth: 130 + 'px' } : { maxWidth: 270 + 'px' }} alt="" />
                </Link>
            })}
        </>
    )
}
