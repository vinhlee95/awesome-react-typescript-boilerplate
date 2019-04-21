/**
 * Core Layout component
 * Wrap the root component with layout UI components
 * e.g Navigation, Footer, Modal, Alert...
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import * as React from 'react'

// Component
import Nav from '../../components/Nav/Nav'

const CoreLayout = (props: any) => {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main>{props.children}</main>
		</>
	)
}

export default CoreLayout
