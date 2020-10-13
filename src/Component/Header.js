import React, { useState, useMemo } from 'react'
import { Link, withRouter } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import Cart from './Common/Cart'
import { useStateValue } from '../context/StateProvider'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Header = ({ history }) => {
    const [isOpenCart, setOpenCart] = useState(true);
    const [searchInput, setSearchInput] = useState("");
    const { cart } = useStateValue();
    const handleChange = e => {
        console.log(e.target.value)
        setSearchInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!searchInput) return;
        history.push(`/products/search/${searchInput}`)
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo"
                    src="/amazonlogo.png"
                    alt=""
                />
            </Link>
            <form className="header__search" onSubmit={handleSubmit}>
                <input type="text" className="header__searchInput"
                    value={searchInput}
                    onChange={handleChange}
                />
                <Button type="submit" className="header__searchButton">
                    <SearchIcon className="header__searchIcon" onClick={handleSubmit} />
                </Button>
            </form>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Hello login,</span>
                        <span className="header__optionLine2">Sign In</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Returns</span>
                        <span className="header__optionLine2">& Orders</span>
                    </div>
                </Link>
                <div className="header__link header__cart">
                    <div className="header_option header__optionBasket" onClick={() => setOpenCart(prev => {
                        let last = prev;
                        return !last;
                    })}>
                        <ShoppingCartIcon className="header__basketIcon" />
                        <span className="header__optionLine2 header__optionLine2Cart ">Cart</span>
                        <span className="header__basketCount">{cart.length}</span>
                    </div>
                    {useMemo(() => <Cart isOpenCart={isOpenCart} cart={cart} />, [isOpenCart, cart])}

                </div>

            </div>
        </div>
    )
}
export default withRouter(Header)