import React, { useState } from 'react'
import './sliderStyle.css'
import Slide from './Slide'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Link
} from "react-router-dom";
export default function MiniSlider({ data, categoryName, cateValue, categoryLink }) {
    let arrSlides = data;
    const splitIntoChunk = (arr, chunkSize) => {
        let temp = []
        let i = 0;
        let len = arr.length
        for (i = 0; i < len; i += chunkSize) {
            let mychunk = arr.slice(i, i + chunkSize);
            temp.push(mychunk)
        }
        return temp;
    }


    let chunksize = 11
    if (window.innerWidth <= 678) {
        chunksize = 3
    }
    else if (cateValue) {
        chunksize = 6;
        arrSlides = data.filter(item => item.category === cateValue);

    }

    arrSlides = splitIntoChunk(arrSlides, chunksize)

    const [x, setx] = useState(0);

    const goLeft = () => {
        x === 0 ? setx(-100 * (SliderArr.length - 1)) : setx(x + 100)
    }
    const goRight = () => {
        x === -100 * (SliderArr.length - 1) ? setx(0) : setx(x - 100)
    }
    let SliderArr = arrSlides.map((slide, index) => <Slide products={slide} isMany={chunksize === 11} key={index} />)
    return (
        <div className="mslider-container">
            <div className="top-title">
                <h2 className="mslide-title">{categoryName}</h2>
                <span className="link-tag"><Link to={categoryLink}>{Math.random() >= 0.5 ? "See more" : "Shop now"}</Link></span>
            </div>
            <div className="mslider" >
                {

                    SliderArr.map((item, index) => {
                        return (
                            <div key={index} className="mslide" style={{ transform: `translateX(${x}%)` }}>
                                {item}
                            </div>
                        )
                    })
                }

            </div>
            <button className="mslide-arrow" id="marrow-right" onClick={goRight}><FontAwesomeIcon icon="chevron-right" size="4x" /></button>
            <button className="mslide-arrow" id="marrow-left" onClick={goLeft}><FontAwesomeIcon icon="chevron-left" size="4x" /></button>
        </div>
    )
}
