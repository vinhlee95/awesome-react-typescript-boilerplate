import produce from 'immer'

import * as types from './commons/types'
import modelActions from './commons/modelActions'
import * as common from './commons/common'

import Posts from '../models/posts'

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: Posts = {
	list: undefined,
	loading: false,
	error: undefined,
}

const modelName = 'posts'

const posts = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case types.get.start(modelName):
				common.startLoading(draft)
				break
			case types.get.success(modelName):
				common.updateListData(draft, action.payload.data)
				break
			case types.get.fail(modelName):
				common.endLoading(draft, action.error)
			default:
				return state
		}
	})

export const reducer = posts

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
	getPosts: () => modelActions.getModel(modelName),
}
