import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import {configureStore, history} from './configStore'
import './services/i18n'
import './services/api'
import App from './App'
import './styles/index.scss'

const store = configureStore()

const app = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))
