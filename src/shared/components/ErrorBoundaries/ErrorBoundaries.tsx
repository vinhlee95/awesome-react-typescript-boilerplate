/**
 * ErrorBoundaries component
 * Catch Javascript Error
 *
 * @author HuyTrinh<dinhhuyams@gmail.com>
 *
 */

import * as React from 'react'
import i18next from 'i18next'
import {withTranslation} from 'react-i18next'
import './ErrorBoundaries.scss'

interface Props {
	t: i18next.TFunction
	i18n: i18next.i18n
	tReady: boolean
}

class ErrorBoundaries extends React.Component<Props, any> {
	state = {error: null, errorInfo: null}

	componentDidCatch(error: any, errorInfo: any) {
		// Catch errors in any components below and re-render with error message
		this.setState({
			error,
			errorInfo,
		})
	}

	render() {
		const {t} = this.props

		if (this.state.errorInfo) {
			return (
				<div className="error-boundaries">
					<h2 className="error-boundaries__header">
						{t('error.unexpectedError')}
					</h2>
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

export default withTranslation()(ErrorBoundaries)
