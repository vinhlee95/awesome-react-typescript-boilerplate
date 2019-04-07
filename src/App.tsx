/**
 * Client root component
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import * as React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'

// Components
import Nav from './shared/components/Nav'

// Constants
import { routerPath } from './constants'

class App extends React.Component {
	render() {
		return (
			<Router>
				<Nav />
				<Switch>
					<Route exact path={routerPath.home} render={() => <h1>Home</h1>} />
					<Route path={routerPath.about} render={() => <h1>About</h1>} />
					<Redirect to={routerPath.home} />
				</Switch>
			</Router>
		)
	}
}

export default App
