import produce from 'immer'
import {updateListData} from './commons/common'
import useModuleActions from './commons/moduleActions'

import ListState from '../models/bases/ListState'
import Post from '../models/Post'
import ModuleName from './commons/ModuleName'

// ------------------------------------
// Const
// ------------------------------------

const moduleName = ModuleName.posts
const path = '/posts'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName, path)

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ListState<Post> = {
	byIds: {},
	allIds: [],
}

const posts = (state = initialState, action) =>
	produce(state, (draft: ListState<Post>) => {
		switch (action.type) {
			case moduleActionTypes.GET_MODEL_SUCCESS:
				updateListData(draft, action.payload)
				break
			case moduleActionTypes.GET_MODEL_FAIL:
				updateListData(draft, null)
				break
		}
	})

export const reducer = posts

// ------------------------------------
// Actions
// ------------------------------------

export const getPosts = () => moduleActions.getModel()

// ------------------------------------
// Selectors
// ------------------------------------
