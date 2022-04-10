import { Switch, Route, useHistory, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

import NavBar from './components/NavBar.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import WatchablesList from './components/WatchablesList.js';
import WatchablesAdd from './components/WatchablesAdd.js';
import WatchablesEdit from './components/WatchablesEdit.js';
import WatchablesFave from './components/WatchablesFave.js';

import Static from './components/Static.js';
import Account from './components/Account.js';

import './App.css';

function App() {

	const [errors, setErrors] = useState([])

	const [currentUser, setCurrentUser] = useState(null)

	const [watchables, setWatchables] = useState([])
	const [watchablesEdit, setWatchablesEdit] = useState({})

	const [categories, setCategories] = useState([])
	const [userCategories, setUserCategories] = useState([])

	const [favorites, setFavorites] = useState([])

	const history = useHistory();

	// Handles FE user login (from login.js)
	const handleLogin = (data) => {
		data.errors ? setErrors(data.errors) : handleState(data)
		if(!data.errors) {
			setErrors([])
		}
	}

	// Checking the session
	useEffect(() => {
		fetch('/me')
		.then(resp => resp.json())
		.then(data => {
			handleState(data)
			// fetching Categories from BE
			fetchCategories()
		})
	}, [])

	// Handles all state changes
	function handleState(data) {
		if(!data.errors){
			setCurrentUser(data)
			setWatchables(data.watchables)
			setUserCategories(data.categories)
			setFavorites(filterFavorites(data.watchables))
		} else {
			setWatchables([])
			setFavorites([])
		}
	}

	function fetchCategories() {
		fetch('/categories')
		.then(resp => resp.json())
		.then(data => setCategories(data))
	}

	function filterFavorites(watchables) {
		return watchables.filter(watchable => {
			return watchables.favorite == true
		})
	}

	return (
		<BrowserRouter>
			<NavBar currentUser={currentUser} />

			<div className='App'>
				<Switch>
					<Route exact path='/signup'>
						<Signup handleLogin={handleLogin} errors={errors} />
					</Route>
					<Route exact path='/login'>
						<Login handleLogin={handleLogin} errors={errors} />
					</Route>
					<Route exact path='/logout'>
						<Logout setCurrentUser={setCurrentUser} />
					</Route>
					<Route exact path='/watchables-list'>
						<WatchablesList currentUser={currentUser} userCategories={userCategories} watchables={watchables} setWatchables={setWatchables} setWatchablesEdit={setWatchablesEdit} favorites={favorites} setFavorites={setFavorites}/>
					</Route>
					<Route exact path='/add'>
						<WatchablesAdd categories={categories} setWatchables={setWatchables} errors={errors} watchables={watchables}/>
					</Route>
					<Route exact path='/favorites'>
						<WatchablesFave
							errors={errors} watchables={watchables}
							favorites={favorites} setWatchablesEdit={setWatchablesEdit}
						/>
						{/*setFavorites={setFavorites} */}
					</Route>

					<Route exact path='/edit'>
						<WatchablesEdit categories={categories} setWatchables={setWatchables} errors={errors} watchables={watchables} watchablesEdit={watchablesEdit} />
					</Route>
					<Route exact path='/account'>
						<Account />
					</Route>
					<Route exact path='/'>
						<Static />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;