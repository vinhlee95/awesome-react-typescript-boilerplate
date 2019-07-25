import BaseState from '../../models/bases/BaseState'
import ModelState from '../../models/bases/ModelState'

export const startFetching = (state: BaseState) => {
	state.loading = 'fetching'
	state.error = undefined
}

export const endFetching = (state: BaseState, error: string) => {
	state.loading = undefined
	state.error = error
}

export const startSaving = (state: BaseState) => {
	state.loading = 'saving'
	state.error = undefined
}

export const endSaving = (state: BaseState, error: string) => {
	state.loading = 'saving'
	state.error = error
}

export const updateData = <T>(state: ModelState<T>, data: T) => {
	state.loading = undefined
	state.error = undefined
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
