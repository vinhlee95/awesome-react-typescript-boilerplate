import BaseState from '../../models/bases/BaseState'
import ModelState from '../../models/bases/ModelState'

export const startFetching = (state: BaseState) => {
	state.loading = 'pending'
	state.error = null
}

export const errorFetching = (state: BaseState, error: string) => {
	state.loading = 'error'
	state.error = error
}

export const startSaving = (state: BaseState) => {
	state.saving = 'pending'
	state.error = null
}

export const errorSaving = (state: BaseState, error: string) => {
	state.saving = 'error'
	state.error = error
}

export const endCanceling = (state: BaseState) => {
	state.loading = 'idle'
	state.saving = 'idle'
}

export const updateData = <T>(state: ModelState<T>, data: T) => {
	state.loading = 'success'
	state.error = null
	state.data = data
}
