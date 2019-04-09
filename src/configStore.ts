/**
 * Config redux store
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducer'
import thunk from 'redux-thunk'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

// Config redux devtool
// Redux does not provide types for __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const client = axios.create({
	//all axios can be used, shown in axios documentation
	baseURL: 'https://jsonplaceholder.typicode.com/',
	responseType: 'json',
})

const middlewares = [thunk, axiosMiddleware(client)]

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares)),
)

export { store }
