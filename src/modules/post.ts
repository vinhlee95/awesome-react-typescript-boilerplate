import BaseState from '../models/baseState'
import Post from '../models/post'

// ------------------------------------
// Action Types
// ------------------------------------

export enum types {
	GET_POST = 'GET_POST',
	GET_POST_SUCCESS = 'GET_POST_SUCCESS',
	GET_POST_FAIL = 'GET_POST_FAIL',
}

// ------------------------------------
// State
// ------------------------------------

const initialState: BaseState<Post> = {
	data: undefined,
	loading: false,
	error: undefined,
}

const post = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_POST:
			return {
				...state,
				loading: true,
				error: undefined,
				data: undefined,
			}

		case types.GET_POST_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload.data,
				error: undefined,
			}

		case types.GET_POST_FAIL:
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

export const reducer = post

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
	getPost: (id: number) => getPost(id),
}

const getPost = (id: number) => ({
	type: types.GET_POST,
	payload: {
		request: {
			url: `/posts/${id}`,
		},
	},
})
