import { Switch, Route, useHistory, BrowserRouter, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
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

	// Interstitial; helper points to handleState
	function handleLogin(data) {
		if(!data.errors) {
			handleState(data)
			setErrors([])
		} else {
			setErrors(data.errors)
		}
	}

	// Checking the session
	useEffect(() => {
		fetch('/me')
		.then(res => res.json())
		.then(data => {
			handleState(data)
			// fetching Categories from BE
			fetchCategories()
		})
	}, [])

	// Handles all state changes
	function handleState(data) {
		if(!data.errors ){
			// console.log(data.watchables)
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
		.then(res => res.json())
		.then(data => setCategories(data))
	}

	function filterFavorites(watchables) {
		return watchables.filter(watchable => {
			return watchable.favorite === true
		})
	}

	return (
		<BrowserRouter>
			<div className='App'>
				<NavBar currentUser={currentUser} />

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
						<WatchablesAdd currentUser={currentUser} categories={categories} setWatchables={setWatchables} errors={errors} watchables={watchables} />
					</Route>
					<Route exact path='/favorites'>
						<WatchablesFave
							currentUser={currentUser} favorites={favorites} watchables={watchables}
						/>
					</Route>

					<Route exact path='/edit'>
						<WatchablesEdit currentUser={currentUser} categories={categories} setWatchables={setWatchables} errors={errors} watchables={watchables} watchablesEdit={watchablesEdit} />
					</Route>
					{/* <Route exact path='/account'>
						<Account currentUser={currentUser} />
					</Route> */}
					<Route exact path='/'>
						<Static />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;