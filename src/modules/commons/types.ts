// Common types

const get = {
	start: (modelName: string) => `${modelName.toUpperCase()}_GET_MODEL`,
	success: (modelName: string) =>
		`${modelName.toUpperCase()}_GET_MODEL_SUCCESS`,
	fail: (modelName: string) => `${modelName.toUpperCase()}_GET_MODEL_FAIL`,
}

const post = {
	start: (modelName: string) => `${modelName.toUpperCase()}_POST_MODEL`,
	success: (modelName: string) =>
		`${modelName.toUpperCase()}_POST_MODEL_SUCCESS`,
	fail: (modelName: string) => `${modelName.toUpperCase()}_POST_MODEL_FAIL`,
}

const put = {
	start: (modelName: string) => `${modelName.toUpperCase()}_PUT_MODEL`,
	success: (modelName: string) =>
		`${modelName.toUpperCase()}_PUT_MODEL_SUCCESS`,
	fail: (modelName: string) => `${modelName.toUpperCase()}_PUT_MODEL_FAIL`,
}

const remove = {
	start: (modelName: string) => `${modelName.toUpperCase()}_DELETE_MODEL`,
	success: (modelName: string) =>
		`${modelName.toUpperCase()}_DELETE_MODEL_SUCCESS`,
	fail: (modelName: string) => `${modelName.toUpperCase()}_DELETE_MODEL_FAIL`,
}

export {get, post, put, remove}
