import produce from 'immer'
import {setError} from './commons/common'
import ErrorState from '../models/bases/ErrorState'
import ModuleName from './commons/ModuleName'

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ErrorState = {
	[ModuleName.posts]: null,
	[ModuleName.post]: null,
}

const errorReducer = (state = initialState, action) =>
	produce(state, (draft: ErrorState) => {
		switch (action.type) {
			case `@@${action.moduleName}/GET_MODEL`:
			case `@@${action.moduleName}/CREATE_MODEL`:
			case `@@${action.moduleName}/UPDATE_MODEL`:
			case `@@${action.moduleName}/DELETE_MODEL`:
			case `@@${action.moduleName}/GET_MODEL_SUCCESS`:
			case `@@${action.moduleName}/CREATE_MODEL_SUCCESS`:
			case `@@${action.moduleName}/UPDATE_MODEL_SUCCESS`:
			case `@@${action.moduleName}/DELETE_MODEL_SUCCESS`:
				setError(action.moduleName, draft, null)
				break
			case `@@${action.moduleName}/GET_MODEL_FAIL`:
			case `@@${action.moduleName}/CREATE_MODEL_FAIL`:
			case `@@${action.moduleName}/UPDATE_MODEL_FAIL`:
			case `@@${action.moduleName}/DELETE_MODEL_FAIL`:
				setError(action.moduleName, draft, action.error)
				break
		}
	})

export const reducer = errorReducer
