/**
 * Root reducer
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import { combineReducers } from 'redux'
import posts from './posts'
import post from './post'

export const rootReducer = combineReducers({
	posts,
	post,
})
