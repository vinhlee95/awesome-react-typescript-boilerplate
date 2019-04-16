import produce from 'immer'

import {getTypes} from './commons/types'
import modelActions from './commons/modelActions'
import {startLoading, updateListData, endLoading} from './commons/common'

import Posts from '../models/posts'

// ------------------------------------
// Const
// ------------------------------------

const modelName = 'posts'
const path = '/posts'

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: Posts = {
	list: undefined,
	loading: false,
	error: undefined,
}

const posts = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case getTypes.start(modelName):
				startLoading(draft)
				break
			case getTypes.success(modelName):
				updateListData(draft, action.payload)
				break
			case getTypes.fail(modelName):
				endLoading(draft, action.error)
			default:
				return state
		}
	})

export const reducer = posts

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
	getPosts: () => modelActions.getModel(modelName, path),
}
