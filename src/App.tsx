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
import {initialize, tearDown} from './modules/App'

// Components
import CoreLayout from './shared/layout/CoreLayout/CoreLayout'
import ErrorBoundaries from './shared/components/ErrorBoundaries/ErrorBoundaries'
import Router from './router/router'

interface Props {
	initialize: () => any
	tearDown: () => any
}

const App: React.FunctionComponent<Props> = ({initialize, tearDown}) => {
	useEffect(() => {
		initialize()

		return () => tearDown()
	}, [])

	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<ErrorBoundaries>
				<CoreLayout>
					<Router />
				</CoreLayout>
			</ErrorBoundaries>
		</React.Suspense>
	)
}

const mapDispatchToProps = {
	initialize,
	tearDown,
}

export default hot(
	connect(
		null,
		mapDispatchToProps,
	)(App),
)
