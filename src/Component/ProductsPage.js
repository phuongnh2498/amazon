import React from 'react'
import {Link} from 'react-router-dom'
import {products} from '../mockData'
import MiniSlider from './Slider__mini/Slider'
export default function ProductsPage() {

    const category = products.map(item => item.category)
    .filter((value, index, self) => self.indexOf(value) === index);
    return (
        <>
        <div className="pagebody">
                <h1 className="pagebody__top">
                    <div className="top__container">
                        <span className="top__resultText">over 60,000 results for "dog toys"</span>
                        <div className="top__sortby">
                            <span className="top__sortbytext">Sort by </span>
                            <select className="top__sortby__selection">
                                <option>Featured</option>
                                <option>Price:low to high</option>
                                <option>Price:high to low</option>
                            </select>
                        </div>
                    </div>
                </h1>
            <div className="leftsection">
                <div className="leftsection__category">
                <h3>Other category</h3>
                <div className="leftsection__list">
                    <ul>
                            {category.map((cat,index)=><li key={index}>{cat}</li>)}
                    </ul>
                </div>      
                </div>
            </div>
            <div className="pagebody__content">
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
                    <div className="bottom__slider">
            <MiniSlider categoryName="Other Items" cateValue="" categoryLink="#" data={products}/>
            </div>
            </>
    )
}
