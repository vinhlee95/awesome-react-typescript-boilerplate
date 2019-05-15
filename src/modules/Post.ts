import produce from 'immer'
import {updateData} from './commons/common'
import useModuleActions from './commons/moduleActions'

import Post from '../models/Post'
import EntityState from '../models/bases/EntityState'
import ModuleName from './commons/ModuleName'

// ------------------------------------
// Const
// ------------------------------------

const moduleName = ModuleName.post
const path = '/posts'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName, path)

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: EntityState<Post> = {
	byId: {},
	id: undefined,
}

const post = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case moduleActionTypes.GET_MODEL_SUCCESS:
				updateData(draft, action.payload)
				break
			case moduleActionTypes.GET_MODEL_FAIL:
				updateData(draft, null)
				break
		}
	})

export const reducer = post

// ------------------------------------
// Actions
// ------------------------------------

export const getPost = (id: number) => moduleActions.getModel(id)
