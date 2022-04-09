import React from 'react'
import { useState } from 'react'
import Errors from './Errors'

import '../styles/SignupPage.css'

const Signup = ({ handleLogin, errors }) => {

    const [state, setState] = useState({})

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('/users', config)
            .then(resp => resp.json())
            .then(data => {
                handleLogin(data)})
    }

    return (
        <div className='signup-page'>
            <div className="page-title">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Sign up for a new Watchables Account!</legend>
                    <br/>
                    <label>Username
                        <br/>
                        <input onChange={onChange} className='input' id='username' type='text' name='username'/>
                    </label>
                    <br/>
                    <br/>
                    <label>Email
                    <br/>
                        <input onChange={onChange} className='input' type='text' name='email'/>
                    </label>
                    <br/>
                    <label>Password
                    <br/>
                        <input onChange={onChange} className='input' type='password' name='password'/>
                    </label>

                    <br/>
                    <label>Confirm password
                    <br/>
                        <input onChange={onChange} className='input' type='password' name='password_confirmation'/>
                    </label>
                    <br/>
                    <br/>
                    <input id='submit' type="submit"></input>
                </fieldset>
            </form>
            </div>
            <Errors errors={errors} />
        </div>
    )
}

export default Signup
