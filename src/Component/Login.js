import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BackBtn from './Common/BackBtn'

export default function Login() {
    const [input, setInput] = useState({
        username: "",
        password: ""
    })

    const HandleText = (e) => {
        const newinput = e.target.value
        setInput({ ...input, [e.target.name]: newinput })
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
    }
    const register = e => {
        e.preventDefault();
    }
    return (
        <>
            <BackBtn />
            <div className="login__body">
                <div className="login__logo">
                    <Link to="/">
                        <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt="" />
                    </Link>
                </div>
                <div className="login__content">
                    <h1>Sign-In</h1>
                    <div className="input__block username__block">
                        <label for="username">Username</label>
                        <input id="username" name="username" type="text" onChange={HandleText} value={input.username} />
                    </div>
                    <div className="input__block password__block">
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password" onChange={HandleText} value={input.password} />
                    </div>
                    <div className="input__block sign__in">
                        <button onClick={HandleSubmit}>Sign-in</button>
                    </div>
                    <div className="input__block register">
                        <button onClick={HandleSubmit}>Create your amazon account</button>
                    </div>
                </div>
            </div>
        </>
    )
}
