/**
 * Root reducer
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import {combineReducers} from 'redux'
import {History} from 'history'
import {connectRouter} from 'connected-react-router'
import {reducer as postsReducer} from './Posts'
import {reducer as postReducer} from './Post'
import {reducer as appReducer} from './App'
import {reducer as errorReducer} from './ModuleError'
import {reducer as loadingReducer} from './ModuleLoading'
import ModuleName from './commons/ModuleName'

const rootReducer = (history: History) =>
	combineReducers({
		[ModuleName.posts]: postsReducer,
		[ModuleName.post]: postReducer,
		error: errorReducer,
		loading: loadingReducer,
		app: appReducer,
		router: connectRouter(history),
	})
export default rootReducer

// ------------------------------------
// Selector
// ------------------------------------

export const getErrorSelector = (state, moduleName: ModuleName) => {
	return state.error[moduleName]
}

export const getLoadingSelector = (state, moduleName: ModuleName) => {
	return state.loading[moduleName]
}

export const getListDataSelector = (state, moduleName: ModuleName) => {
	return state[moduleName].allIds.map(id => {
		return state[moduleName].byIds[id]
	})
}

export const getDataSelector = (state, moduleName: ModuleName) => {
	const {id} = state[moduleName]
	return state[moduleName].byId[id]
}
