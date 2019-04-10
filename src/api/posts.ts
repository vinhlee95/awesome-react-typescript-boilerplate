import { types } from '../modules/posts'

export const getPosts = () => ({
	type: types.GET_POSTS,
	payload: {
		request: {
			url: '/posts',
		},
	},
})
