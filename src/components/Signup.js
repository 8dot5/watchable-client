import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Errors from './Errors'

import Button from 'react-bootstrap/Button'
import '../styles/SignupPage.css'

function Signup({ handleLogin, errors }) {
    // const [state, setState] = useState({});
    const history = useHistory();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        switch (true) {
            case (formData.username.length <3):
                alert('Need a longer username');
                break;
            case (formData.email.length <3):
                alert('Need a longer email')
                break;
            case (formData.password.length <3):
                alert('Enter a longer password')
                break;
            //TODO fix this
            // case(!formData.password_confirmation === formData.password):
            //     alert('Password does not match!')
            //     break;
            default:

        // calling the BE
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        // then, doing FE things
        .then(data => {
            // console.log(data, 'signup data')
            handleLogin(data)
            history.push('/watchables-list')
        })}
    };

    let formData = {
        'username': username,
        'email': email,
        'password': password,
        'password_confirmation': passwordConfirmation
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Sign up for a new Watchables Account!</legend>
                <br/>
                <br/>
                <label>Username
                    <br/>
                    <input onChange={(e) => setUsername(e.target.value)} className='input' id='username' type='text' name='username'/>
                </label>
                <br/>
                <br/>
                <label>Email
                <br/>
                    <input onChange={(e) => setEmail(e.target.value)}  className='input' type='text' name='email'/>
                </label>
                <br/>
                <label>Password
                <br/>
                    <input onChange={(e) => setPassword(e.target.value)}  className='input' type='password' name='password'/>
                </label>

                <br/>
                <label>Confirm password
                <br/>
                    <input onChange={(e) => setPasswordConfirmation(e.target.value)}  className='input' type='password' name='password_confirmation'/>
                </label>
                <br/>
                <br/>

                <Button disabled={!username || !email || !password || !passwordConfirmation} variant='danger' className='login-submit-button' type='submit'>Submit</Button>
            </fieldset>
        </form>
    )

    return (
        <div className='signup-page'>
            <div className="page-title">
            {form}
            </div>
            <Errors errors={errors} />
        </div>
    )
}

export default Signup;
