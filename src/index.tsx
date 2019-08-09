import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import {ThemeProvider} from 'styled-components'
import {configureStore, history} from './configStore'
import './services/i18n'
import './services/api'
import App from './App'
import {GlobalStyle} from './styles/GlobalStyle'
import {theme} from './styles/theme'
import 'sanitize.css/sanitize.css'

const store = configureStore()

const app = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<React.Suspense fallback={<div>Loading...</div>}>
				<ThemeProvider theme={theme}>
					<>
						<App />
						<GlobalStyle />
					</>
				</ThemeProvider>
			</React.Suspense>
		</ConnectedRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))
