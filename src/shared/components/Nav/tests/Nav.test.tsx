import * as React from 'react'
import 'jest-dom/extend-expect'
import {render} from '../../../../utils/testUtils'
import Nav from '../Nav'

describe('<About/>', () => {
	it('should render Nav items', () => {
		// Act
		const {getByText} = render(<Nav />)

		// Assert
		expect(getByText('nav.home')).toBeInTheDocument()
		expect(getByText('nav.about')).toBeInTheDocument()
	})
})
