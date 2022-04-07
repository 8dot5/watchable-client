// Test rails connection and routes
// browser: localhost:4000 and /testing
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

/* MVP
import NavBar from '
account signup
login
logout
watchables list
add watchable
edit watchable
favorites
*/

import NavBar from './components/NavBar.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import WatchablesList from './components/WatchablesList.js';
import WatchablesAdd from './components/WatchablesAdd.js';
import WatchablesEdit from './components/WatchablesEdit.js';
import WatchablesFave from './components/WatchablesFave.js';

function App() {
  const [errors, setErrors] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory();

  function handleLogin(data) {
    console.log('handleLogin')
    data.errors ? setErrors(data.errors) : handleState(data)
    if(!data.errors) {
      history.push('/watchables')
      setErrors([])
    }
  }

  function handleState(data) {
    if(!data.errors) {
      setCurrentUser(data)
    }
  }



  //this exists to verify that the BE connectivity works properly
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello") //this works if localhost:3000 is added to the package.json
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />

      <div className="App">
        <Switch>

          <Route exact path="/test">
            <h1>Testing the backend connection | Page Count: {count}</h1>
          </Route>

          <Route path="/signup">
            <Signup handleLogin={handleLogin} errors={errors} />
          </Route>

          <Route path="/login">
            <Login handleLogin={handleLogin} errors={errors} />
          </Route>

          <Route path="/logout">
            <Logout setCurrentUser={setCurrentUser} />
          </Route>

          <Route path="/watchables">
            <WatchablesList />
          </Route>

          <Route path="/add">
            <h1>Add a Watchable</h1>
          </Route>

          <Route path="/edit">
            <h1>Edit a Watchable</h1>
          </Route>

          <Route path="/favorite">
            <h1>Favorite a Watchable</h1>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;