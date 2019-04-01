import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { string } from 'prop-types';

class App extends React.Component<{name: string}, {}> {
	render() {
		return <h1>{name}</h1>
	}
}

ReactDOM.render(<App name='Hello world' />, document.getElementById('root'))