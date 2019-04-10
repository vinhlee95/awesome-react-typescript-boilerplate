/**
 * Root reducer
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import { combineReducers } from 'redux'
import { reducer as postsReducer } from '../modules/posts'
import { reducer as postReducer } from '../modules/post'

export const rootReducer = combineReducers({
	posts: postsReducer,
	post: postReducer,
})
