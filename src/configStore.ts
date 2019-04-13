/**
 * Config redux store
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import { createStore, applyMiddleware, compose } from 'redux'
import createRootReducer from './modules/reducers'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import axiosMiddleware from 'redux-axios-middleware'
import { routerMiddleware } from 'connected-react-router'
import axios from './api/axios'

export const history = createBrowserHistory()

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const configureStore = (preloadedState?: any) => {
	const isProduction = process.env.NODE_ENV === 'production'

	// Config redux devtool in development

	const composeEnhancers =
		(!isProduction && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

	// Middlewares

	const middlewares = [thunk, axiosMiddleware(axios)]

	if (!isProduction) {
		// tslint:disable-next-line:no-var-requires
		const { createLogger } = require('redux-logger')
		const logger = createLogger()
		middlewares.push(logger)

		middlewares.push(routerMiddleware(history))
	}

	const store = createStore(
		createRootReducer(history),
		preloadedState,
		composeEnhancers(applyMiddleware(...middlewares)),
	)

	return store
}

export default configureStore
