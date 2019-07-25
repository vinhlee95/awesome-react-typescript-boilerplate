/**
 * Config redux store
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import {createStore, applyMiddleware, compose, Action} from 'redux'
import createRootReducer, {RootState} from './modules/reducers'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'

import i18n from './services/i18n'

import {createEpicMiddleware} from 'redux-observable'
import {createRootEpic} from './modules/epics'

const history = createBrowserHistory()

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const configureStore = (preloadedState?: any, dependencies = {}) => {
	const isDevelopment = process.env.NODE_ENV === 'development'

	// Config redux devtool in development

	const composeEnhancers =
		(isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

	// Middlewares

	const epicMiddleware = createEpicMiddleware<Action, Action, RootState>({
		dependencies: {
			i18n,
			...dependencies,
		},
	})

	const middlewares = [epicMiddleware, routerMiddleware(history)]

	if (isDevelopment) {
		// tslint:disable-next-line:no-var-requires
		const {createLogger} = require('redux-logger')
		const logger = createLogger()
		middlewares.push(logger)
	}

	const store = createStore(
		createRootReducer(history),
		preloadedState,
		composeEnhancers(applyMiddleware(...middlewares)),
	)

	const rootEpic = createRootEpic()

	epicMiddleware.run(rootEpic)

	return store
}

export {configureStore, history}
