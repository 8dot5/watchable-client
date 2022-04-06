import { useState } from 'react';

function Signup() {

    const [userState, setUserState] = useState({})
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
    }

    const onChange = (e) => {
        setUserState({ ...userState, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <br/>
            <form>
                {/* <h1>Sign up</h1>
                <label>Username
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value) } />
                </label>
                <label>Password
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value) } />
                </label> */}

                <fieldset>
                    <legend>Account signup</legend>
                    <br/>
                    <label>Username<br/>
                        <input onChange={onChange} type='text' name='username'/></label><br/>
                    <label>Password<br/>

                    </label><br/>
                    <label>Confirm password<br/>

                    </label><br/>

                </fieldset>


            </form>
        </div>
    )
}

export default Signup;