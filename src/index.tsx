import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {configureStore, history} from './configStore'
import App from './App'
import ErrorBoundaries from './shared/components/ErrorBoundaries/ErrorBoundaries'
import './styles/index.scss'
import './i18n'
import {ConnectedRouter} from 'connected-react-router'

const store = configureStore()

const app = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<ErrorBoundaries>
				<App />
			</ErrorBoundaries>
		</ConnectedRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))
