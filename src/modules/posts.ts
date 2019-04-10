import BaseState from '../models/baseState'
import Post from '../models/post'

// ------------------------------------
// Action Types
// ------------------------------------

export enum types {
	GET_POSTS = 'GET_POSTS',
	GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
	GET_POSTS_FAIL = 'GET_POSTS_FAIL',
}

// ------------------------------------
// State
// ------------------------------------

const initialState: BaseState<[Post]> = {
	data: undefined,
	loading: false,
	error: undefined,
}

const posts = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_POSTS:
			return {
				...state,
				loading: true,
				error: undefined,
				data: undefined,
			}

		case types.GET_POSTS_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload.data,
				error: undefined,
			}

		case types.GET_POSTS_FAIL:
			return {
				...state,
				loading: false,
				data: undefined,
				error: action.error,
			}

		default:
			return state
	}
}

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
