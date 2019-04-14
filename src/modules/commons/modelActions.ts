import * as api from '../../api'
import * as types from './types'

const modelActions = {
	getModel: (modelName: string, id?: number) => dispatch => {
		dispatch({
			type: types.get.start(modelName),
		})

		api[modelName].get(id).then(
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
