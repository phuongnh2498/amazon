import React,{useState,useMemo}  from 'react'
import {Pagination} from 'antd'
import ProductCard from './ProductCard'

export default function ProductPagination({products}) {
    const [pagesize,setPagesize] = useState(12)
    const [current,setCurrent] = useState(1)
    const scrollTop = () =>{
        window.scrollTo({ top: 0, behavior: 'smooth'});
     };
    const PaginationPosts = useMemo(()=>{
        scrollTop();
        const lastIndex = current * pagesize;
        const firstIndex = lastIndex - pagesize;
         return products.slice(firstIndex,lastIndex);
         
    },[current,pagesize,products]);

    return (
        <>
          <div className="pagebody__content">
                {PaginationPosts.map(product=><ProductCard 
                key ={product.id} 
                product={product}/>)}
            </div>
            <div className="paging">
                <Pagination 
                    simple
                    defaultCurrent={current}
                    onChange = {setCurrent}
                    onShowSizeChange={setPagesize}
                    total={products.length}
                    showSizeChanger
                    />
            </div>  
        </>
    )
}
