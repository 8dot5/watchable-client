import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Errors from './Errors'

import '../styles/SignupPage.css'

function Signup({ handleLogin, errors }) {
    const [state, setState] = useState({});
    const history = useHistory();

    function onChange(e) {
        setState({ ...state, [e.target.name]: e.target.value})
    };

    function handleSubmit(e) {
        e.preventDefault()

        // calling the BE
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        })
        .then(res => res.json())
        // then, doing FE things
        .then(data => {
            // console.log(data, 'signup data')
            handleLogin(data)
            history.push('/watchables-list')
        });
    };

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
                    <input id='submit' type='submit'></input>
                </fieldset>
            </form>
            </div>
            <Errors errors={errors} />
        </div>
    )
}

export default Signup;
