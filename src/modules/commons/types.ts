// Common types

export const get = {
	start: (modelName: string) => `${modelName}_GET_MODEL`,
	success: (modelName: string) => `${modelName}_GET_MODEL_SUCCESS`,
	fail: (modelName: string) => `${modelName}_GET_MODEL_FAIL`,
}

export const post = {
	start: (modelName: string) => `${modelName}_POST_MODEL`,
	success: (modelName: string) => `${modelName}_POST_MODEL_SUCCESS`,
	fail: (modelName: string) => `${modelName}_POST_MODEL_FAIL`,
}

export const put = {
	start: (modelName: string) => `${modelName}_PUT_MODEL`,
	success: (modelName: string) => `${modelName}_PUT_MODEL_SUCCESS`,
	fail: (modelName: string) => `${modelName}_PUT_MODEL_FAIL`,
}

export const remove = {
	start: (modelName: string) => `${modelName}_DELETE_MODEL`,
	success: (modelName: string) => `${modelName}_DELETE_MODEL_SUCCESS`,
	fail: (modelName: string) => `${modelName}_DELETE_MODEL_FAIL`,
}
