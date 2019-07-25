import BaseState from '../../models/bases/BaseState'
import ModelState from '../../models/bases/ModelState'

export const startFetching = <T>(state: ModelState<T>) => {
	state.status = 'fetching'
	state.error = null
	state.data = null
}

export const startSaving = (state: BaseState) => {
	state.status = 'saving'
	state.error = null
}

export const endWithError = (state: BaseState, error: string) => {
	state.status = 'error'
	state.error = error
}

export const updateData = <T>(state: ModelState<T>, data: T) => {
	state.status = 'success'
	state.error = null
	state.data = data
}

export interface Action<T> {
	type: string
	payload?: any
	error?: string
}

export const createAction = <T>(type: string) => {
	return (payload?: any, error?: any): Action<T> => {
		return {
			type,
			payload,
			error,
		}
	}
}
