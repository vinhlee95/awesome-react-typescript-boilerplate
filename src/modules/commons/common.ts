import ModelState from '../../models/bases/ModelState'

export const startFetching = <T>(state: ModelState<T>) => {
	state.status = 'fetching'
	state.error = null
	state.data = null
}

export const startSaving = <T>(state: ModelState<T>) => {
	state.status = 'saving'
	state.error = null
}

export const endWithError = <T>(state: ModelState<T>, error: string) => {
	state.status = 'error'
	state.error = error
}

export const endCanceling = <T>(state: ModelState<T>) => {
	state.status = 'idle'
}

export const updateData = <T>(state: ModelState<T>, data: T) => {
	state.status = 'success'
	state.error = null
	state.data = data
}
