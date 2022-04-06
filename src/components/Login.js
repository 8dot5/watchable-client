import { useState } from 'react';
import Errors from './Errors';

function Login({ handleLogin, errors }) {

    const [userState, setUserState] = useState({})

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userState)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data, 'login fetch')
            handleLogin(data)
        })
    }

    const onChange = (e) => {
        setUserState({ ...userState, [e.target.name]:e.target.value })
    }

    return (
        <div className="signupLoginForm">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Watchables Account Login</legend>
                    <br/>
                    <label>Username<br/>
                        <input onChange={onChange} type='text' name='username'/>
                    </label><br/>
                    <label>Password<br/>
                        <input onChange={onChange} type='password' name='password'/>
                    </label><br/>
                    <input type='submit' value='Login'></input>
                    <br/>
                    <p>Don't have an account? <a href='/signup'>Signup</a></p>
                </fieldset>
            </form>
            <Errors errors={errors} />
        </div>
    )
}

export default Login;