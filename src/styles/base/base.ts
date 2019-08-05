import {css} from 'styled-components'

export const baseStyle = css`
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	body {
		box-sizing: border-box;
		padding: 3rem;
	}
`
