/**
 * Config redux store
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducer'
const { createLogger } = require('redux-logger')
import thunk from 'redux-thunk'

// Config redux devtool
// Redux does not provide types for __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const composeEnhancers =
	(process.env.NODE_ENV !== 'production' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose

// Config redux-logger in development
let logger
if (process.env.NODE_ENV === `development`) {
	logger = createLogger()
}

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk, logger)),
)

export { store }
