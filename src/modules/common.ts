import BaseModel from '../models/baseModel'

export const startLoading = (state: BaseModel) => {
	return {
		...state,
		loading: true,
		error: undefined,
	}
}

export const endLoading = (state: BaseModel, error) => {
	return {
		...state,
		loading: false,
		error,
	}
}

export const updateData = (state: BaseModel, data) => {
	return {
		...state,
		loading: false,
		error: undefined,
		...data,
	}
}

export const updateListData = (state: BaseModel, data) => {
	return {
		...state,
		loading: false,
		error: undefined,
		list: data,
	}
}
