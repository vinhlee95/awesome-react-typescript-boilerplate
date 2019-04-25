import {createAction} from './common'
import {
	getRequest,
	putRequest,
	deleteRequest,
	postRequest,
} from '../../services/api'

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

			getRequest(path, params, query)
				.then(data => dispatch(actions.getModelSuccess(data)))
				.catch(error =>
					dispatch(actions.getModelFail(undefined, error.message)),
				)
		},

		createModel: (body, params?: number, query?: object) => dispatch => {
			dispatch(actions.createModel())
			postRequest(path, body, params, query)
				.then(data => dispatch(actions.createModelSuccess(data)))
				.catch(error =>
					dispatch(actions.createModelFail(undefined, error.message)),
				)
		},

		updateModel: (body, params?: number, query?: object) => dispatch => {
			dispatch(actions.updateModel())
			putRequest(path, body, params, query)
				.then(data => dispatch(actions.updateModelSuccess(data)))
				.catch(error =>
					dispatch(actions.updateModelFail(undefined, error.message)),
				)
		},

		deleteModel: (params?: number, query?: object) => dispatch => {
			dispatch(actions.deleteModel())

			deleteRequest(path, params, query)
				.then(data => dispatch(actions.deleteModelSuccess(data)))
				.catch(error =>
					dispatch(actions.deleteModelFail(undefined, error.message)),
				)
		},
	}

	return {moduleActionTypes, moduleActions}
}

export default useModuleActions
