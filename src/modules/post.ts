import BaseState from '../models/baseState'
import Post from '../models/post'
import * as common from './common'
import * as api from '../api/post'

// ------------------------------------
// Action Types
// ------------------------------------

export enum types {
	GET_POST = 'GET_POST',
	GET_POST_SUCCESS = 'GET_POST_SUCCESS',
	GET_POST_FAIL = 'GET_POST_FAIL',
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: BaseState<Post> = {
	data: undefined,
	loading: false,
	error: undefined,
}

const post = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_POST:
			return common.startLoading(state)
		case types.GET_POST_SUCCESS:
			return common.updateData(state, action.payload.data)
		case types.GET_POST_FAIL:
			return common.endLoading(state, action.error)
		default:
			return state
	}
}

export const reducer = post

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
	getPost: (id: number) => api.getPost(id),
}
