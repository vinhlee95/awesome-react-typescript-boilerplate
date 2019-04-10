export const startLoading = state => {
	return {
		...state,
		loading: true,
		error: undefined,
	}
}

export const endLoading = (state, error) => {
	return {
		...state,
		loading: false,
		error,
	}
}

export const updateData = (state, data) => {
	return {
		...state,
		loading: false,
		error: undefined,
		data,
	}
}
