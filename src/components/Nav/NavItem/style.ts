import {styled} from '../../../styles'
import {NavLink} from 'react-router-dom'

export const Wrapper = styled(NavLink)`
	text-decoration: none;
	color: rgb(133, 129, 129);
	text-transform: uppercase;
	border-bottom: 0.1rem solid transparent;

	&:hover,
	&:active,
	&.active {
		color: #191919;
		border-bottom: 0.1rem solid #191919;
	}

	&:last-child {
		margin-left: 0.8rem;
	}
`
