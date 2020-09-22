import React from 'react'
import {Link} from 'react-router-dom'
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
                <div className="style__line"/>
                <div className="pagebody__content__card">
                    <div className="card__img">
                       <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""/>
                    </div>
                    <Link to="item/1">Command Picture Hanging Strips Heavy Duty, Large, White, Holds 16 lbs, 14-Pairs</Link>
                    <div className="card__bot">
                        <span className="card__price">$9</span>
                        <button className="btn__add">Add</button>
                    </div>
                </div>
                <div className="pagebody__content__card">
                    <div className="card__img">
                       <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""/>
                    </div>
                    <Link to="item/1">Command Picture Hanging Strips Heavy Duty, Large, White, Holds 16 lbs, 14-Pairs</Link>
                    <div className="card__bot">
                        <span className="card__price">$9</span>
                        <button className="btn__add">Add</button>
                    </div>
                </div>                <div className="pagebody__content__card">
                    <div className="card__img">
                       <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""/>
                    </div>
                    <Link to="item/1">Command Picture Hanging Strips Heavy Duty, Large, White, Holds 16 lbs, 14-Pairs</Link>
                    <div className="card__bot">
                        <span className="card__price">$9</span>
                        <button className="btn__add">Add</button>
                    </div>
                </div>                <div className="pagebody__content__card">
                    <div className="card__img">
                       <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""/>
                    </div>
                    <Link to="item/1">Command Picture Hanging Strips Heavy Duty, Large, White, Holds 16 lbs, 14-Pairs</Link>
                    <div className="card__bot">
                        <span className="card__price">$9</span>
                        <button className="btn__add">Add</button>
                    </div>
                </div>                <div className="pagebody__content__card">
                    <div className="card__img">
                       <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""/>
                    </div>
                    <Link to="item/1">Command Picture Hanging Strips Heavy Duty, Large, White, Holds 16 lbs, 14-Pairs</Link>
                    <div className="card__bot">
                        <span className="card__price">$9</span>
                        <button className="btn__add">Add</button>
                    </div>
                </div>
 
            </div>
        </div>
    )
}
