import React from 'react'
import Slider from './Slider/Slider'
import MiniSlider from './Slider__mini/Slider'
import CategoryCard from './Home/CategoryCard'
import {categories,discoverObject,products} from '../mockData'

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
                        <a href="/products" className="card__link">Shop now</a>
                </div>
                {categories.map((item,index)=><CategoryCard key={index} categoryTitle={item.title} categoryImg={item.img} categoryLink={item.link}/>)}
            </div>
            <div className="home__content"> 
                    <MiniSlider categoryName="Discover Amazon" cateValue="discoverObject" categoryLink="#" data={discoverObject}/>
                    <MiniSlider categoryName="Electronics Products" cateValue="electronics" categoryLink="#" data={products}/>
                    <MiniSlider categoryName="Jewelery Products" cateValue="jewelery" categoryLink="#" data={products}/>
                    <MiniSlider categoryName="Men Clothing" cateValue="men clothing" categoryLink="#" data={products}/>
                    <MiniSlider categoryName="Women Clothing" cateValue="women clothing" categoryLink="#" data={products}/>
            </div>
            <div className="bottom__slide">
                <MiniSlider categoryName="Best sellers in Kindle eBooks" categoryLink="#" data={products}/>
            </div>
        </div>
    )
}
