import '../styles/AccountPage.css';

function Account({ currentUser }) {
    // console.log(currentUser);

    function userName() {
        return currentUser.map((user) => {
            <>{`${user.username}`}</>
        })
    }
    return (
        <div className="account-page">
            <div className="page-title">My account</div>
            {userName}


        </div>
    )
}

export default Account;