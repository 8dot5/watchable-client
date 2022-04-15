import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import '../styles/LogoutPage.css'

function Logout({ setCurrentUser }) {
    const history = useHistory();

    useEffect(() => {
        fetch('https://watchables-api.herokuapp.com/logout', {
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
            {/* <div className='page-title'>
            </div> */}
            <div className='logout-grid'>
                <div className='spinner'>
                    <br/>
                    <br/>
                    <Spinner animation='border' role='status'>
                        <span className='visually-hidden'></span>
                    </Spinner>
                    <p className='child'>Logging you out...</p>
                </div>
            </div>

        </div>
    );
};

export default Logout;