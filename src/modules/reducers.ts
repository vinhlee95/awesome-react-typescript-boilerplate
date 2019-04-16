/**
 * Root reducer
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import {combineReducers} from 'redux'
import {History} from 'history'
import {connectRouter} from 'connected-react-router'
import {reducer as postsReducer} from './posts'
import {reducer as postReducer} from './post'
import {reducer as appReducer} from './app'

const rootReducer = (history: History) =>
	combineReducers({
		posts: postsReducer,
		post: postReducer,
		app: appReducer,
		router: connectRouter(history),
	})
export default rootReducer
