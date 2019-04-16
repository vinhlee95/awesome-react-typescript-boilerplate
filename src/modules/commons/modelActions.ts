import * as api from '../../services/api'
import {createAction} from './common'

const useModelActions = (modelName: string) => {
	// ------------------------------------
	// Action Creator
	// ------------------------------------

	const modelActionTypes = {
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

	const actionCreators = {
		getModel: createAction(modelActionTypes.GET_MODEL),
		getModelSuccess: createAction(modelActionTypes.GET_MODEL_SUCCESS),
		getModelFail: createAction(modelActionTypes.GET_MODEL_FAIL),
	}

	// ------------------------------------
	// Actions
	// ------------------------------------

	const modelActions = {
		getModel: (path: string, params?: number, query?: string) => dispatch => {
			dispatch(actionCreators.getModel())

			api.requests.get(path, params, query).then(
				data => {
					dispatch(actionCreators.getModelSuccess(data))
				},
				error => {
					dispatch(actionCreators.getModelFail(undefined, error))
				},
			)
		},
	}

	return {modelActionTypes, modelActions}
}

export default useModelActions
