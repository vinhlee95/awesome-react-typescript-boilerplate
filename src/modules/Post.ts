import produce from 'immer'
import {Epic} from 'redux-observable'
import {getType} from 'typesafe-actions'
import {createAsyncAction, isActionOf} from 'typesafe-actions'
import {
	startFetching,
	updateData,
	endWithError,
	endCanceling,
} from './commons/common'

import Post from '../models/Post'
import ModelState from '../models/bases/ModelState'
import {Action} from 'redux'
import {RootState} from './reducers'
import {catchError, filter, map, switchMap, takeUntil} from 'rxjs/operators'
import {from, of} from 'rxjs'
import {getRequest} from '../services/api'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: ModelState<Post> = {
	data: null,
	status: 'idle',
	error: null,
}

export const postReducer = (state = initialState, action: any) =>
	produce(state, draft => {
		switch (action.type) {
			case getType(getPostAsync.request):
				startFetching(draft)
				break
			case getType(getPostAsync.success):
				updateData(draft, action.payload)
				break
			case getType(getPostAsync.failure):
				endWithError(draft, action.payload.message)
				break
			case getType(getPostAsync.cancel):
				endCanceling(draft)
				break
		}
	})

// ------------------------------------
// Actions
// ------------------------------------

const moduleName = 'post'

const getPostAsync = createAsyncAction(
	`@@${moduleName}/GET_REQUEST`,
	`@@${moduleName}/GET_SUCCESS`,
	`@@${moduleName}/GET_FAILURE`,
	`@@${moduleName}/GET_CANCEL`,
)<string, Post, Error, void>()

export const getPost = (id: string) => getPostAsync.request(id)
export const cancelGetPost = () => getPostAsync.cancel()

// ------------------------------------
// Epics
// ------------------------------------

const getPostEpic: Epic<Action, Action, RootState> = action$ => {
	return action$.pipe(
		filter(isActionOf(getPostAsync.request)),
		switchMap(action => {
			const id = action.payload
			return from(getRequest(`/posts/${id}`)).pipe(
				map(res => getPostAsync.success(res)),
				catchError(error => of(getPostAsync.failure(error))),
				takeUntil(action$.pipe(filter(isActionOf(getPostAsync.cancel)))),
			)
		}),
	)
}

export const postEpics = [getPostEpic]
