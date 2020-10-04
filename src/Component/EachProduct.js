import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import MiniSlider from './Slider__mini/Slider'
import {products} from '../mockData'
import BackBtn from './BackBtn'
export default function EachProduct() {
    let {id} = useParams()
    let prods = [...products];
    const product = prods.find(x=>x.id === Number.parseInt(id))
    
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };
    useEffect(()=>{
        scrollTop()
    },[id])
    return (
        <>
        <BackBtn />
        <div className="main__container">
            <div className="product__wrapper">
                <div className="product__detail">
                <h2 className="product__title">{product.title}</h2>
                    <div className="product__about">
                        <h4>About the product</h4>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="product__image">
                    <div className="image__container">
                        <img src={product.image} alt=""/>
                    </div>
                </div>
                <div className="product__variant">
                    <label htmlFor="select">Standard Select</label>
                    <div className="select" id="select">
                    <select>
                        <option value="0">X</option>
                        <option value="1">XL</option>
                        <option value="2">M</option>
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
        </>
    )
}
