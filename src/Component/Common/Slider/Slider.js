import React, { useState } from 'react'
import './sliderStyle.css'
import Slide from './Slide'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Slider({ slides }) {
    let SliderArr = slides.map((slide, index) => <Slide src={slide} key={index} />);
    const [x, setx] = useState(0);
    const goLeft = () => {
        x === 0 ? setx(-100 * (SliderArr.length - 1)) : setx(x + 100)
    }
    const goRight = () => {
        x === -100 * (SliderArr.length - 1) ? setx(0) : setx(x - 100)
    }

    return (
        <div className="slider">
            {
                SliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                            {item}
                        </div>
                    )
                })
            }
            <button className="slide-arrow" id="arrow-left" onClick={goLeft}><FontAwesomeIcon icon="chevron-left" size="4x" /></button>
            <button className="slide-arrow" id="arrow-right" onClick={goRight}><FontAwesomeIcon icon="chevron-right" size="4x" /></button>
        </div>
    )
}
