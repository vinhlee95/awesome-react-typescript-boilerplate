import App from '../models/App'
import produce from 'immer'
import {createAction} from './commons/common'
import i18n from '../services/i18n'

// ------------------------------------
// Const
// ------------------------------------
const moduleName = 'app'

// ------------------------------------
// Action Creator
// ------------------------------------

const types = {
	INITIALIZE: `@@${moduleName}/INITIALIZE`,
	TEAR_DOWN: `@@${moduleName}/TEAR_DOWN`,
	CHANGE_LANGUAGE: `@@${moduleName}/CHANGE_LANGUAGE`,
}

const actions = {
	initialize: createAction(types.INITIALIZE),
	tearDown: createAction(types.TEAR_DOWN),
	changeLanguage: createAction(types.CHANGE_LANGUAGE),
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: App = {
	language: undefined,
}

export const appReducer = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case types.CHANGE_LANGUAGE:
				draft.language = action.payload
				break
		}
	})

// ------------------------------------
// Actions
// ------------------------------------

export const initialize = () => {
	return dispatch => {
		dispatch(actions.initialize())

		i18n.on('initialized', () => {
			dispatch(actions.changeLanguage(i18n.language))
		})
	}
}

export const tearDown = () => {
	return dispatch => {
		dispatch(actions.tearDown())

		i18n.off('initialized', () => {
			dispatch(actions.changeLanguage(undefined))
		})
	}
}
export const changeLanguage = (language: string) => {
	return dispatch => {
		i18n
			.changeLanguage(language)
			.then(() => dispatch(actions.changeLanguage(language)))
	}
}
