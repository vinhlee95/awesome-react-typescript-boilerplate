import {Action} from 'redux'
import {Epic} from 'redux-observable'
import {switchMap, map, filter, takeUntil, catchError} from 'rxjs/operators'
import {of, from} from 'rxjs'
import {createAsyncAction, isActionOf} from 'typesafe-actions'
import {getRequest} from '../../services/api'
import {RootState} from '../reducers'

const useModuleEpic = <T>(moduleName: string, path: string) => {
	// ------------------------------------
	// Actions
	// ------------------------------------

	const getAsync = createAsyncAction(
		`@@${moduleName}/GET_REQUEST`,
		`@@${moduleName}/GET_SUCCESS`,
		`@@${moduleName}/GET_FAILURE`,
		`@@${moduleName}/GET_CANCEL`,
	)<{params?: string; query?: object}, T, Error, void>()

	const actions = {
		getAsync,
	}

	// ------------------------------------
	// Epics
	// ------------------------------------

	const getModelEpic: Epic<Action, Action, RootState> = action$ => {
		return action$.pipe(
			filter(isActionOf(getAsync.request)),
			switchMap(action => {
				const {params, query} = action.payload
				return from(getRequest(path, params, query)).pipe(
					map(res => getAsync.success(res)),
					catchError(error => of(getAsync.failure(error))),
					takeUntil(action$.pipe(filter(isActionOf(getAsync.cancel)))),
				)
			}),
		)
	}

	const moduleEpics = [getModelEpic]

	return {actions, moduleEpics}
}

export default useModuleEpic
