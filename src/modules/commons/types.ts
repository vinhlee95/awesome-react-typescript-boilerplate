// Common types

export const get = {
	start: (modelName: string) => `${modelName}.GET_MODEL`,
	success: (modelName: string) => `${modelName}.GET_MODEL_SUCCESS`,
	fail: (modelName: string) => `${modelName}.GET_MODEL_FAIL`,
}

export const post = {
	start: (modelName: string) => `${modelName}.POST_MODEL`,
	success: (modelName: string) => `${modelName}.POST_MODEL_SUCCESS`,
	fail: (modelName: string) => `${modelName}.POST_MODEL_FAIL`,
}

export const put = {
	start: (modelName: string) => `${modelName}.PUT_MODEL`,
	success: (modelName: string) => `${modelName}.PUT_MODEL_SUCCESS`,
	fail: (modelName: string) => `${modelName}.PUT_MODEL_FAIL`,
}

export const remove = {
	start: (modelName: string) => `${modelName}.DELETE_MODEL`,
	success: (modelName: string) => `${modelName}.DELETE_MODEL_SUCCESS`,
	fail: (modelName: string) => `${modelName}.DELETE_MODEL_FAIL`,
}
