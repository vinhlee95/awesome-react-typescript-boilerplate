import App from '../models/app'
import produce from 'immer'
import {createAction} from './commons/common'
import i18n from '../services/i18n'

// ------------------------------------
// Const
// ------------------------------------
const name = 'app'

// ------------------------------------
// Action Creator
// ------------------------------------

const types = {
	CHANGE_LANGUAGE: `${name}.CHANGE_LANGUAGE`,
}

const actions = {
	changeLanguage: createAction(types.CHANGE_LANGUAGE),
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: App = {
	language: undefined,
}

const app = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case types.CHANGE_LANGUAGE:
				draft.language = action.payload
				break
		}
	})

export const reducer = app

// ------------------------------------
// Actions
// ------------------------------------

export const changeLanguage = (language: string) => {
	return dispatch => {
		i18n
			.changeLanguage(language)
			.then(() => dispatch(actions.changeLanguage(language)))
	}
}
