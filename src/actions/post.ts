import { ActionTypes } from './actionTypes'

export const getPost = (id: number) => ({
	type: ActionTypes.GET_POST,
	payload: {
		request: {
			url: `/posts/${id}`,
		},
	},
})
