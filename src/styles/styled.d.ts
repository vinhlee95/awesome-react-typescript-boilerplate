import 'styled-components'
import {FlattenSimpleInterpolation} from 'styled-components'
import {appColors, fontSizes, colors} from './theme'

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		space: string[]
		fontSizes: {[key in keyof typeof fontSizes]: string}
		appColors: {[key in keyof typeof appColors]: string}
		colors: {[key in keyof typeof colors]: string}
		fontStack: FlattenSimpleInterpolation
	}
}
