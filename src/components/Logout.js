
import { Spinner } from 'react-bootstrap'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import '../styles/LogoutPage.css'

const Logout = ({ setCurrentUser }) => {

    const history = useHistory();

    useEffect(() => {
        let config = {
            method: "DELETE",
        };

        fetch("/logout", config);
            handleLogout();
    });

    const handleLogout = () => {
        setCurrentUser(null);
        setTimeout(() => {
            history.push("/login");
        }, 2000);
    };

    return (
        <div className='logout-page'>
            <div className='spinner'>
                <br />
                <br />
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Good bye!</span>
                </Spinner>
            </div>
    </div>
    );
};

export default Logout;