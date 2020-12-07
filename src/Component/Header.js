import React, { useState, useMemo, useRef, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Cart from './Common/Cart'
import { useStateValue } from '../context/StateProvider'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { auth } from '../firebase';

const Header = ({ history }) => {
    const [isOpenCart, setOpenCart] = useState(true);
    const searchInput = useRef();
    const ref = useRef();
    const { cart, user, } = useStateValue();

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setOpenCart(true);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if (!searchInput.current.value) return;
        history.push(`/products/search/${searchInput.current.value}`)
    }
    const handleLogOut = () => {
        if (user) {
            auth.signOut().then(auth => {
                if (!auth)
                    history.push('/login')
            }
            );
        }
    }

    let userName = "";
    if (user) {
        userName = user.email.split('@')[0];
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
                <input ref={searchInput} type="text" className="header__searchInput" />
                <Button type="submit" className="header__searchButton">
                    <SearchIcon className="header__searchIcon" onClick={handleSubmit} />
                </Button>
            </form>
            <div className="header__nav">
                <Link to={!user ? "/login" : ""} className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">{user ? `Hello ,${userName}` : "Hello Guest,"}</span>
                        <span className="header__optionLine2" onClick={handleLogOut}>{user ? "Sign out" : "Sign In"}</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Returns</span>
                        <span className="header__optionLine2">& Orders</span>
                    </div>
                </Link>
                <div className="header__link header__cart" ref={ref}>
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