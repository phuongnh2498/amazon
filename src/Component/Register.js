import React, { useState } from 'react'
import { auth } from '../firebase'
import { Link, useHistory } from 'react-router-dom'
import BackBtn from './Common/BackBtn'

export default function Register(props) {
    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';
    const history = useHistory();

    const [errormsg, setErrormsg] = useState("");
    const [input, setInput] = useState({
        username: "",
        password: "",
        repassword: ""
    })

    const HandleText = (e) => {
        const newinput = e.target.value
        setInput({ ...input, [e.target.name]: newinput })
    }

    const HandleRegister = (e) => {
        e.preventDefault();
        if (input.password !== input.repassword) {
            setErrormsg("2 password must be the same")
            return;
        }
        auth.createUserWithEmailAndPassword(input.username, input.password)
            .then(auth => {
                if (auth)
                    history.push(redirect);
                else
                    setErrormsg("some thing not right")

            }
            ).catch(error => {
                setErrormsg(error + "")
            })
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
                    <h1>Sign-up</h1>
                    {errormsg && <span className="errormsg">{errormsg}</span>}
                    <div className="input__block username__block">
                        <label htmlFor="username">Username</label>
                        <input id="username" name="username" type="text" onChange={HandleText} value={input.username} />
                    </div>
                    <div className="input__block password__block">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" onChange={HandleText} value={input.password} />
                    </div>
                    <div className="input__block password__block">
                        <label htmlFor="password">Enter Password Again</label>
                        <input id="re-password" name="repassword" type="password" onChange={HandleText} value={input.repassword} />
                    </div>
                    <div className="input__block sign__in">
                        <button onClick={HandleRegister} type="submit">Create account</button>
                    </div>
                </div>
            </div>
        </>
    )
}
