import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import Cart from './Cart'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
export default function Header() {
    const [isOpenCart,setOpenCart] = useState(true);


    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo"
                src="/amazonlogo.png"
                alt=""
            />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Hello login,</span>
                        <span className="header__optionLine2">Sign In</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Returns</span>
                        <span className="header__optionLine2">& Orders</span>
                    </div>
                </Link>
                <div className="header__link header__cart">
                        <div className="header_option header__optionBasket" onClick={()=>setOpenCart(prev=>{
                            let last = prev;
                            return !last;
                        })}>
                            <ShoppingCartIcon className="header__basketIcon"/>
                            <span className="header__optionLine2 header__optionLine2Cart ">Cart</span>
                            <span className="header__basketCount">0</span>
                        </div>
                    <Cart isOpenCart={isOpenCart}/>
                </div>

            </div>
        </div>
    )
}
