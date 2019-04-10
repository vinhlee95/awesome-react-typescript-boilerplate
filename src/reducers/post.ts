import { ActionTypes } from '../actions/actionTypes'
import BaseState from '../models/baseState'
import Post from '../models/post'

const initialState: BaseState<Post> = {
	data: undefined,
	loading: false,
	error: undefined,
}

const post = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.GET_POST:
			return {
				...state,
				loading: true,
				error: undefined,
				data: undefined,
			}

		case ActionTypes.GET_POST_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload.data,
				error: undefined,
			}

		case ActionTypes.GET_POST_FAIL:
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

export default post
