import { ActionTypes } from '../actions/actionTypes'

const initialState = {
	data: null,
	loading: false,
	error: null,
}

const post = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.GET_POST:
			return {
				...state,
				loading: true,
				error: null,
				data: null,
			}

		case ActionTypes.GET_POST_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload.data,
				error: null,
			}

		case ActionTypes.GET_POST_FAIL:
			return {
				...state,
				loading: false,
				data: null,
				error: action.error,
			}

		default:
			return state
	}
}

export default post
