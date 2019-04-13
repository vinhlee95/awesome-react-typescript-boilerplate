import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './configStore'
import App from './App'
import ErrorBoundaries from './shared/components/ErrorBoundaries/ErrorBoundaries'
import './styles/index.scss'

const app = (
	<Provider store={store}>
		<ErrorBoundaries>
			<App />
		</ErrorBoundaries>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))
