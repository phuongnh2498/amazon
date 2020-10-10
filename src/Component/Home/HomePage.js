import React from 'react'
import Slider from '../Common/Slider/Slider'
import MiniSlider from '../Common/Slider__mini/Slider'
import CategoryCard from './CategoryCard'
import {categories,discoverObject,products} from '../../mockData'
import { Link } from 'react-router-dom'

export default function Home() {
    const slides = ["./slide1.jpg","./slide2.jpg","./slide3.jpg"];
    
    return (
        <div className = "home">
            <div className = "home__slide">
                <Slider slides={slides}/>
            </div>
            <div className="home__sectionContainer">
                <div className="sectionContainer__card">
                        <h2 className="card__title">Shop by Category</h2>
                        <div className="group__item__container">
                            <div className="group__item">
                                <img src="/categoryImg/computercat.jpg" alt=""/>
                                <p>Computers {"&"} Accessories</p>
                            </div>
                            <div className="group__item">
                                <img src="/categoryImg/controller.jpg" alt=""/>
                                <p>Video Games</p>
                            </div>
                            <div className="group__item">
                                <img src="/categoryImg/toystuff.jpg" alt=""/>
                                <p>Baby</p>
                            </div>
                            <div className="group__item">
                                <img src="/categoryImg/toy2.jpg" alt=""/>
                                <p>Toys {"&"} Games</p>
                            </div>
                        </div>
                        <Link to="/products" className="card__link">Shop now</Link>
                </div>
                {categories.map((item,index)=><CategoryCard key={index} categoryTitle={item.title} categoryImg={item.img} categoryLink={item.link}/>)}
            </div>
            <div className="home__content"> 
                    <MiniSlider categoryName="Discover Amazon" cateValue="discoverObject" categoryLink="/products" data={discoverObject}/>
                    <MiniSlider categoryName="Electronics Products" cateValue="electronics" categoryLink="/products" data={products}/>
                    <MiniSlider categoryName="Jewelery Products" cateValue="jewelery" categoryLink="/products" data={products}/>
                    <MiniSlider categoryName="Men Clothing" cateValue="men clothing" categoryLink="/products" data={products}/>
                    <MiniSlider categoryName="Women Clothing" cateValue="women clothing" categoryLink="/products" data={products}/>
            </div>
            <div className="bottom__slide">
                <MiniSlider categoryName="Best sellers in Kindle eBooks" categoryLink="/products" data={products}/>
            </div>
        </div>
    )
}
