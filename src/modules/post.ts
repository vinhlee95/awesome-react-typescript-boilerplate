import produce from 'immer'

import {getTypes} from './commons/types'
import modelActions from './commons/modelActions'
import {startLoading, updateData, endLoading} from './commons/common'

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
			case getTypes.start(modelName):
				startLoading(draft)
				break
			case getTypes.success(modelName):
				updateData(draft, action.payload)
				break
			case getTypes.fail(modelName):
				endLoading(draft, action.error)
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
