import {css} from 'styled-components'
import {color} from '../abstracts/variables'

export const typography = css`
	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol';
		font-weight: 400;
		line-height: 1.7;
		color: ${color.black};
		font-size: ${color.white};
	}

	h1 {
		text-transform: uppercase;
		font-size: 2rem;
	}

	h2 {
		text-transform: uppercase;
		font-size: 1.8rem;
	}
`
