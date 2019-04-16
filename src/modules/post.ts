import produce from 'immer'
import useModuleActions from './commons/moduleActions'
import {startLoading, updateData, endLoading} from './commons/common'

import Post from '../models/post'

// ------------------------------------
// Const
// ------------------------------------

const modelName = 'post'
const path = '/posts'

const {moduleActionTypes, moduleActions} = useModuleActions(modelName)

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
			case moduleActionTypes.GET_MODEL:
				startLoading(draft)
				break
			case moduleActionTypes.GET_MODEL_SUCCESS:
				updateData(draft, action.payload)
				break
			case moduleActionTypes.GET_MODEL_FAIL:
				endLoading(draft, action.error)
			default:
				return state
		}
	})

export const reducer = post

// ------------------------------------
// Actions
// ------------------------------------

export const getPost = (id: number) => moduleActions.getModel(path, id)
