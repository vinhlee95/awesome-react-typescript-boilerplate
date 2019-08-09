import produce from 'immer'
import {startFetching, endWithError, updateData, Action} from './commons/common'
import useModuleActions from './commons/moduleActions'
import Post from '../models/Post'
import ModelState from '../models/bases/ModelState'

// ------------------------------------
// Const
// ------------------------------------

const moduleName = 'posts'
const path = '/posts'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName, path)

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ModelState<Post[]> = {
	data: [],
	status: 'idle',
	error: null,
}

const posts = (state = initialState, action: Action<Post[]>) =>
	produce(state, draft => {
		switch (action.type) {
			case moduleActionTypes.GET_MODEL:
				startFetching(draft)
				break
			case moduleActionTypes.GET_MODEL_SUCCESS:
				updateData(draft, action.payload)
				break
			case moduleActionTypes.GET_MODEL_FAIL:
				endWithError(draft, action.error)
				break
		}
	})

export const reducer = posts

// ------------------------------------
// Selectors
// ------------------------------------

export const postsSelector = state => state.posts || initialState

// ------------------------------------
// Actions
// ------------------------------------

export const getPosts = () => moduleActions.getModel()
