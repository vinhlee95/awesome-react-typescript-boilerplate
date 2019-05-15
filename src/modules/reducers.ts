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

const rootReducer = (history: History) =>
	combineReducers({
		posts: postsReducer,
		post: postReducer,
		app: appReducer,
		router: connectRouter(history),
	})

export default rootReducer
