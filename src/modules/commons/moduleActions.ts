import * as api from '../../services/api'
import {createAction} from './common'

const useModuleActions = (moduleName: string, path: string) => {
	// ------------------------------------
	// Action Creator
	// ------------------------------------

	const moduleActionTypes = {
		GET_MODEL: `${moduleName}.GET_MODEL`,
		GET_MODEL_SUCCESS: `${moduleName}.GET_MODEL_SUCCESS`,
		GET_MODEL_FAIL: `${moduleName}.GET_MODEL_FAIL`,

		CREATE_MODEL: `${moduleName}.CREATE_MODEL`,
		CREATE_MODEL_SUCCESS: `${moduleName}.CREATE_MODEL_SUCCESS`,
		CREATE_MODEL_FAIL: `${moduleName}.CREATE_MODEL_FAIL`,

		UPDATE_MODEL: `${moduleName}.UPDATE_MODEL`,
		UPDATE_MODEL_SUCCESS: `${moduleName}.UPDATE_MODEL_SUCCESS`,
		UPDATE_MODEL_FAIL: `${moduleName}.UPDATE_MODEL_FAIL`,

		DELETE_MODEL: `${moduleName}.DELETE_MODEL`,
		DELETE_MODEL_SUCCESS: `${moduleName}.DELETE_MODEL_SUCCESS`,
		DELETE_MODEL_FAIL: `${moduleName}.DELETE_MODEL_FAIL`,
	}

	const actions = {
		getModel: createAction(moduleActionTypes.GET_MODEL),
		getModelSuccess: createAction(moduleActionTypes.GET_MODEL_SUCCESS),
		getModelFail: createAction(moduleActionTypes.GET_MODEL_FAIL),

		createModel: createAction(moduleActionTypes.CREATE_MODEL),
		createModelSuccess: createAction(moduleActionTypes.CREATE_MODEL_SUCCESS),
		createModelFail: createAction(moduleActionTypes.CREATE_MODEL_FAIL),

		updateModel: createAction(moduleActionTypes.UPDATE_MODEL),
		updateModelSuccess: createAction(moduleActionTypes.UPDATE_MODEL_SUCCESS),
		updateModelFail: createAction(moduleActionTypes.UPDATE_MODEL_FAIL),

		deleteModel: createAction(moduleActionTypes.DELETE_MODEL),
		deleteModelSuccess: createAction(moduleActionTypes.DELETE_MODEL_SUCCESS),
		deleteModelFail: createAction(moduleActionTypes.DELETE_MODEL_FAIL),
	}

	// ------------------------------------
	// Actions
	// ------------------------------------

	const moduleActions = {
		getModel: (params?: number, query?: object) => dispatch => {
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

		createModel: (body, params?: number, query?: object) => dispatch => {
			dispatch(actions.createModel())

			api.requests.post(path, body, params, query).then(
				data => {
					dispatch(actions.createModelSuccess(data))
				},
				error => {
					dispatch(actions.createModelFail(undefined, error))
				},
			)
		},

		updateModel: (body, params?: number, query?: object) => dispatch => {
			dispatch(actions.updateModel())

			api.requests.put(path, body, params, query).then(
				data => {
					dispatch(actions.updateModelSuccess(data))
				},
				error => {
					dispatch(actions.updateModelFail(undefined, error))
				},
			)
		},

		deleteModel: (params?: number, query?: object) => dispatch => {
			dispatch(actions.deleteModel())

			api.requests.delete(path, params, query).then(
				data => {
					dispatch(actions.deleteModelSuccess(data))
				},
				error => {
					dispatch(actions.deleteModelFail(undefined, error))
				},
			)
		},
	}

	return {moduleActionTypes, moduleActions}
}

export default useModuleActions
