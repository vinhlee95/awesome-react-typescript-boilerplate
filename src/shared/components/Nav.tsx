/**
 * Navigation component
 * Contain Links to app' routes
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import * as React from 'react'
import { Link } from 'react-router-dom'

interface navProps {
	homePath: string
	aboutPath: string
}

const Nav = (props: navProps) => {
	return (
		<>
			<Link to={props.homePath}>Home</Link>
			<Link to={props.aboutPath}>About</Link>
		</>
	)
}

export default Nav
