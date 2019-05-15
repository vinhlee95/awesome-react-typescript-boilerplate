import EntityState from '../../models/bases/EntityState'
import LoadingState, {LoadingStatus} from '../../models/bases/LoadingState'
import ErrorState from '../../models/bases/ErrorState'
import ModuleName from './ModuleName'
import ListState from '../../models/bases/ListState'
import BaseModel from '../../models/bases/BaseModel'

export const setLoading = (
	moduleName: ModuleName,
	state: LoadingState,
	loadingStatus: LoadingStatus,
) => {
	state[moduleName] = loadingStatus
}

export const setError = (
	moduleName: ModuleName,
	state: ErrorState,
	error: string,
) => {
	state[moduleName] = error
}

export const updateData = <T extends BaseModel>(
	state: EntityState<T>,
	data: T,
) => {
	state.byId = {[data.id]: data}
	state.id = data.id
}

export const updateListData = <T extends BaseModel>(
	state: ListState<T>,
	data: T[],
) => {
	state.allIds = data.map(element => element.id)
	data.forEach(element => {
		state.byIds[element.id] = element
	})
}

export const createAction = (type: string, moduleName?: ModuleName) => {
	return (payload?: any, error?: any) => {
		return {
			type,
			payload,
			error,
			moduleName,
		}
	}
}
