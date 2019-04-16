import BaseModel from '../../models/bases/BaseModel'
import BaseModels from '../../models/bases/BaseModels'

export const startOfLoading = (state: BaseModel) => {
	state.loading = true
	state.error = undefined
}

export const endOfLoading = (state: BaseModel, error) => {
	state.loading = false
	state.error = error
}

export const startOfSaving = (state: BaseModel) => {
	state.saving = true
	state.error = undefined
}

export const endOfSaving = (state: BaseModel, error) => {
	state.saving = false
	state.error = error
}

export const updateData = (state: BaseModel, data) => {
	state.loading = false
	state.error = undefined
	Object.keys(data).map(key => {
		const value = data[key]
		state[key] = value
	})
}

export const updateListData = (state: BaseModels, data) => {
	state.loading = false
	state.error = undefined
	state.list = data
}

export const createAction = (type: string) => {
	return (payload?: any, error?: any) => {
		return {
			type,
			payload,
			error,
		}
	}
}
