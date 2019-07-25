/**
 * Root reducer
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import {combineReducers} from 'redux'
import {History} from 'history'
import {connectRouter, RouterState} from 'connected-react-router'
import {PostsState, reducer as postsReducer} from './Posts'
import {PostState, reducer as postReducer} from './Post'
import {AppState, reducer as appReducer} from './App'

export interface RootState {
	posts: PostsState
	post: PostState
	app: AppState
	router: RouterState
}

const rootReducer = (history: History) =>
	combineReducers<RootState>({
		posts: postsReducer,
		post: postReducer,
		app: appReducer,
		router: connectRouter(history),
	})

export default rootReducer
