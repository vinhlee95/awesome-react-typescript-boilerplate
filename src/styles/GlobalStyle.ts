import {createGlobalStyle} from './index'
import {media} from './utils'

export const GlobalStyle = createGlobalStyle`

:root {
	font-size: 56.25%;
		
	${media.tabLand} {
		font-size: 56.25%;
	}
		
	${media.tabPort} {
		font-size: 50%;
	}
		
	${media.bigDesktop} {
		font-size: 75%;
	}
}

 body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol';
		font-weight: 400;
		line-height: 1.7;
		color: ${props => props.theme.colors.primaryColor} ;
		font-size: ${props => props.theme.fontSizes.md} ;
	}

	h1 {
		text-transform: uppercase;
		font-size: ${props => props.theme.fontSizes.xl};
	}

	h2 {
		text-transform: uppercase;
		font-size: ${props => props.theme.fontSizes.lg};
	}
`
