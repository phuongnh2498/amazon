import React from 'react'

export default function CategoryCard({categoryTitle,categoryImg,categoryLink}) {
    return (
        <div className="sectionContainer__card">
            <h2 className="card__title">{categoryTitle}</h2>
            <div className="card__content">
                <img className="card__image" src={categoryImg} alt={categoryTitle}/>
            </div>
            <a href={categoryLink} className="card__link">{Math.random() >= 0.5 ? "See more" : "Shop now"}</a>
        </div>
    )
}
