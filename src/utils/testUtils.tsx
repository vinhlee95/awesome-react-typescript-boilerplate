import * as React from 'react'
import {render as rtlRender} from 'react-testing-library'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router'
import {Provider} from 'react-redux'
import {configureStore} from '../configStore'
import CoreLayout from '../layout/CoreLayout/CoreLayout'

export const render = (
	ui,
	{route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
	{initialState = {}, store = configureStore(initialState)} = {},
	options = {},
) => {
	return {
		...rtlRender(
			<Provider store={store}>
				<Router history={history}>
					<React.Suspense fallback={<div data-testid="suspense">Loading</div>}>
						<CoreLayout>{ui}</CoreLayout>
					</React.Suspense>
				</Router>
			</Provider>,
			options,
		),
		history,
	}
}
