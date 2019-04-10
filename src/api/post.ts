import { types } from '../modules/post'

export const getPost = (id: number) => ({
	type: types.GET_POST,
	payload: {
		request: {
			url: `/posts/${id}`,
		},
	},
})
