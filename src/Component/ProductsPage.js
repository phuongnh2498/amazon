import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import ProductCard from './ProductPage/ProductCard'
import {products} from '../mockData'
import MiniSlider from './Slider__mini/Slider'
export default function ProductsPage() {

    const prod = [...products];

    const sortData = {
        lowtohigh:"lowtohigh",
        hightolow:"hightolow",
        featured:"featured",
    }
    const [newproducts, setProducts] = useState(prod)

    const [sortValue, setSort] = useState("featured")

    useEffect(()=>{

        if(sortValue===sortData.lowtohigh)
            setProducts(prod.sort((a,b)=>a.price-b.price))
        else if(sortValue===sortData.hightolow)
            setProducts(prod.sort((a,b)=>b.price-a.price))
        else
         setProducts(prod)

        console.log(prod)
    },[sortValue])

    const category = products.map(item => item.category)
    .filter((value, index, self) => self.indexOf(value) === index)

     const handleSortBy = (e) => {

         setSort(e.target.value)

    }
    return (
        <>
        <div className="pagebody">
                <h1 className="pagebody__top">
                    <div className="top__container">
                        <span className="top__resultText">Over 60,000 results for <b>Dog Toys</b></span>
                        <div className="top__sortby">
                            <span className="top__sortbytext">Sort by </span>
                            <select value={sortValue} onChange={handleSortBy} className="top__sortby__selection">
                                <option value={sortData.featured}>Featured</option>
                                <option value={sortData.lowtohigh}>Price:low to high</option>
                                <option value={sortData.hightolow}>Price:high to low</option>
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
                {newproducts.map(product=><ProductCard key ={product.id} product={product}/>)}
            </div>
        </div>
                    <div className="bottom__slider">
            <MiniSlider categoryName="Other Items" cateValue="" categoryLink="#" data={products}/>
            </div>
            </>
    )
}
