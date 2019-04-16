import produce from 'immer'
import {startLoading, updateListData, endLoading} from './commons/common'
import useModelActions from './commons/modelActions'
import Posts from '../models/posts'

// ------------------------------------
// Const
// ------------------------------------

const modelName = 'posts'
const path = '/posts'

const {modelActionTypes, modelActions} = useModelActions(modelName)

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
			case modelActionTypes.GET_MODEL:
				startLoading(draft)
				break
			case modelActionTypes.GET_MODEL_SUCCESS:
				updateListData(draft, action.payload)
				break
			case modelActionTypes.GET_MODEL_FAIL:
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
	getPosts: () => modelActions.getModel(path),
}
