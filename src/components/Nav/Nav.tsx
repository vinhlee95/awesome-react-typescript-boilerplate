/**
 * Navigation component
 * Contain Links to app' routes
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import * as React from 'react'
import {useTranslation} from 'react-i18next'
import {RouterPath} from '../../router/Router'
import {NavList} from './style'
import {NavItem, NavItemProps} from './NavItem/NavItem'

const Nav = () => {
	const [t] = useTranslation()

	const navItems: NavItemProps[] = [
		{
			path: RouterPath.home,
			name: t('nav.home'),
			exact: true,
		},
		{
			path: RouterPath.about,
			name: t('nav.about'),
		},
	]

	return (
		<nav data-testid="nav-component">
			<NavList>
				{navItems.map(item => (
					<li key={item.path}>
						<NavItem path={item.path} exact={item.exact} name={item.name} />
					</li>
				))}
			</NavList>
		</nav>
	)
}

export default Nav
