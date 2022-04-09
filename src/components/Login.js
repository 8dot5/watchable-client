import { useState } from 'react'
import Errors from "./Errors";

import '../styles/LoginPage.css'

const Login = ({ handleLogin, errors }) => {
    const [state, setState] = useState({});

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    let config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
    };

    // calling the BE
    fetch("/login", config)
        .then((res) => res.json())
        .then((data) => {
            console.log(data, 'login data')
            handleLogin(data)
        });
    };

    return (
        <div className='login-page'>
            <div className='page-title'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Log into your Watchables Account!</legend>
                    <br/>
                    <label>Username
                    <br/>
                        <input onChange={onChange} className='input' id='username' type='text' name='username'/></label>
                    <br/>
                    <label>Password
                    <br/>
                        <input onChange={onChange} className='input' type='password' name='password'/>
                    </label>
                    <br/>
                    <br/>
                    <input id='submit' type="submit"></input>
                </fieldset>
            </form>
            <br/>
            <p>Join the Watchables Pack! <a href='/signup'>Sign up</a></p>
            <Errors errors={errors} />
            </div>
        </div>
    );
};

export default Login;
