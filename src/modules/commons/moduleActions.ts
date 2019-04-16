import * as api from '../../services/api'
import {createAction} from './common'

const useModuleActions = (modelName: string) => {
	// ------------------------------------
	// Action Creator
	// ------------------------------------

	const moduleActionTypes = {
		GET_MODEL: `${modelName}.GET_MODEL`,
		GET_MODEL_SUCCESS: `${modelName}.GET_MODEL_SUCCESS`,
		GET_MODEL_FAIL: `${modelName}.GET_MODEL_FAIL`,

		DELETE_MODEL: `${modelName}.DELETE_MODEL`,
		DELETE_MODEL_SUCCESS: `${modelName}.DELETE_MODEL_SUCCESS`,
		DELETE_MODEL_FAIL: `${modelName}.DELETE_MODEL_FAIL`,

		POST_MODEL: `${modelName}.POST_MODEL`,
		POST_MODEL_SUCCESS: `${modelName}.POST_MODEL_SUCCESS`,
		POST_MODEL_FAIL: `${modelName}.POST_MODEL_FAIL`,

		PUT_MODEL: `${modelName}.PUT_MODEL`,
		PUT_MODEL_SUCCESS: `${modelName}.PUT_MODEL_SUCCESS`,
		PUT_MODEL_FAIL: `${modelName}.PUT_MODEL_FAIL`,
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
