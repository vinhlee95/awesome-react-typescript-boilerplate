import produce from 'immer'

import * as types from './commons/types'
import modelActions from './commons/modelActions'
import * as common from './commons/common'

import Post from '../models/post'

// ------------------------------------
// Const
// ------------------------------------

const modelName = 'post'
const path = '/posts'

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
			case types.get.start(modelName):
				common.startLoading(draft)
				break
			case types.get.success(modelName):
				common.updateData(draft, action.payload.data)
				break
			case types.get.fail(modelName):
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
	getPost: (id: number) => modelActions.getModel(modelName, path, id),
}
