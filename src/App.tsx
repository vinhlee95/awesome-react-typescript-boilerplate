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
import CoreLayout from './shared/layout/CoreLayout/CoreLayout'
import Home from './pages/home/Home'
import About from './pages/about/About'

// Constants
import { RouterPath } from './constants'

class App extends React.Component {
	render() {
		return (
			<Router>
				<CoreLayout>
					<Switch>
						<Route exact path={RouterPath.home} component={Home} />
						<Route path={RouterPath.about} component={About} />
						<Redirect to={RouterPath.home} />
					</Switch>
				</CoreLayout>
			</Router>
		)
	}
}

export default App
