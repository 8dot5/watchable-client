import { useState } from 'react';
import Errors from './Errors';

function Signup({ handleLogin, errors }) {

    const [userState, setUserState] = useState({})

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userState)
        })
        .then(res => res.json())
        .then(json => {
            handleLogin(json)
        })
    }

    const onChange = (e) => {
        setUserState({ ...userState, [e.target.name]:e.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Watchables Account Signup</legend>
                    <br/>
                    <label>Email<br/>
                        <input onChange={onChange} type='text' name='email'/>
                    </label><br/>
                    <label>Username<br/>
                        <input onChange={onChange} type='text' name='username'/>
                    </label><br/>
                    <label>Password<br/>
                        <input onChange={onChange} type="password" name='password'/>
                    </label><br/>
                    <label>Confirm password<br/>
                        <input onChange={onChange} type="password" name='password_confirmation'/>
                    </label><br/>
                    <input type='submit' value="Signup!"></input>
                    <br/>
                </fieldset>
            </form>
            <Errors errors={errors} />
        </div>
    )
}

export default Signup;