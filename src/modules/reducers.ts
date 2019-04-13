/**
 * Root reducer
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import { combineReducers } from 'redux'
import { reducer as postsReducer } from './posts'
import { reducer as postReducer } from './post'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history: History) =>
	combineReducers({
		posts: postsReducer,
		post: postReducer,
		router: connectRouter(history),
	})
export default rootReducer
