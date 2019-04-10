import Posts from '../models/posts'
import * as common from './common'
import * as api from '../api/posts'

// ------------------------------------
// Action Types
// ------------------------------------

export enum types {
	GET_POSTS = 'GET_POSTS',
	GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
	GET_POSTS_FAIL = 'GET_POSTS_FAIL',
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: Posts = {
	list: undefined,
	loading: false,
	error: undefined,
}

const posts = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_POSTS:
			return common.startLoading(state)
		case types.GET_POSTS_SUCCESS:
			return common.updateListData(state, action.payload.data)
		case types.GET_POSTS_FAIL:
			return common.endLoading(state, action.error)
		default:
			return state
	}
}

export const reducer = posts

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
	getPosts: () => api.getPosts(),
}