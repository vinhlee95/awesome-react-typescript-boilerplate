import {css} from 'styled-components'

const size = {
	phone: 600,
	tabPort: 900,
	tabLand: 1200,
	bigDesktop: 1800,
}

// export const below = Object.keys(size).reduce((acc, label) => {
// 	acc[label] = (...args: any) => css`
// 		@media (max-width: ${size[label] / 16}em) {
// 			${css(...args)}
// 		}
// 	`
//
// 	return acc
// }, {})
