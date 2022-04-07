

function NavBar() {
    return (
        <div>
            <h1>NavBar</h1>
                <></>
                <div className="authNav">
                    <a href='/watchables'>Watchables</a>
                    <br/>
                    <a href='/add'>Add</a>
                    <br/>
                    <a href='/edit'>Edit</a>
                    <br/>
                    <a href='/favorite'>Faves</a>
                </div>
                <div className="uberNav">
                    <a href='/login'>Login</a>
                    <br/>
                    <a href='/logout'>Logout</a>
                    <br/>
                    <a href='/signup'>Signup</a>
                </div>
        </div>
    )
}

export default NavBar;