import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.scss'
class App extends React.Component<{ name: string }, {}> {
	render() {
		return (
			<div>
				<h1>{this.props.name} </h1>
			</div>
		)
	}
}

ReactDOM.render(
	<App name="Awesome React boilerplate" />,
	document.getElementById('root'),
)
