import {createAction} from './common'
import {
	getRequest,
	putRequest,
	deleteRequest,
	postRequest,
} from '../../services/api'
import {Dispatch} from 'redux'

const useModuleActions = <T>(moduleName: string, path: string) => {
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
		getModel: createAction<T>(moduleActionTypes.GET_MODEL),
		getModelSuccess: createAction<T>(moduleActionTypes.GET_MODEL_SUCCESS),
		getModelFail: createAction<T>(moduleActionTypes.GET_MODEL_FAIL),

		createModel: createAction<T>(moduleActionTypes.CREATE_MODEL),
		createModelSuccess: createAction<T>(moduleActionTypes.CREATE_MODEL_SUCCESS),
		createModelFail: createAction<T>(moduleActionTypes.CREATE_MODEL_FAIL),

		updateModel: createAction<T>(moduleActionTypes.UPDATE_MODEL),
		updateModelSuccess: createAction<T>(moduleActionTypes.UPDATE_MODEL_SUCCESS),
		updateModelFail: createAction<T>(moduleActionTypes.UPDATE_MODEL_FAIL),

		deleteModel: createAction<T>(moduleActionTypes.DELETE_MODEL),
		deleteModelSuccess: createAction<T>(moduleActionTypes.DELETE_MODEL_SUCCESS),
		deleteModelFail: createAction<T>(moduleActionTypes.DELETE_MODEL_FAIL),
	}

	// ------------------------------------
	// Actions
	// ------------------------------------

	const moduleActions = {
		getModel: (params?: string, query?: object) => (dispatch: Dispatch) => {
			dispatch(actions.getModel())

			getRequest(path, params, query)
				.then((data: T) => dispatch(actions.getModelSuccess(data)))
				.catch((error: Error) =>
					dispatch(actions.getModelFail(undefined, error.message)),
				)
		},

		createModel: (body: object, params?: string, query?: object) => (
			dispatch: Dispatch,
		) => {
			dispatch(actions.createModel())
			postRequest(path, body, params, query)
				.then((data: T) => dispatch(actions.createModelSuccess(data)))
				.catch((error: Error) =>
					dispatch(actions.createModelFail(undefined, error.message)),
				)
		},

		updateModel: (body: object, params?: string, query?: object) => (
			dispatch: Dispatch,
		) => {
			dispatch(actions.updateModel())
			putRequest(path, body, params, query)
				.then((data: T) => dispatch(actions.updateModelSuccess(data)))
				.catch((error: Error) =>
					dispatch(actions.updateModelFail(undefined, error.message)),
				)
		},

		deleteModel: (params?: string, query?: object) => (dispatch: Dispatch) => {
			dispatch(actions.deleteModel())

			deleteRequest(path, params, query)
				.then((data: T) => dispatch(actions.deleteModelSuccess(data)))
				.catch((error: Error) =>
					dispatch(actions.deleteModelFail(undefined, error.message)),
				)
		},
	}

	return {moduleActionTypes, moduleActions}
}

export default useModuleActions
