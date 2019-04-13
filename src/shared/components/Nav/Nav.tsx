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
import { RouterPath } from '../../../constants'

const Nav = () => {
	return (
		<>
			<NavLink to={RouterPath.home}>Home</NavLink>
			<NavLink to={RouterPath.about}>About</NavLink>
		</>
	)
}

export default Nav
