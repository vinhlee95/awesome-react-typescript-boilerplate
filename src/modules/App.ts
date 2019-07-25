import produce from 'immer'
import {createAction, getType, isActionOf} from 'typesafe-actions'
import App from '../models/App'
import {Epic} from 'redux-observable'
import {Action} from 'redux'
import {RootState} from './reducers'
import {filter, switchMap, mapTo, tap} from 'rxjs/operators'
import {from, Observable} from 'rxjs'

// ------------------------------------
// Const
// ------------------------------------
const moduleName = 'app'

// ------------------------------------
// Actions
// ------------------------------------

export const initialize = createAction(`@@${moduleName}/INITIALIZE`)
export const tearDown = createAction(`@@${moduleName}/TEAR_DOWN`)
export const changeLanguage = createAction(
	`@@${moduleName}/CHANGE_LANGUAGE`,
	action => {
		return (language: string) => action({language})
	},
)

// ------------------------------------
// Reducer
// ------------------------------------

export type AppState = App

const initialState: AppState = {
	language: undefined,
}

const app = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case getType(changeLanguage):
				draft.language = action.payload
				break
		}
	})

export const reducer = app

// ------------------------------------
// Epics
// ------------------------------------

const initializeEpic: Epic<Action, Action, RootState> = (
	action$,
	state$,
	{i18n},
) => {
	return action$.pipe(
		filter(isActionOf(initialize)),
		tap(() => console.log('Initialize app')),
		switchMap(action => {
			return new Observable<Action>(observer => {
				console.log('run here too: ', i18n)
				i18n.on('initialized', () => {
					console.log('Change language: ')
					observer.next(changeLanguage(i18n.language))
				})
			})
		}),
	)
}

const tearDownEpic: Epic<Action, Action, RootState> = (
	action$,
	state$,
	{i18n},
) => {
	return action$.pipe(
		filter(isActionOf(tearDown)),
		switchMap(action => {
			return new Observable<Action>(observer => {
				i18n.off('initialized', () => {
					observer.next(changeLanguage(undefined))
				})
			})
		}),
	)
}

const changeLanguageEpic: Epic<Action, Action, RootState> = (
	action$,
	state$,
	{i18n},
) => {
	return action$.pipe(
		filter(isActionOf(changeLanguage)),
		switchMap(action => {
			const {language} = action.payload
			return from(i18n.changeLanguage(language)).pipe(
				mapTo(changeLanguage(language)),
			)
		}),
	)
}

export const appEpics = [initializeEpic, tearDownEpic, changeLanguageEpic]
