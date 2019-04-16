import * as api from '../../api'
import {getTypes} from './types'
import {createAction} from './common'

const modelActions = {
	getModel: (
		modelName: string,
		path: string,
		params?: number,
		query?: string,
	) => dispatch => {
		dispatch(createAction(getTypes.success(modelName))())

		api.requests.get(path, params, query).then(
			data => {
				dispatch(createAction(getTypes.success(modelName))(data))
			},
			error => {
				dispatch(createAction(getTypes.fail(modelName))(undefined, error))
			},
		)
	},
}

export default modelActions
