import React, { useState, useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import MiniSlider from '../Common/Slider__mini/Slider'
import PaginationPosts from './ProductPagination'
import BackBtn from '../Common/BackBtn'
import { useStateValue } from '../../context/StateProvider'

export default function ProductsPage() {
    const { products } = useStateValue();

    const { cateValue, searchvalue } = useParams();

    let prod = [...products];

    if (cateValue)
        prod = products.filter(x => x.category === cateValue)
    else if (searchvalue)
        prod = products.filter(x => {
            let searchlower = searchvalue.toLowerCase();
            const lowertitle = x.title.toLowerCase();
            const catlow = x.category.toLowerCase();
            return (lowertitle.includes(searchlower) || catlow.includes(searchlower))
        })
    const sortData = {
        lowtohigh: "LOW_TO_HIGH",
        hightolow: "HIGH_TO_LOW",
        featured: "FEATURED",
    }
    const [sortedProducts, setProducts] = useState(prod)

    const [sortValue, setSort] = useState(sortData.featured)


    useEffect(() => {
        const sortProducts = () => {
            if (sortValue === sortData.lowtohigh)
                setProducts(prod.sort((a, b) => a.price - b.price))
            else if (sortValue === sortData.hightolow)
                setProducts(prod.sort((a, b) => b.price - a.price))
            else
                setProducts(prod)
        }
        sortProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortValue, cateValue, searchvalue])

    const category = products.map(item => item.category)
        .filter((value, index, self) => self.indexOf(value) === index)

    const handleSortBy = (e) => {
        setSort(e.target.value)
    }

    return (
        <>
            <BackBtn />

            <div className="pagebody">
                <h1 className="pagebody__top">
                    <div className="top__container">
                        <span className="top__resultText">Over {prod.length} results {searchvalue && "for"}  <b>{searchvalue && `${searchvalue}`}</b></span>
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
                                {category.map((cat, index) => <li key={index}><Link to={`/products/${cat}`}>{cat}</Link></li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <PaginationPosts products={sortedProducts} />
            </div>
            <div className="bottom__slider">
                {
                    useMemo(() =>
                        <MiniSlider categoryName="Other Items" cateValue="" categoryLink="#" data={products} />
                        , [products])
                }
            </div>
        </>
    )
}
