const appColors = {
	white: '#fff',
	black: '#191919',
}

export const colors = {
	primaryColor: appColors.black,
}

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

export interface StyledTheme {
	space: string[]
	fontSizes: {[key in keyof typeof fontSizes]: string}
	colors: {[key in keyof typeof colors]: string}
}

export const theme: StyledTheme = {
	space,
	fontSizes,
	colors,
}
