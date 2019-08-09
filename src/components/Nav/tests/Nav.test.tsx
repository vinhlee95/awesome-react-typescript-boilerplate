import * as React from 'react'
import 'jest-dom/extend-expect'
import {render} from '../../../utils/testUtils'
import Nav from '../Nav'
import {RouterPath} from '../../../router/Router'

describe('<About/>', () => {
	it('should render Nav items', () => {
		// Act
		const {getByText} = render(<Nav />)

		// Assert
		const navHome = getByText('nav.home')
		expect(navHome).toHaveAttribute('href', RouterPath.home)

		const navAbout = getByText('nav.about')
		expect(navAbout).toHaveAttribute('href', RouterPath.about)
	})
})
