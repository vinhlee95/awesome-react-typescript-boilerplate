import {createGlobalStyle} from './index'

export const GlobalStyle = createGlobalStyle`
 body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol';
		font-weight: 400;
		line-height: 1.7;
		color: ${({theme}) => theme.colors.primaryColor} ;
		font-size: ${({theme}) => theme.fontSizes.md};
	}

	h1 {
		text-transform: uppercase;
		font-size: ${({theme}) => theme.fontSizes.xl};
	}

	h2 {
		text-transform: uppercase;
		font-size: ${({theme}) => theme.fontSizes.lg};
	}
`
