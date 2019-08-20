import produce from 'immer'
import {
	startFetching,
	endWithError,
	fetchingSuccess,
	Action,
} from './commons/common'
import useModuleActions from './commons/moduleActions'
import Post from '../models/Post'
import ModelState from '../models/bases/ModelState'

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ModelState<Post[]> = {
	data: [],
	status: 'idle',
	error: null,
}

export const postsReducer = (state = initialState, action: Action<Post[]>) =>
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

const moduleName = 'posts'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName)

export const getPosts = () => moduleActions.getModel('/posts')

// ------------------------------------
// Selectors
// ------------------------------------

export const postsSelector = state => state.posts || initialState
