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

// components
import CoreLayout from './shared/layout/CoreLayout'
import Home from './pages/home/Home'
import About from './pages/about/About'

// Constants
import { routerPath } from './constants'

class App extends React.Component {
	render() {
		return (
			<Router>
				<CoreLayout>
					<Switch>
						<Route exact path={routerPath.home} component={Home} />
						<Route path={routerPath.about} component={About} />
						<Redirect to={routerPath.home} />
					</Switch>
				</CoreLayout>
			</Router>
		)
	}
}

export default App
