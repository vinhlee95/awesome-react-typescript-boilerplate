import {createGlobalStyle, css} from 'styled-components'
import {baseStyle, typography} from './base'

export const GlobalStyle = createGlobalStyle`
  ${baseStyle};
  ${typography};
`
