/**
 * Client root component
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import * as React from 'react'
import { hot } from 'react-hot-loader/root'

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'

// Components
import CoreLayout from './shared/layout/CoreLayout/CoreLayout'

// Code splitting
const Home = React.lazy(() => import('./pages/Home/Home'))
const About = React.lazy(() => import('./pages/About/About'))

// Constants
import { RouterPath } from './constants'

class App extends React.Component {
	render() {
		return (
			<React.Suspense fallback={<div>Loading...</div>}>
				<Router>
					<CoreLayout>
						<Switch>
							<Route exact path={RouterPath.home} component={Home} />
							<Route path={RouterPath.about} component={About} />
							<Redirect to={RouterPath.home} />
						</Switch>
					</CoreLayout>
				</Router>
			</React.Suspense>
		)
	}
}

export default hot(App)
