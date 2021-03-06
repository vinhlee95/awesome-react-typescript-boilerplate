import * as React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {RouterPath} from '../constants'

// Code splitting
const Home = React.lazy(() =>
	import(/* webpackChunkName: "Home" */ '../pages/Home/Home'),
)
const About = React.lazy(() =>
	import(/* webpackChunkName: "About" */ '../pages/About/About'),
)

const Router = () => {
	return (
		<Switch>
			<Route exact path={RouterPath.home} component={Home} />
			<Route path={RouterPath.about} component={About} />
			<Redirect to={RouterPath.home} />
		</Switch>
	)
}

export default Router
