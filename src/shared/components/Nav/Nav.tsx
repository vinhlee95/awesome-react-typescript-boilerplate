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
		<nav className="nav">
			<ul>
				<NavItem path={RouterPath.home} exact={true} name={t('nav.home')} />
				<NavItem path={RouterPath.about} name={t('nav.about')} />
			</ul>
		</nav>
	)
}

const NavItem = props => {
	const {path, name, exact} = props

	return (
		<li>
			<NavLink
				className="nav__item"
				exact={exact}
				to={path}
				activeClassName="active"
			>
				{name}
			</NavLink>
		</li>
	)
}

export default Nav
