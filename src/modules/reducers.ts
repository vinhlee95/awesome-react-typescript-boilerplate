/**
 * Root reducer
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import { combineReducers } from 'redux'
import { reducer as postsReducer } from './posts'
import { reducer as postReducer } from './post'

export const rootReducer = combineReducers({
	posts: postsReducer,
	post: postReducer,
})
