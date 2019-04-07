import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {

	render() {
		return(
			<Router>
				<Switch>
					<Route exact path='/' render={() => <h1>Home</h1>} />
					<Route path='/about' render={() => <h1>About</h1>} />
				</Switch>
			</Router>
		)
	}
}

export default App