import React from 'react'
import MiniSlider from './Slider__mini/Slider'
import {products} from '../mockData'
export default function EachProduct() {
    return (
        <div className="main__container">
            <div className="product__wrapper">
                <div className="product__detail">
                    <h2 className="product__title">THIS IS AN ITEM NAME</h2>
                    <div className="product__about">
                        <h4>About the product</h4>
                        <p>“I am a freelance illustrator currently living and working in Oslo, Norway. I work mostly with collage as a medium to explore a range of different themes such as identity, fantasy, and the darker side of human nature; recently exploring the theme of female serial killers. I am constantly trying to find beauty in often dark and serious subject matters, frequently subverting everyday imagery to create narratives that are seductive, yet unsettling. Recurring imagery such as obscured faces reveal my fascination with masked identity and loss of sense of self.”</p>
                    </div>
                </div>
                <div className="product__image">
                    <div className="image__container">
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""/>
                    </div>
                </div>
                <div className="product__variant">
                    <label for="select">Standard Select</label>
                    <div class="select" id="select">
                    <select>
                        <option value="0">Select car:</option>
                        <option value="1">Audi</option>
                        <option value="3">Citroen</option>
                    </select>
                    </div>
                    <div className="variant__bottom">
                        <div className="bottom__left">
                            <span className="variant__label">
                                Total:
                            </span>
                            <span className="variant__price">
                                $25.00
                            </span>
                        </div>
                        <div className="bottom__btn">
                            <button>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="style__line"></div>
            <div className="bottom__slider">
            <MiniSlider categoryName="Other Items" cateValue="" categoryLink="#" data={products}/>
            </div>
        </div>
    )
}
