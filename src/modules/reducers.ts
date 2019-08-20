/**
 * Root reducer
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import {combineReducers} from 'redux'
import {History} from 'history'
import {connectRouter, RouterState} from 'connected-react-router'
import {postsReducer} from './Posts'
import {postReducer} from './Post'
import {appReducer} from './App'
import ModelState from '../models/bases/ModelState'
import Post from '../models/Post'
import App from '../models/App'

interface RootReducer {
	posts: ModelState<Post[]>
	post: ModelState<Post>
	app: App
	router: RouterState
}

const rootReducer = (history: History) =>
	combineReducers<RootReducer>({
		posts: postsReducer,
		post: postReducer,
		app: appReducer,
		router: connectRouter(history),
	})

export default rootReducer
