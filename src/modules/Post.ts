import produce from 'immer'
import {startFetching, updateData, endFetching, Action} from './commons/common'
import useModuleActions from './commons/moduleActions'

import Post from '../models/Post'
import ModelState from '../models/bases/ModelState'

// ------------------------------------
// Const
// ------------------------------------

const moduleName = 'post'
const path = '/posts'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName, path)

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ModelState<Post> = {
	data: undefined,
	loading: undefined,
	error: undefined,
}

const post = (state = initialState, action: Action<Post>) =>
	produce(state, draft => {
		switch (action.type) {
			case moduleActionTypes.GET_MODEL:
				startFetching(draft)
				break
			case moduleActionTypes.GET_MODEL_SUCCESS:
				updateData(draft, action.payload)
				break
			case moduleActionTypes.GET_MODEL_FAIL:
				endFetching(draft, action.error)
				break
		}
	})

export const reducer = post

// ------------------------------------
// Selectors
// ------------------------------------

export const postSelector = state => state.post || initialState

// ------------------------------------
// Actions
// ------------------------------------

export const getPost = (id: string) => moduleActions.getModel(id)
