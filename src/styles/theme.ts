import {css, DefaultTheme} from 'styled-components'

export const colors = {
	white: '#fff',
	black: '#191919',
	lightGray: '#858181',
	bisque: '#ffe4c4',
	aliceblue: '#f0f8ff',
}

export const appColors = {
	primary: colors.bisque,
	secondary: colors.aliceblue,
	text: colors.black,
}

export const fontStack = css`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol'`

export const fontSizes = {
	xs: '1.2rem',
	sm: '1.4rem',
	md: '1.6rem',
	lg: '1.8rem',
	xl: '2.4rem',
}

const space = [
	'0',
	'.4rem',
	'.8rem',
	'1.2rem',
	'1.6rem',
	'2.0rem',
	'3.2rem',
	'4.8rem',
	'6.4rem',
	'9.6rem',
]

export const theme: DefaultTheme = {
	space,
	fontSizes,
	appColors,
	colors,
	fontStack,
}
