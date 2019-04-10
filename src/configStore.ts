/**
 * Config redux store
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'
import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'

// Config redux devtool
// Redux does not provide types for __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Middlewares

const axiosClient = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	responseType: 'json',
})

const middlewares = [thunk, axiosMiddleware(axiosClient)]

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares)),
)

export { store }
