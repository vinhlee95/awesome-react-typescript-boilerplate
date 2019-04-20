/**
 * Client root component
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import * as React from 'react'
import {useEffect} from 'react'
import {hot} from 'react-hot-loader/root'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import {initialize, tearDown} from './modules/App'

// Components
import CoreLayout from './shared/layout/CoreLayout/CoreLayout'
import ErrorBoundaries from './shared/components/ErrorBoundaries/ErrorBoundaries'

// Code splitting
const Home = React.lazy(() =>
	import(/* webpackChunkName: "Home" */ './pages/Home/Home'),
)
const About = React.lazy(() =>
	import(/* webpackChunkName: "About" */ './pages/About/About'),
)

// Constants
import {RouterPath} from './constants'

interface Props {
	initialize: () => any
	tearDown: () => any
}

const App: React.FunctionComponent<Props> = ({initialize, tearDown}) => {
	useEffect(() => {
		initialize()

		return () => tearDown()
	}, [])

	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<ErrorBoundaries>
				<CoreLayout>
					<Switch>
						<Route exact path={RouterPath.home} component={Home} />
						<Route path={RouterPath.about} component={About} />
						<Redirect to={RouterPath.home} />
					</Switch>
				</CoreLayout>
			</ErrorBoundaries>
		</React.Suspense>
	)
}

const mapDispatchToProps = {
	initialize,
	tearDown,
}

export default hot(
	connect(
		null,
		mapDispatchToProps,
	)(App),
)
