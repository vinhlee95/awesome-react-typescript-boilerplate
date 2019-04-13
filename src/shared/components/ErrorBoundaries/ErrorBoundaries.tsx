/**
 * ErrorBoundaries component
 * Catch Javascript Error
 *
 * @author HuyTrinh<dinhhuyams@gmail.com>
 *
 */

import * as React from 'react'
import './ErrorBoundaries.scss'

class ErrorBoundaries extends React.Component {
	state = {error: null, errorInfo: null}

	componentDidCatch(error: any, errorInfo: any) {
		// Catch errors in any components below and re-render with error message
		this.setState({
			error,
			errorInfo,
		})
	}

	render() {
		if (this.state.errorInfo) {
			return (
				<div className="error-boundaries">
					<h2 className="error-boundaries__header">Something went wrong</h2>
					<details className="error-boundaries__detail">
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo.componentStack}
					</details>
				</div>
			)
		}

		// Render children if no error
		return this.props.children
	}
}

export default ErrorBoundaries
