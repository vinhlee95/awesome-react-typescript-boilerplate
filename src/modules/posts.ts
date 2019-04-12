import produce from 'immer'

import Posts from '../models/posts'
import * as common from './common'

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

const posts = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case types.GET_POSTS:
				common.startLoading(draft)
				break
			case types.GET_POSTS_SUCCESS:
				draft.list = action.payload.data
				common.updateData(draft)
				break
			case types.GET_POSTS_FAIL:
				common.endLoading(draft, action.error)
			default:
				return state
		}
	})

export const reducer = posts

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
	getPosts: () => getPosts(),
}

const getPosts = () => ({
	type: types.GET_POSTS,
	payload: {
		request: {
			url: '/posts',
		},
	},
})
