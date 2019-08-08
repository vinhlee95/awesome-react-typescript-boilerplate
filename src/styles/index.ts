import * as styledComponents from 'styled-components'
import {ThemedStyledComponentsModule} from 'styled-components'

import {StyledTheme} from './theme'

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<StyledTheme>

export {styled, css, createGlobalStyle, keyframes, ThemeProvider}
