/**
 * Config redux store
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './modules/reducers'
import thunk from 'redux-thunk'
import axiosMiddleware from 'redux-axios-middleware'
import axios from './api/axious'

const isProduction = process.env.NODE_ENV === 'production'

// Config redux devtool in development

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const composeEnhancers =
	(!isProduction && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// Middlewares

const middlewares = [thunk, axiosMiddleware(axios)]

if (!isProduction) {
	// tslint:disable-next-line:no-var-requires
	const { createLogger } = require('redux-logger')
	const logger = createLogger()
	middlewares.push(logger)
}

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares)),
)

export { store }
