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
import {Details} from './style'

interface Props {
	t: i18next.TFunction
	i18n: i18next.i18n
	tReady: boolean
}

interface State {
	error: any
	errorInfo: any
}

class ErrorBoundaries extends React.Component<Props, State> {
	state = {error: undefined, errorInfo: undefined}

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
				<div>
					<h2>{t('error.unexpectedError')}</h2>
					<Details>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo.componentStack}
					</Details>
				</div>
			)
		}

		// Render children if no error
		return this.props.children
	}
}

export default withTranslation()(ErrorBoundaries)
