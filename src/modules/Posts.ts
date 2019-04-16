import produce from 'immer'
import {startOfLoading, updateListData, endOfLoading} from './commons/common'
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
	saving: false,
	error: undefined,
}

const posts = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case moduleActionTypes.GET_MODEL:
				startOfLoading(draft)
				break
			case moduleActionTypes.GET_MODEL_SUCCESS:
				updateListData(draft, action.payload)
				break
			case moduleActionTypes.GET_MODEL_FAIL:
				endOfLoading(draft, action.error)
				break
		}
	})

export const reducer = posts

// ------------------------------------
// Actions
// ------------------------------------

export const getPosts = () => moduleActions.getModel()
