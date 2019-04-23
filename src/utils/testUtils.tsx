import * as React from 'react'
import {render as rtlRender} from 'react-testing-library'
import {Provider} from 'react-redux'
import {configureStore} from '../configStore'

export const renderWithStore = (
	ui,
	{initialState = {}, store = configureStore(initialState), ...options} = {},
) => {
	return rtlRender(<Provider store={store}>{ui}</Provider>, options)
}
