import * as React from 'react'
import {render as rtlRender} from 'react-testing-library'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import App from './App'

const render = (ui, {route = '/', history = createMemoryHistory({initialEntries: [route]}), ...options}) => {
	return {
		...rtlRender(<Router history=history>{ui}</Router>, options),
			history
	}
}

