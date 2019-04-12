import BaseModel from '../models/baseModel'
import PostModel from '../models/post'
import PostsModel from '../models/posts'

import produce from 'immer'

export const startLoading = (state: BaseModel) => {
	return produce(state, draft => {
		draft.loading = true
		draft.error = undefined
	})
}

export const endLoading = (state: BaseModel, error) => {
	return produce(state, draft => {
		draft.loading = false
		draft.error = error
	})
}

export const updateData = (state: PostModel, data) => {
	const { id, userId, title, body } = data
	return produce(state, draft => {
		draft.loading = false
		draft.error = undefined
		draft.id = id
		draft.userid = userId
		draft.title = title
		draft.body = body
	})
}

export const updateListData = (state: PostsModel, data) => {
	return produce(state, draft => {
		draft.loading = false
		draft.error = undefined
		draft.list = data
	})
}
