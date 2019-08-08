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
import {RouterPath} from '../../../router/Router'

const Nav = () => {
	const [t] = useTranslation()

	return (
		<nav data-testid="nav-component">
			<ul className="nav">
				<NavItem path={RouterPath.home} exact name={t('nav.home')} />
				<NavItem path={RouterPath.about} name={t('nav.about')} />
			</ul>
		</nav>
	)
}

interface NavItemProps {
	path: string
	name: string
	exact?: boolean
}

const NavItem: React.FunctionComponent<NavItemProps> = props => {
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
