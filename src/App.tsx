/**
 * Client root component
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import * as React from 'react'
import {useEffect} from 'react'
import {hot} from 'react-hot-loader/root'
import {connect} from 'react-redux'
import {actions} from './modules/App'

// Components
import CoreLayout from './shared/layout/CoreLayout/CoreLayout'
import ErrorBoundaries from './shared/components/ErrorBoundaries/ErrorBoundaries'
import Router from './router/Router'

interface Props {
	initialize: () => any
	tearDown: () => any
}

export const App: React.FunctionComponent<Props> = ({initialize, tearDown}) => {
	useEffect(() => {
		initialize()

		return () => tearDown()
	}, [])

	return (
		<ErrorBoundaries>
			<CoreLayout>
				<Router />
			</CoreLayout>
		</ErrorBoundaries>
	)
}

const mapDispatchToProps = {
	initialize: actions.initialize,
	tearDown: actions.tearDown,
}

export default hot(
	connect(
		null,
		mapDispatchToProps,
	)(App),
)
