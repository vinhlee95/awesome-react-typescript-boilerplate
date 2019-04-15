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

const Nav = () => {
	const {t} = useTranslation()

	return (
		<>
			<NavLink to={RouterPath.home}>{t('nav.home')}</NavLink>
			<NavLink to={RouterPath.about}>{t('nav.about')}</NavLink>
		</>
	)
}

export default Nav
