/**
 * Root reducer
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import { combineReducers } from 'redux'
import posts from './posts'

export const rootReducer = combineReducers({
	posts,
})
