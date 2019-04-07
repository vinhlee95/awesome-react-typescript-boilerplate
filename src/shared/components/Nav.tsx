/**
 * Navigation component
 * Contain Links to app' routes
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import * as React from 'react'
import { NavLink } from 'react-router-dom'

// Constants
import { routerPath } from '../../constants'

const Nav = () => {
	return (
		<>
			<NavLink to={routerPath.home}>Home</NavLink>
			<NavLink to={routerPath.about}>About</NavLink>
		</>
	)
}

export default Nav
