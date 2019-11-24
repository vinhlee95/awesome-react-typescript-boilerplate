import produce from 'immer'
import {getType} from 'typesafe-actions'
import {createAsyncAction, isActionOf} from 'typesafe-actions'
import {Action} from 'redux'
import {RootState} from './reducers'
import {startFetching, endWithError, updateData} from './commons/common'
import {Epic} from 'redux-observable'
import {catchError, filter, map, switchMap, takeUntil} from 'rxjs/operators'

import Post from '../models/Post'
import ModelState from '../models/bases/ModelState'
import {from, of} from 'rxjs'
import {getRequest} from '../services/api'

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ModelState<Post[]> = {
	data: [],
	status: 'idle',
	error: null,
}

export const postsReducer = (state = initialState, action: any) =>
	produce(state, draft => {
		switch (action.type) {
			case getType(getPostsAsync.request):
				startFetching(draft)
				break
			case getType(getPostsAsync.success):
				updateData(draft, action.payload)
				break
			case getType(getPostsAsync.failure):
				endWithError(draft, action.payload.message)
				break
		}
	})

// ------------------------------------
// Actions
// ------------------------------------

const moduleName = 'posts'

const getPostsAsync = createAsyncAction(
	`@@${moduleName}/GET_REQUEST`,
	`@@${moduleName}/GET_SUCCESS`,
	`@@${moduleName}/GET_FAILURE`,
	`@@${moduleName}/GET_CANCEL`,
)<void, Post[], Error, void>()

export const getPosts = () => getPostsAsync.request()
export const cancelGetPosts = () => getPostsAsync.cancel()

// ------------------------------------
// Epics
// ------------------------------------

const getPostsEpic: Epic<Action, Action, RootState> = action$ => {
	return action$.pipe(
		filter(isActionOf(getPostsAsync.request)),
		switchMap(() => {
			return from(getRequest('/posts')).pipe(
				map(res => getPostsAsync.success(res)),
				catchError(error => of(getPostsAsync.failure(error))),
				takeUntil(action$.pipe(filter(isActionOf(getPostsAsync.cancel)))),
			)
		}),
	)
}

export const postsEpics = [getPostsEpic]
