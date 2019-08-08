import * as React from 'react'
import {Wrapper} from './style'

export interface NavItemProps {
	path: string
	name: string
	exact?: boolean
}

export const NavItem: React.FunctionComponent<NavItemProps> = props => {
	const {path, name, exact} = props

	return (
		<Wrapper exact={exact} to={path} activeClassName="active">
			{name}
		</Wrapper>
	)
}
