import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.scss'

// components
import CoreLayout from './shared/layout/CoreLayout'
import App from './App'

ReactDOM.render(
	<CoreLayout>
		<App />
	</CoreLayout>,
	document.getElementById('root'),
)
