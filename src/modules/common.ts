import BaseModel from '../models/baseModel'

export const startLoading = (state: BaseModel) => {
	state.loading = true
	state.error = undefined
}

export const endLoading = (state: BaseModel, error) => {
	state.loading = false
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

export const updateListData = (state: BaseModel, data) => {
	state.loading = false
	state.error = undefined
	state.list = data
}
