import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './styles/index.scss'

import App from './App'
import ErrorBoundaries from './shared/components/ErrorBoundaries/ErrorBoundaries'

const app = (
	<ErrorBoundaries>
		<App />
	</ErrorBoundaries>
)

ReactDOM.render(app, document.getElementById('root'))
