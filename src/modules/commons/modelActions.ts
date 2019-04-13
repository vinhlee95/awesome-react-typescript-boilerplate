import * as api from '../../api'
import * as type from './types'

const modelActions = {
	getModel: (modelName: string, id?: number) => dispatch => {
		dispatch({
			type: type.get.start(modelName),
		})

		api[modelName].get(id).then(
			data => {
				dispatch({
					type: type.get.success(modelName),
					payload: {data},
				})
			},
			error => {
				dispatch({
					type: type.get.fail(modelName),
					error,
				})
			},
		)
	},
}

export default modelActions
