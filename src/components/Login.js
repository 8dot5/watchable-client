import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import '../styles/LoginPage.css'
import Errors from './Errors';

function Login({ handleLogin, errors }) {
    const history = useHistory();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
    e.preventDefault();

    // calling the BE
    fetch('https://watchables-api.herokuapp.com/login', {
    // fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then((res) => res.json())
        // then, doing FE things
        .then((data) => {
            // console.log(data, 'login data')
            handleLogin(data)
            history.push('/watchables-list')
        }, 1000);
    };

    let formData = {
        'username': username,
        'password': password
    }

    return (
        <div className='login-page'>
            <div className='page-title'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Log in to your Watchables Account!</legend>
                    <br/>
                    <br/>
                    <label style={{fontSize: '.75em'}}>Username
                    <br/>
                        <input onChange={(e) => setUsername(e.target.value)} className='input' id='username' type='text' name='username'/></label>
                    <br/>
                    <label style={{fontSize: '.75em'}}>Password
                    <br/>
                        <input onChange={(e) => setPassword(e.target.value)} className='input' type='password' name='password'/>
                    </label>
                    <br/>
                    <br/>
                    <Button disabled={!username || !password} variant='danger' className='login-submit-button' type='submit'>Submit</Button>

                </fieldset>
            </form>
            <br/>
            <hr></hr>
            <p style={{fontSize: '.75em'}}>New to Watchables? <a href='/signup'>Sign up now.</a></p>
            <Errors errors={errors} />
            </div>
        </div>
    );
};

export default Login;
