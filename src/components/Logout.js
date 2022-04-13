import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import '../styles/LogoutPage.css'

function Logout({ setCurrentUser }) {

    const history = useHistory();

    useEffect(() => {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(() => {
            handleLogout();
        })
    });

    function handleLogout() {
        setCurrentUser(null);
        setTimeout(() => {
            history.push('/login');
        }, 1000);
    };

    return (
        <div className='logout-page'>
            {/* <div className='page-title'> */}
            <div className='spinner'>
                <br/>
                <br/>
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'></span>
                </Spinner>
                <h2>Logging you out</h2>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Logout;