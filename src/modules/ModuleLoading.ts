import produce from 'immer'
import {setLoading} from './commons/common'
import LoadingState from '../models/bases/LoadingState'
import ModuleName from './commons/ModuleName'

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: LoadingState = {
	[ModuleName.posts]: null,
	[ModuleName.post]: null,
}

const loadingReducer = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case `@@${action.moduleName}/GET_MODEL`:
				setLoading(action.moduleName, draft, 'fetching')
				break
			case `@@${action.moduleName}/CREATE_MODEL`:
			case `@@${action.moduleName}/UPDATE_MODEL`:
			case `@@${action.moduleName}/DELETE_MODEL`:
				setLoading(action.moduleName, draft, 'saving')
				break
			case `@@${action.moduleName}/GET_MODEL_SUCCESS`:
			case `@@${action.moduleName}/CREATE_MODEL_SUCCESS`:
			case `@@${action.moduleName}/UPDATE_MODEL_SUCCESS`:
			case `@@${action.moduleName}/DELETE_MODEL_SUCCESS`:
			case `@@${action.moduleName}/GET_MODEL_FAIL`:
			case `@@${action.moduleName}/CREATE_MODEL_FAIL`:
			case `@@${action.moduleName}/UPDATE_MODEL_FAIL`:
			case `@@${action.moduleName}/DELETE_MODEL_FAIL`:
				setLoading(action.moduleName, draft, null)
				break
		}
	})

export const reducer = loadingReducer
