import React from 'react'
import {products} from '../mockData'
export default function ProductsPage() {

    const category = products.map(item => item.category)
    .filter((value, index, self) => self.indexOf(value) === index);
    return (
        <div className="pagebody">
            <div className="leftsection">
                <h3>Other category</h3>
                <div className="leftsection__list">
                    <ul>
                            {category.map((cat,index)=><li key={index}>{cat}</li>)}
                    </ul>
                </div>            
            </div>
            <div className="pagebody__content">
                <div className="pagebody__content__card">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""/>
                    <h3>Command Picture Hanging Strips Heavy Duty, Large, White, Holds 16 lbs, 14-Pairs</h3>
                    <span>$9</span>
                </div>
            </div>
        </div>
    )
}
