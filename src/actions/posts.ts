import { ActionTypes } from './actionTypes'

export const getPosts = () => ({
	type: ActionTypes.GET_POSTS,
	payload: {
		request: {
			url: '/posts',
		},
	},
})
