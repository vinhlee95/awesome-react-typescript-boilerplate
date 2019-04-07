/**
 * Client root component
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import Nav from './shared/components/Nav'

// Constants
import { ROUTER_PATH } from './constants'

// Define app's paths
const homePath: string = ROUTER_PATH.home
const aboutPath: string = ROUTER_PATH.about

class App extends React.Component {
	render() {
		return (
			<Router>
				<Nav homePath={homePath} aboutPath={aboutPath} />
				<Switch>
					<Route exact path={homePath} render={() => <h1>Home</h1>} />
					<Route path={aboutPath} render={() => <h1>About</h1>} />
				</Switch>
			</Router>
		)
	}
}

export default App
