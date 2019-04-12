import produce from 'immer'

import Post from '../models/post'
import * as common from './common'

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

const initialState: Post = {
	id: undefined,
	userid: undefined,
	title: undefined,
	body: undefined,
	loading: false,
	error: undefined,
}

const post = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case types.GET_POST:
				common.startLoading(draft)
				break
			case types.GET_POST_SUCCESS:
				const { id, userId, body, title } = action.payload.data
				draft.id = id
				draft.userid = userId
				draft.body = body
				draft.title = title
				common.updateData(draft)
				break
			case types.GET_POST_FAIL:
				common.endLoading(draft, action.error)
			default:
				return state
		}
	})

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
