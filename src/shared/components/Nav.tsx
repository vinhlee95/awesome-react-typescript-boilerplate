/**
 * Navigation component
 * Contain Links to app' routes
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import * as React from 'react'
import { Link } from 'react-router-dom'

// Constants
import { routerPath } from '../../constants'

const Nav = () => {
	return (
		<>
			<Link to={routerPath.home}>Home</Link>
			<Link to={routerPath.about}>About</Link>
		</>
	)
}

export default Nav
