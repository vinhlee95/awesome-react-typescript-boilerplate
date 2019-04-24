import * as React from 'react'
import {render as rtlRender} from 'react-testing-library'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router'
import {Provider} from 'react-redux'
import {configureStore} from '../configStore'

export const renderWithStore = (
	ui,
	{initialState = {}, store = configureStore(initialState), ...options} = {},
) => {
	return rtlRender(<Provider store={store}>{ui}</Provider>, options)
}

export const renderWithRouter = (
	ui,
	{
		route = '/',
		history = createMemoryHistory({initialEntries: ['/']}),
		...options
	} = {},
) => {
	return {
		...rtlRender(<Router history={history}>{ui}</Router>, options),
		history,
	}
}
