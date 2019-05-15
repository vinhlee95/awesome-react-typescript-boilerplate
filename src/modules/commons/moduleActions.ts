import {createAction} from './common'
import {
	getRequest,
	putRequest,
	deleteRequest,
	postRequest,
} from '../../services/api'
import ModuleName from './ModuleName'

const useModuleActions = (moduleName: ModuleName, path: string) => {
	// ------------------------------------
	// Action Creator
	// ------------------------------------

	const moduleActionTypes = {
		GET_MODEL: `@@${moduleName}/GET_MODEL`,
		GET_MODEL_SUCCESS: `@@${moduleName}/GET_MODEL_SUCCESS`,
		GET_MODEL_FAIL: `@@${moduleName}/GET_MODEL_FAIL`,

		CREATE_MODEL: `@@${moduleName}/CREATE_MODEL`,
		CREATE_MODEL_SUCCESS: `@@${moduleName}/CREATE_MODEL_SUCCESS`,
		CREATE_MODEL_FAIL: `@@${moduleName}/CREATE_MODEL_FAIL`,

		UPDATE_MODEL: `@@${moduleName}/UPDATE_MODEL`,
		UPDATE_MODEL_SUCCESS: `@@${moduleName}/UPDATE_MODEL_SUCCESS`,
		UPDATE_MODEL_FAIL: `@@${moduleName}/UPDATE_MODEL_FAIL`,

		DELETE_MODEL: `@@${moduleName}/DELETE_MODEL`,
		DELETE_MODEL_SUCCESS: `@@${moduleName}/DELETE_MODEL_SUCCESS`,
		DELETE_MODEL_FAIL: `@@${moduleName}/DELETE_MODEL_FAIL`,
	}

	const actions = {
		getModel: createAction(moduleActionTypes.GET_MODEL, moduleName),
		getModelSuccess: createAction(
			moduleActionTypes.GET_MODEL_SUCCESS,
			moduleName,
		),
		getModelFail: createAction(moduleActionTypes.GET_MODEL_FAIL, moduleName),

		createModel: createAction(moduleActionTypes.CREATE_MODEL, moduleName),
		createModelSuccess: createAction(
			moduleActionTypes.CREATE_MODEL_SUCCESS,
			moduleName,
		),
		createModelFail: createAction(
			moduleActionTypes.CREATE_MODEL_FAIL,
			moduleName,
		),

		updateModel: createAction(moduleActionTypes.UPDATE_MODEL, moduleName),
		updateModelSuccess: createAction(
			moduleActionTypes.UPDATE_MODEL_SUCCESS,
			moduleName,
		),
		updateModelFail: createAction(
			moduleActionTypes.UPDATE_MODEL_FAIL,
			moduleName,
		),

		deleteModel: createAction(moduleActionTypes.DELETE_MODEL, moduleName),
		deleteModelSuccess: createAction(
			moduleActionTypes.DELETE_MODEL_SUCCESS,
			moduleName,
		),
		deleteModelFail: createAction(
			moduleActionTypes.DELETE_MODEL_FAIL,
			moduleName,
		),
	}

	// ------------------------------------
	// Actions
	// ------------------------------------

	const moduleActions = {
		getModel: (params?: number, query?: object) => dispatch => {
			dispatch(actions.getModel())

			getRequest(path, params, query)
				.then(data => dispatch(actions.getModelSuccess(data)))
				.catch(error => dispatch(actions.getModelFail(null, error.message)))
		},

		createModel: (body, params?: number, query?: object) => dispatch => {
			dispatch(actions.createModel())
			postRequest(path, body, params, query)
				.then(data => dispatch(actions.createModelSuccess(data)))
				.catch(error => dispatch(actions.createModelFail(null, error.message)))
		},

		updateModel: (body, params?: number, query?: object) => dispatch => {
			dispatch(actions.updateModel())
			putRequest(path, body, params, query)
				.then(data => dispatch(actions.updateModelSuccess(data)))
				.catch(error => dispatch(actions.updateModelFail(null, error.message)))
		},

		deleteModel: (params?: number, query?: object) => dispatch => {
			dispatch(actions.deleteModel())

			deleteRequest(path, params, query)
				.then(data => dispatch(actions.deleteModelSuccess(data)))
				.catch(error => dispatch(actions.deleteModelFail(null, error.message)))
		},
	}

	return {moduleActionTypes, moduleActions}
}

export default useModuleActions
