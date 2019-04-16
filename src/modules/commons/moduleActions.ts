import * as api from '../../services/api'
import {createAction} from './common'

const useModuleActions = (moduleName: string) => {
	// ------------------------------------
	// Action Creator
	// ------------------------------------

	const moduleActionTypes = {
		GET_MODEL: `${moduleName}.GET_MODEL`,
		GET_MODEL_SUCCESS: `${moduleName}.GET_MODEL_SUCCESS`,
		GET_MODEL_FAIL: `${moduleName}.GET_MODEL_FAIL`,

		DELETE_MODEL: `${moduleName}.DELETE_MODEL`,
		DELETE_MODEL_SUCCESS: `${moduleName}.DELETE_MODEL_SUCCESS`,
		DELETE_MODEL_FAIL: `${moduleName}.DELETE_MODEL_FAIL`,

		POST_MODEL: `${moduleName}.POST_MODEL`,
		POST_MODEL_SUCCESS: `${moduleName}.POST_MODEL_SUCCESS`,
		POST_MODEL_FAIL: `${moduleName}.POST_MODEL_FAIL`,

		PUT_MODEL: `${moduleName}.PUT_MODEL`,
		PUT_MODEL_SUCCESS: `${moduleName}.PUT_MODEL_SUCCESS`,
		PUT_MODEL_FAIL: `${moduleName}.PUT_MODEL_FAIL`,
	}

	const actions = {
		getModel: createAction(moduleActionTypes.GET_MODEL),
		getModelSuccess: createAction(moduleActionTypes.GET_MODEL_SUCCESS),
		getModelFail: createAction(moduleActionTypes.GET_MODEL_FAIL),
	}

	// ------------------------------------
	// Actions
	// ------------------------------------

	const moduleActions = {
		getModel: (path: string, params?: number, query?: string) => dispatch => {
			dispatch(actions.getModel())

			api.requests.get(path, params, query).then(
				data => {
					dispatch(actions.getModelSuccess(data))
				},
				error => {
					dispatch(actions.getModelFail(undefined, error))
				},
			)
		},
	}

	return {moduleActionTypes, moduleActions}
}

export default useModuleActions
