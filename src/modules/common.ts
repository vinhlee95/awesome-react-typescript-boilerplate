import BaseModel from '../models/baseModel'

export const startLoading = (state: BaseModel) => {
	return {
		loading: true,
		error: undefined,
		state,
	}
}

export const endLoading = (state: BaseModel, error) => {
	return {
		state,
		loading: false,
		error,
	}
}

export const updateData = (state: BaseModel) => {
	return {
		state,
		loading: false,
		error: undefined,
	}
}

export const updateListData = (state: BaseModel) => {
	return {
		state,
		loading: false,
		error: undefined,
	}
}
