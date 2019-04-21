/**
 * Navigation component
 * Contain Links to app' routes
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import * as React from 'react'
import {NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

// Constants
import {RouterPath} from '../../../constants'

// Styles
import './Nav.scss'

const Nav = () => {
	const [t] = useTranslation()

	return (
		<nav>
			<NavLink to={RouterPath.home} className="home">
				{t('nav.home')}
			</NavLink>
			<NavLink to={RouterPath.about} className="about">
				{t('nav.about')}
			</NavLink>
		</nav>
	)
}

export default Nav
