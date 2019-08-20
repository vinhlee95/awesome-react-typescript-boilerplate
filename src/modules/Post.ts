import produce from 'immer'
import {
	startFetching,
	fetchingSuccess,
	endWithError,
	Action,
} from './commons/common'
import useModuleActions from './commons/moduleActions'
import Post from '../models/Post'
import ModelState from '../models/bases/ModelState'

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ModelState<Post> = {
	data: null,
	status: 'idle',
	error: null,
}

export const postReducer = (state = initialState, action: Action<Post>) =>
	produce(state, draft => {
		switch (action.type) {
			case moduleActionTypes.GET_MODEL:
				startFetching(draft)
				break
			case moduleActionTypes.GET_MODEL_SUCCESS:
				fetchingSuccess(draft, action.payload)
				break
			case moduleActionTypes.GET_MODEL_FAIL:
				endWithError(draft, action.error)
				break
		}
	})

// ------------------------------------
// Actions
// ------------------------------------

const moduleName = 'post'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName)

export const getPost = (id: string) => moduleActions.getModel(`/posts/${id}`)

// ------------------------------------
// Selectors
// ------------------------------------

export const postSelector = state => state.post || initialState
