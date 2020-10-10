import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className="footer">
            <div className="backtotop">
                <button onClick={scrollTop} >Back to top</button>
            </div>
            <div className="footer__content">
                <div className="footer__col">
                    <h3 className="col__head">Get to know us</h3>
                    <ul>
                        <li>Hellow</li>
                        <li>This is fake</li>
                        <li>ye</li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h3 className="col__head">Make Money with Us</h3>
                    <ul>
                        <li>Hellow</li>
                        <li>This is fake</li>
                        <li>ye</li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h3 className="col__head">This is fine</h3>
                    <ul>
                        <li>Hellow</li>
                        <li>This is fake</li>
                        <li>ye</li>
                    </ul>
                </div>
            </div>
            <div className="bottomLogo">
                <Link to="/">
                    <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt="" />
                </Link>
            </div>
        </div>
    )
}
