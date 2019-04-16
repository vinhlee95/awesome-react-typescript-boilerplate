import produce from 'immer'
import useModelActions from './commons/modelActions'
import {startLoading, updateData, endLoading} from './commons/common'

import Post from '../models/post'

// ------------------------------------
// Const
// ------------------------------------

const modelName = 'post'
const path = '/posts'

const {modelActionTypes, modelActions} = useModelActions(modelName)

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
			case modelActionTypes.GET_MODEL:
				startLoading(draft)
				break
			case modelActionTypes.GET_MODEL_SUCCESS:
				updateData(draft, action.payload)
				break
			case modelActionTypes.GET_MODEL_FAIL:
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
	getPost: (id: number) => modelActions.getModel(path, id),
}
