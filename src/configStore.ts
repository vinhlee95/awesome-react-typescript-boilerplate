/**
 * Config redux store
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducer'
import thunk from 'redux-thunk'

// Config redux devtool
// Redux does not provide types for __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const isProduction = process.env.NODE_ENV === 'production'
// Config redux devtool in development
const composeEnhancers =
	(!isProduction && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// Config redux-logger in development
const middleware = [thunk]
if (!isProduction) {
	// tslint:disable-next-line:no-var-requires
	const { createLogger } = require('redux-logger')
	const logger = createLogger()
	middleware.push(logger)
}

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middleware)),
)

export { store }
