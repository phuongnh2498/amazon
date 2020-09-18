import React from 'react'
import Slider from './Slider/Slider'
import MiniSlider from './Slider__mini/Slider'
import CategoryCard from './CategoryCard'
import {categories} from '../mockData'

export default function Home() {
    const slides = ["./slide1.jpg","./slide2.jpg","./slide3.jpg"];
    const slides1 = [['/discover/discover0.png','/discover/discover1.jpg','/discover/discover2.jpg','/discover/discover4.jpg','/discover/discover5.jpg',]];
    const slides2 = [['/discover/discover0.png','/discover/discover1.jpg','/discover/discover2.jpg','/discover/discover4.jpg','/discover/discover5.jpg',]];
    
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
                        <a href="#" className="card__link">Shop now</a>
                </div>
                {categories.map((item,index)=><CategoryCard key={index} categoryTitle={item.title} categoryImg={item.img} categoryLink={item.link}/>)}
            </div>
            <div className="carousel__mini">
                <MiniSlider  slides={slides1}/>
            </div>

        </div>
    )
}
