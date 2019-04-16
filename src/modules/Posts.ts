import produce from 'immer'
import {startLoading, updateListData, endLoading} from './commons/common'
import useModuleActions from './commons/moduleActions'

import Posts from '../models/Posts'

// ------------------------------------
// Const
// ------------------------------------

const moduleName = 'posts'
const path = '/posts'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName, path)

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
			case moduleActionTypes.GET_MODEL:
				startLoading(draft)
				break
			case moduleActionTypes.GET_MODEL_SUCCESS:
				updateListData(draft, action.payload)
				break
			case moduleActionTypes.GET_MODEL_FAIL:
				endLoading(draft, action.error)
				break
		}
	})

export const reducer = posts

// ------------------------------------
// Actions
// ------------------------------------

export const getPosts = () => moduleActions.getModel()
