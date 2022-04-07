import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

function Logout({ setCurrentUser }) {

    const history = useHistory();

    useEffect(() => {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(() => {
            console.log('logging out')
            setCurrentUser(null)
            // setTimeout(() => {
            //     history.push('/login')
            // }, 2000)
        })
    })

    return (
        <div>
            <h1>Logout</h1>
            <p>Logging out...</p>
        </div>

    )
}

export default Logout;