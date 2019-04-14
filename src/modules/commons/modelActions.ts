import * as api from '../../api'
import * as types from './types'

const modelActions = {
	getModel: (
		modelName: string,
		path: string,
		params?: number,
		query?: string,
	) => dispatch => {
		dispatch({
			type: types.get.start(modelName),
		})

		api.requests.get(path, params, query).then(
			data => {
				dispatch({
					type: types.get.success(modelName),
					payload: {data},
				})
			},
			error => {
				dispatch({
					type: types.get.fail(modelName),
					error,
				})
			},
		)
	},
}

export default modelActions
